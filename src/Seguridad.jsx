import React, { useState } from "react";
import { BiSave, BiCustomize , BiKey} from "react-icons/bi";
export function Seguridad() {
  const [isOpen, setIsOpen] = useState(false);
  const [code , setCode] = useState(localStorage.getItem('code_user'))
  function generateAlphaNumericString() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    let charactersLength = characters.length;
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  return (
    <div >
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="btn acordion flex w-full justify-between items-center  text-xl text-center bg-slate-200 cursor-pointer  transition"
      >
        <span className="flex-grow ">Seguridad</span>
        <span className="px-4">
          <BiCustomize />
        </span>
      </span>

      {isOpen && (
        <span className="cuerpo-config text-center absolute w-full max-w-xs ease-in duration-1000 bg-black bg-opacity-50  py-2 px-2 rounded-sm">
          <form
            action=""
            className="flex flex-col gap-1 "
            onSubmit={(event) => {
              event.preventDefault();
              let { code_user, token } = event.target;
              if (code_user.value.trim())
                localStorage.setItem("code_user", code_user.value.trim());
              if (token.value.trim())
                localStorage.setItem("token", token.value.trim());
            }}
          >
            <label htmlFor="" className="label text-orange-400">
              Codigo de Usuario
            </label>
            <div className="flex gap-1 justify-center">
            <input type="text" name="code_user" value={code} className="input" onChange={(e)=>{
              setCode(e.target.value)
              console.log(e.target.value);
            }} />
            <button className="btn" onClick={(e)=>{e.preventDefault() 
              setCode(generateAlphaNumericString())
            }}><BiKey/></button>
            </div>
            <label htmlFor="" className="label">
              Token
            </label>
            <input type="password" name="token" className="input" />

            <button className="btn mt-2 flex items-center gap-1">
              Saves <BiSave />
            </button>
          </form>
        </span>
      )}
    </div>
  );
}
