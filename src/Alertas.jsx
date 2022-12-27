import { useState } from 'react';
import './Alertas.css'

export function Alertas({msg , status}) {
    
const [alerta, setAlerta] = useState(true)

return  (<>
    {alerta && (
        <>  <div  className={`flex p-4 mb-2 ${status}`}  role="alert">
        
          <div className="font-bold flex-grow text-center">
           {msg}
          </div>
            <button onClick={()=>setAlerta(false)} type="button" className=" text-center ml-auto -mx-1.5 -my-1.5  text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 font-extrabold h-8 w-8  dark:text-blue-600 dark:hover:bg-blue-300" data-dismiss-target="#alert-1" aria-label="Close">X</button>
        </div>
        
        </>
        )}
</>
)
}