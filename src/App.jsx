import PasswordDisplay from "./components/PasswordDisplay"
import PasswordGenerator from "./components/PasswordGenerator"
import { useState } from "react"
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
        <div className="bg-white rounded-md max-w-md w-full shadow-md p-8">
          <h1 className="text-center font-mono font-[600] text-xl mb-8">Custom Password Generator</h1>
            <p>{generatedPassword}</p>
            <PasswordDisplay password={generatedPassword}/>
            <div className="mb-4"></div>
            <PasswordGenerator setGeneratedPassword={setGeneratedPassword}/>
        </div>
      </div>
    </>
  )
}

export default App