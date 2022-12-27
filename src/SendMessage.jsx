
import { useState } from "react"
import { Campos } from "./Form"
import { SendMessages } from "./services/send-message"


export const SendMessage = ( {alertas} ) => {

const [nform, setnform] = useState([])
const [msg , setMsg] = useState('hola {{name}} , te recordamos el turno con fecha : {{date}} , cual corresponde al servicio de {{service}}')
const addForm = () => setnform([...nform , nform.length])
const resForm = () => setnform([])

const enviar  = async (e) => {
    
    e.preventDefault()
           const data = [] 
            const hijos = e.target.children 
            for (const iterator of hijos) {
                
                if(iterator.tagName == 'DIV' && iterator.querySelector('input[name=select]').checked)
                {  
                     let $ = (name) => iterator.querySelector(`input[name=${name}]`).value
                     if($('phone').trim())
                    data.push({phone: $('phone').replace(/\s|\+/g, '') , name : $('name') , service : $('service') , date : $('date').replace('T',' ') })
                }
            }

         if(data.length > 0)
         {
            let result = await SendMessages(data,msg)
            if(result.off)
            {
                alertas(result.msg,'error')
                return; 
            }
            alertas(<> 
                {result.length} - se proceso con exito.
                <ul>
                    {result.map(res => <li>{res}</li>)}
                </ul>
            </>,'success')
         }else alertas('Selecionar los destinatarios, o numeros no pueden estar vacios...','info')

}



return <>
<div className="flex ">
    <div className="flex-grow py-2 text-center space-x-4">
        <button onClick={addForm} className="btn">Agregar</button>
        <button onClick={resForm} className="btn">Resetear</button>
    </div>

</div>
<div className="mx-auto max-w-6xl ">
    {nform.length > 0 && (
          <>
          <form action="#" onSubmit={e => enviar(e) }>
            <span className="flex gap-2 py-2">
        <textarea className="input" name="msg" id=""  value={msg} onChange={event => setMsg(event.target.value)}></textarea>
        <button className="btn">Enviar</button>

            </span>
        {nform.map( res => < Campos key={res} />)}

          </form>
            </>
        )}

        </div>
</>

}