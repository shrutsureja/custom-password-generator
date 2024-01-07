import copyImg from "../assets/copy.png"

const PasswordDisplay = ({password}) => {
    return(
        <div>
            <label className="text-sm font-medium text-gray-600">Generated Password:</label>
            <div className="border-2 border-gray-300 rounded-md flex justify-between">
                <input value={password || "Your password will be here"} disabled className={`m-3 ${!password? "text-gray-400":""}`}/>
                <button className="p-2 border-l-2 border-gray-300">
                    <img className="w-6"  src={copyImg} alt="copy image"/>
                </button>
            </div>
        </div>
    )
}

export default PasswordDisplay;