import copyImg from "../assets/copy.png"
import copy from 'copy-to-clipboard'

const PasswordDisplay = ({password}) => {
    const handleclick = () => {
        if(password){
            copy(password)
            let sb = document.getElementById("snackbar");
            sb.className = sb.className.replace("hidden", "visible");
            setTimeout(() => {
                sb.className = sb.className.replace("visible", "hidden");
            }, 2000);
        }
        else alert("No password generated")
    }
    return(
        <div>
            <label className="text-sm font-medium text-gray-600">Generated Password:</label>
            <div className="border-2 border-gray-300 rounded-md flex justify-between">
                <input id="password" value={password || "Your password will be here"} disabled className={`m-3 bg-white ${!password? "text-gray-400":""}`}/>
                <button className="p-2 border-l-2 border-gray-300" onClick={handleclick}>
                    <img className="w-6"  src={copyImg} alt="copy image"/>
                </button>
                <span id="snackbar" className="hidden p-4 bg-blue-500 text-white font-medium rounded-md fixed right-5 bottom-5 z-[1]">Successfully Copied.</span>
            </div>
        </div>
    )
}

export default PasswordDisplay;