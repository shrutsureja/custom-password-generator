import { useState } from "react";

function PasswordGenerator({setGeneratedPassword}) {
    const [passwordLength, setPasswordLength ] = useState(12);
    const [includeLowerCase, setLowerCase] = useState(true);
    const [includeUpperCase, setUpperCase] = useState(true);
    const [includeCharacter, setCharacter] = useState(false);
    const [includeNumbers, setNumbers] = useState(false);

    function generateNewPassword(){
        const characters = {
            uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            lowercase: "abcdefghijklmnopqrstuvwxyz",
            numbers: "0123456789",
            specialSymbols: "!@#$%^&*()_+[]{}|;:,.<>?",
        };
        let set = '';
        if(includeLowerCase)set+=characters.lowercase;
        if(includeCharacter)set+=characters.specialSymbols;
        if(includeNumbers)set+=characters.numbers;
        if(includeUpperCase)set+=characters.uppercase;
        
        let newPassword ='';
        for(let i = 0; i < passwordLength; i++){
            newPassword += set.charAt(Math.floor(Math.random()*set.length));
        }
        console.log(newPassword);
        setGeneratedPassword(newPassword);
    }
    
    
    return(
        <>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Password Length:</label>
                <input className="border-2 border-gray-300 w-full rounded-md p-2" type="number" min={1} max={24} value={passwordLength} onChange={(event)=>setPasswordLength(event.target.value)}/>
            </div>
            <label className="text-sm font-medium text-gray-600">Include:</label>
            <div className="mb-1">
                <input className="mr-2 border-2 h-full w-auto" type="checkbox" id="lowerCase" checked={includeLowerCase} onChange={()=>{setLowerCase(!includeLowerCase)}}/>
                {/* <input className="mr-2 border-2 h-full w-auto" type="checkbox" id="lowerCase" checked={includeLowerCase} onChange={setLowerCase(!includeLowerCase)}/> */}
                {/* DOUBT: the Above line which is commented is re-rendering continously why !!*/}
                <label className="text-md font-normal">LowerCase alphabets</label>
            </div>
            <div className="mb-1">
                <input className="mr-2 border-2 h-full w-auto" type="checkbox" id="upperCase" checked={includeUpperCase} onChange={()=>{setUpperCase(!includeUpperCase)}}/>
                <label className="text-md font-normal">UpperCase alphabets</label>
            </div>
            <div className="mb-1">
                <input className="mr-2 border-2 h-full w-auto" type="checkbox" id="characters" checked={includeCharacter} onChange={()=>{setCharacter(!includeCharacter)}}/>
                <label className="text-md font-normal">Special characters</label>
            </div>
            <div className="mb-3">
                <input className="mr-2 border-2 h-full w-auto" type="checkbox" id="numbers" checked={includeNumbers} onChange={()=>{setNumbers(!includeNumbers)}}/>
                <label className="text-md font-normal">Numbers</label>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-600 text-white rounded-md p-3" onClick={generateNewPassword}>Generate Password</button>
            </div>
            <div className="mt-7 text-sm text-red-400">More Features comming soon!!</div>
        </>
    );
}

export default PasswordGenerator;