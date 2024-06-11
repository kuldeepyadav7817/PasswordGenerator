import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);
  const [number, setNumber] = useState(false);
  const [charactors, setCharactors] = useState(false);

  // copy to clipboard method
const copyToclipboard=useRef(null)

// const passwordSelected=window.navigator.clipboard.readText(password)
const copied=window.navigator.clipboard.writeText(password)
console.log(copied)

  

// password generator with usecallback
// here when we'll click on length,setPassword,number and charactors
// then call back will be re-render


  const PasswordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) {
      str += "0123456789";
    }
    if (charactors) {
      str += "^%&$#@"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)


  }, [length, setPassword, number, charactors])

  console.log(password)

  // useEffect will generate(call) passwordGenerator
  // when length,number,character and setPassword will mount

  useEffect(() => {
    PasswordGenerator()
  }

    , [length, number, charactors, setPassword])


  return (
    <>
      {/* full body control */}

      <div className=" bg-gray-900 text-center w-full h-screen grid justify-center">


        {/* cantainer */}


        <div className=" bg-slate-800  w-96 h-40 mt-32 text-center">



          {/* password heading */}

          <div className=" text-center font-bold text-orange-700"> Password Generator</div>



          {/* password field */}


          <div
            className="flex mx-14 my-5">
            <input
              type="password"
              id="Password"
              readOnly
              className=" outline-none text-orange-600 font-bold mx-0"

              placeholder={password}
              onChange={()=>passwordSelected}
              
            />


            {/* copy button field */}


            <button
           className=" outline-none bg-blue-700 rounded-md text-white font-medium hover:p-1"
          
              onClick={()=>copyToclipboard}
            >Copy</button>
            <br />
          </div>


          {/* length , number and character cantainer */}

          <div className=" p-4 flex gap-2 text-wrap text-center">

            {/* length and range  */}

            <input
              type="range"
              id="length"
              min={6}
              max={20}
              className=" size-1/12  text-orange-800 "
              onChange={(e) => setLength(e.target.value)}
            />
            <label
              htmlFor="length"
              className=" text-orange-800  font-bold  "
            >Length:{length}</label>





            {/* numbers  */}


            <input
              type="checkbox"
              id="number"
              onChange={() => setNumber((prev) => !prev)}
              className=" text-orange-800  font-bold  "
            />
            <label

              htmlFor="number"
              className=" text-orange-800 font-bold "
            >Numbers</label>




            {/* charactors  */}


            <input
              type="checkbox"
              id="charactors"
              onChange={() => setCharactors((prev) => !prev)}
              className=" text-orange-800 "
            />
            <label
              htmlFor="number"
              className=" text-orange-800  font-bold "
            >charactors</label>

          </div>




        </div>
      </div>
    </>
  )
}
export default App;