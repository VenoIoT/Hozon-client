"use client"
import React, { useState } from 'react'

export default function page() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    const allCharacters = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;

    let generatedPassword = '';
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      generatedPassword += allCharacters[randomIndex];
    }

    setPassword(generatedPassword);
  };
  return (
    <div>
      <p>Keep track of API keys used for accessing third-party services or systems.</p>


      <div>
        <button onClick={generatePassword}>Generate Password</button>
        {password && <p>Password: {password}</p>}
      </div>
    </div>
  )
}
