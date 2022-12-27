export const apiGet = async () => {
    try {
        let get = await fetch('https://fembeia.online/api-de-citas/?token='+localStorage.getItem('token'))
        let resp = await get.json()
        return resp      
    } catch (error) {
        return error
    }
    
};
