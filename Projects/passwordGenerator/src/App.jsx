import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8); //for len of pass
  const [nosAllowed, setNosAllowed] = useState(false); //if nos are allowed or not
  const [charAllowed, setCharAllowed] = useState(false); // if char are allowed or not
  const [password, setpassword] = useState("");

  //use ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    //(fn,[dependencies]
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (nosAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+={}[]|:;'<>,.?/";

    //for loop for random generation

    for (let i = 1; i <= length; i++) {
      let Char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(Char);
      setpassword(pass);
    }
  }, [length, nosAllowed, charAllowed]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, nosAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={nosAllowed}
              id="numberInput"
              onChange={() => {
                setNosAllowed((prev) => !prev);
              }}
            />

            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Special Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
