export const SendMessages = async (data , msg) => {
    let url = `http://${location.host.replace(location.port,3000)}/api`
    console.log(url);
    let token = localStorage.getItem('token'),user= localStorage.getItem('code_user')
try {
    
    
    let consulta = await fetch(url,{
        method: "POST",
        body: JSON.stringify({action : 'sendmessages' , token : token , id : user , clientes : data , msg : msg}),
        headers: {"Accept": "*/*",
        "Content-Type": "application/json"}
      })
      let res = await consulta.json()

      return res;

} catch (error) {
    
    return {off: true , msg : `No se pudo establecer la conexion : ${error}`};
}

}