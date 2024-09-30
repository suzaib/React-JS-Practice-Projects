import { useEffect,useState } from "react";

const useCurrencyInfo=(currency)=>{

    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/9835a8c069d63d062cc0de11/latest/${currency}`).then((res)=>res.json()).then((res)=>setData(res["conversion_rates"]));
        console.log(data)
    },[currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;