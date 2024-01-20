import PasswordDisplay from "./components/PasswordDisplay"
import PasswordGenerator from "./components/PasswordGenerator"
import { useState } from "react"
// import { SpeedInsights } from '@vercel/speed-insights'
import { injectSpeedInsights } from '@vercel/speed-insights';
injectSpeedInsights();
// import { useEffect } from "react"
import './App.css'

function App() {
  const [generatedPassword, setGeneratedPassword] = useState(null);
  // setGeneratedPassword("shrut");
  // useEffect(()=>{
  //   setGeneratedPassword("Shrasdat");
  //   alert("in the useEffect: " + generatedPassword.length);
  //   console.log("Generated Password: "+ generatedPassword)
  // },[generatedPassword]);
  // setGeneratedPassword
  return (
    <>
      <div className="bg-gray-200 h-screen w-screen flex justify-center items-center">
        <div className="absolute z-[1] bottom-5 left-6">
          <div className="flex items-center justify-between gap-3">
            <div className="">Made with &hearts; <a href="https://github.com/shrutsureja" className="underline text-blue-400">Shrut Sureja</a></div>
            <a href="https://github.com/shrutsureja/custom-password-generator" target="_blank" rel="noreferrer">
              <img src="../github-mark/github-mark.png" className="w-8"/>
            </a>
          </div>
        </div>
        <div className="bg-white rounded-md max-w-md w-full shadow-md p-8">
          <h1 className="text-center font-mono font-[600] text-xl mb-8">Custom Password Generator</h1>
            <PasswordDisplay password={generatedPassword}/>
            <div className="mb-4"></div>
            <PasswordGenerator setGeneratedPassword={setGeneratedPassword}/>
        </div>
      </div>
        {/* <SpeedInsights/> */}
    </>
  )
}

export default App