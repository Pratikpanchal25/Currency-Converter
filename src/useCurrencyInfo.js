import React, { useEffect, useState } from 'react'

 function useCurrencyInfo(currency) {
    const [data , setData] = useState({})

    //https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

    useEffect(()=>{
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=> response.json())
        .then((response)=> setData(response[currency]))
        console.log(data);
    } , [currency])

  return data;
}

export default useCurrencyInfo;