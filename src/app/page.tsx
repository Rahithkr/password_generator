

'use client';
import { useState } from "react";
import { ShootingStars } from "./components/ui/Shootingstar";
import { StarsBackground } from "./components/ui/Star_backgorund";
import { toast } from "sonner"


export default function Home() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);


  const generatePassword = () => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    let characterPool = "";
    if (includeUppercase) characterPool += upperCaseLetters;
    if (includeLowercase) characterPool += lowerCaseLetters;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;
  
    if (characterPool.length === 0) {
      toast("Please select at least one character type.");
      return;
    }
  
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }
    setPassword(generatedPassword);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast("Password copied to clipboard!");
  };

  return (
    <div className="h-[50rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <h2 className="text-5xl text-green-600">Password Generator</h2>
      <h2 className="relative z-10 text-2xl md:text-2xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-thin bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex flex-col md:flex-row items-center gap-2 md:gap-8">
        <div className="container bg-sky-950 h-600 w-full max-w-[600px] p-5 text-white rounded-lg shadow-lg">
          <div className="header flex flex-col md:flex-row items-center justify-between text-red-700 mb-6">
            <span className="text-lg font-bold">Generated Password</span>
            <button
              onClick={copyToClipboard}
              type="button"
              className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 md:mt-0"
            >
              Copy to Clipboard
            </button>
          </div>

          <div className="passwordDisplay mb-6 text-center">
            <span className="text-2xl font-semibold">{password}</span>
          </div>

          <div className="charLength mt-8">
            <span className="flex justify-between items-center mb-4">
              <label className="text-white font-medium">Character Length</label>
              <label className="text-white font-bold">{length}</label>
            </span>
     
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))} // Convert to number
              className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer"
              />

          </div>

          <div className="options mt-6 grid grid-cols-2 gap-4">
            <label className="flex items-center text-xl">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="mr-2 "
              />
              Include Uppercase Letters
            </label>
            <label className="flex items-center text-xl">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
                className="mr-2"
              />
              Include Lowercase Letters
            </label>
            <label className="flex items-center text-xl">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="mr-2"
              />
              Include Numbers
            </label>
            <label className="flex items-center text-xl">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
                className="mr-2"
              />
              Include Symbols
            </label>
          </div>

          <button
            onClick={generatePassword}
            className="mt-8 w-full text-white bg-gradient-to-r from-teal-500 to-lime-500 hover:bg-gradient-to-l hover:from-teal-500 hover:to-lime-500 focus:ring-4 focus:outline-none focus:ring-lime-500 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Generate Password
          </button>
        </div>
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

