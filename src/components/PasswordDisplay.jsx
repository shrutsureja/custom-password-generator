import copyImg from "../assets/copy.png"

const PasswordDisplay = () => {
    return(
        <div>
            <label className="text-sm font-medium text-gray-600">Generated Password:</label>
            <div className="border-2 border-gray-300 rounded-md flex justify-between">
                <p className="m-3"></p>
                <button className="p-2 border-l-2 border-gray-300">
                    <img className="w-6"  src={copyImg} alt="copy image"/>
                </button>
            </div>
        </div>
    )
}

export default PasswordDisplay;