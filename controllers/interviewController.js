const asyncHandler = require("express-async-handler")
const { GoogleGenerativeAI } = require("@google/generative-ai");

const userModel = require("../models/userModel");

const genAI = new GoogleGenerativeAI("AIzaSyBbRhiunu8AT9eOUBxpL9CkwODkHQThIxA");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const query = "how can i access AWS";  

// const prompt = consider you are a chatbot of apple, the user asked you "${query}"\n\return me with only these things under the following criteria\nreturn "greeting" if the question is a greeting or a normal chat.\nreturn "invalid" if the question is not related to apple company\nreturn "product" if the question is about an apple product\nreturn "service" if the question is about an apple service\nreturn "about" if the question is related to apple company 

const startInterview = asyncHandler(async (req, res) => {
  const email = req.body.email;

  const user = await userModel.findOne({ email })
  if (!user) {
    res.status(400).json({ message: "user not found" })
    return
  }

  const prompt = `${email} is attending an technical interview right now. start the interview by asking them a question (give the question alone)`

  const result = await model.generateContent(prompt);
  const firstQuestion = result.response.text()

  const userQuestions = [firstQuestion];

  const userUpdated = await userModel.findOneAndUpdate(
    { email },
    { questions: userQuestions },
    { new: true }
  )

  if (!userUpdated) {
    res.status(400).json({ message: "some error occured while generating questions" })
  }

  res.status(200).json({ initialQuestion: firstQuestion })
})

const conductInterview = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const userAns = req.body.ans;

  const user = await userModel.findOne({ email })
  if (!user) {
    res.status(400).json({ message: "user not found" })
    return
  }

  if (!user.questions || user.questions.length === 0) {
    res.status(400).json({ message: "No questions found for the user" });
    return;
  }

  // Insert user answer into the last question object
  const lastQuestionIndex = user.questions.length - 1;
  user.questions[lastQuestionIndex].answer = userAns;

  const userUpdated = await userModel.findOneAndUpdate(
    { email },
    { questions: user.questions },
    { new: true }
  )

  if (!userUpdated) {
    res.status(400).json({ message: "some error occured while generating questions" })
  }

  var prevQuestions = "" 

  for (var i = 0; i < user.questions.length; i++) {
    const ans = user.questions[i].answer ? `answer ${i + 1}: ${user.questions[i].answer}` : "";
    prevQuestions += `\nquestion ${i + 1} : ${user.questions[i].question} ${ans}`
  }

  if (user.questions.length >= 10) {
    const prompt = `the interview with ${email} is currently completed and the conversations we had with them are \n${prevQuestions} \n now based on the current interview give them a score (for a total of 10 points, give only the score) `
    const result = await model.generateContent(prompt);
    const score = result.response.text()
    
    res.status(200).json({ message: `your score ${score}` })
    return
  }

  const prompt = `the interview with ${email} is currently ongoing and the conversations we had with them are \n${prevQuestions} \n now based on the current situation carried so on ask them a new question (give question alone)`

  const result = await model.generateContent(prompt);
  const firstQuestion = result.response.text()

  res.status(200).json({ initialQuestion: firstQuestion })
})

module.exports = {startInterview, conductInterview}