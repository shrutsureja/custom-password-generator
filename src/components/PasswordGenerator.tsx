
function PasswordGenerator(){
    return(
        <>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Password Length:</label>
                <input className="border-2 border-gray-300 w-full rounded-md p-2" type="number" min={1} max={24}/>
            </div>
            <label className="text-sm font-medium text-gray-600">Include:</label>
            <div className="mb-1">
                <input className="mr-2 border-2 h-full w-auto" type="checkbox" id="lowerCase"/>
                <label className="text-md font-normal">LowerCase alphabets</label>
            </div>
            <div className="mb-1">
                <input className="mr-2 border-2 h-full w-auto" type="checkbox" id="upperCase"/>
                <label className="text-md font-normal">UpperCase alphabets</label>
            </div>
            <div className="mb-1">
                <input className="mr-2 border-2 h-full w-auto" type="checkbox" id="characters"/>
                <label className="text-md font-normal">Special characters</label>
            </div>
            <div className="mb-3">
                <input className="mr-2 border-2 h-full w-auto" type="checkbox" id="numbers"/>
                <label className="text-md font-normal">Numbers</label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Keywords (comma seperated):</label>
                <input className="border-2 border-gray-300 w-full rounded-md p-2" type="text"/>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-600 text-white rounded-md p-3">Generate Password</button>
            </div>
        </>
    );
}

export default PasswordGenerator;