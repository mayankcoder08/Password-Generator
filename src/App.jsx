import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App

// import { useState, useCallback, useEffect, useRef } from "react"

// function App() {
  
//   const [length, setLength] = useState(8);
//   const [numAllowed, setNumAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   // useRef hook
//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback( ()=>{
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if(numAllowed) str+= "0123456789";
//     if(charAllowed) str+= "!@#$%^&*-+=[]{}~`";

//     for(let i=1;i<= length;i++){
//       let val = Math.floor(Math.random()*str.length + 1);
//       pass += str.charAt(val);
//     }

//     setPassword(pass);
     
//   }, [length,numAllowed,charAllowed, setPassword])
 
//   const copyPasswordToClipboard = useCallback( ()=>{
//     passwordRef.current?.select();
//     // passwordRef.current?.setSelectionRange(0,3);
//     window.navigator.clipboard.write(password);
//   }, [password])

//   useEffect( ()=>{
//     passwordGenerator()
//   }, [length,numAllowed,charAllowed, passwordGenerator])

//   return (
//     <>
//      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
//      <h1 className="text-4xl text-white text-center my-3">Password Generator</h1>
//       <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-blue-800">
//           <input className="outline-none w-full py-1 px-3" type="text" placeholder="Generate random password" value={password} readOnly ref={passwordRef}/>
//           <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>copy</button>
//       </div>
//       <div className="flex text-sm gap-x-2 my-5 mb-3">
//         <div className="flex items-center gap-x-1">
//           <input type="range" min={8} max={32} value={length} className="cursor-pointer"
//             onChange={(e)=>{setLength(e.target.value)}}
//           />
//           <label htmlFor="">Length: {length}</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input type="checkbox" defaultChecked = {numAllowed} onChange={ () => {setNumAllowed((prev)=> !prev)}}
//           />
//           <label htmlFor="">Numbers</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input type="checkbox" defaultChecked = {charAllowed} onChange={ () => {setCharAllowed((prev)=> !prev)}}
//           />
//           <label htmlFor="">Characters</label>
//         </div>
//       </div>
//       {/* <button onClick={passwordGenerator} className="w-full  mx-auto shadow-md rounded-lg my-8 bg-blue-300">Generate</button> */}
//      </div>
//     </>
//   )
// }

// export default App
