import React, { useState } from 'react';
import axios from "axios"
import './App.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        // Basic form validation
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        axios.post("http://localhost:5000/auth/register", {
            email: email,
            password: password
        }).then(res => {
            alert("login successful")
            window.location.href = "/simulation"
        }).catch(err => {
            console.log(err)
            alert(err.response.data.message)
        })

        // Call to backend or authentication service here
        console.log('registering in with', email, password);
    };

    return (
        <div style={styles.container}>
            <h2>Register to Interview Simulator</h2>
            welcome soldiers!!
            <form onSubmit={handleRegister} style={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                {error && <p style={styles.error}>{error}</p>}
                <button type="submit" style={styles.button}>
                    Register
                </button>
            </form>
        </div>
    );};

// Basic inline styling
const styles = {
    container: {
      backgroundColor:'orange',
        maxWidth: '400px',
        margin: '100px auto',
        padding: '60px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'blue',
        color: 'white',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        margin: '10px 0',
    },
};

export default Register;