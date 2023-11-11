import { useEffect, useState } from "react";

const useApi = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const fecthApi = () =>{
        fetch(url) 
        .then(res => res.json())
        .then (responseJson => {
            setLoading(true);
            setData(responseJson.data)
            // console.log(responseJson);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
      fecthApi();
    },[url])
    
    
    return  { loading, data }



}
 
export default useApi;