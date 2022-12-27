export const Campos = () => {

    return (
  <div className=" bg-orange-400 bg-opacity-90 py-1   text-center text-xs font-semibold flex gap-3 justify-center flex-wrap border-t-4  rounded-md items-center border-cyan-600 contacto">
    <input className="rounded-md py-2 px-4 outline-none " type="checkbox" name="select"  value="true" />
    <input className="text-base rounded-md py-2 px-4 outline-none focus:ring-2 w-36" autoComplete="off" type="text" name="phone" placeholder="5403764" />
    <input className="text-base rounded-md py-2 px-4 outline-none focus:ring-2 w-36" type="text" name="name" placeholder="Nombres" />
    <input className="text-base rounded-md py-2 px-4 outline-none focus:ring-2 w-36" type="text" name="service" placeholder="Servicios" />
    <input className="text-base rounded-md py-2 px-4 outline-none focus:ring-2 w-40" type="datetime-local" name="date"  />
  </div>)
}