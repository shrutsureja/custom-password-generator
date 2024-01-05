import PasswordDisplay from "./components/PasswordDisplay"
import PasswordGenerator from "./components/PasswordGenerator"


function App() {

  return (
    <>
      <div className="bg-gray-200 h-screen w-screen flex justify-center items-center">
        <div className="bg-white rounded-md max-w-md w-full shadow-md p-8">
          <h1 className="text-center font-mono font-[600] text-xl mb-8">Custom Password Generator</h1>
          <PasswordDisplay/>
          <div className="mb-4"></div>
          <PasswordGenerator/>
        </div>
      </div>
    </>
  )
}

export default App
