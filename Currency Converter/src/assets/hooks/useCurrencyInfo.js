import { useEffect,useState } from "react";

//Making a custom hook
const useCurrencyInfo=(currency)=>{

    //Please input your api key here
    const apiKey="Your Api Key here"

    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`).then((res)=>res.json()).then((res)=>setData(res["conversion_rates"]));
        console.log(data)
    },[currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;