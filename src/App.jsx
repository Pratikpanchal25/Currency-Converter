import React, { useState } from "react";
import "./App.css";
import InputBox from "./InputBox";
import useCurrencyInfo from "./useCurrencyInfo";
export default function App() {
  const [amount, setAmount] = useState();
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState();
 

  let dataFrom = useCurrencyInfo(from);

  const currencyOptions = Object.keys(dataFrom);

  console.log(from);

  function convert() {
    setConvertedAmount(dataFrom[to] * amount);
    console.log(from);
    console.log(to);
  }

  function swap() {
    setTo(from);
    setFrom(to);
    
  }

  return (
    <div className="  main-container h-screen text-white text-4xl  text-center flex justify-center items-center">
      <div className=" m-8 bg-[white]/40 backdrop-blur-[5px] border-[1px] p-2 px-4 py-5 pb-6 border-white w-[50rem] h-auto rounded-xl  flex-col justify-between items-center shadow-sm shadow-black">
        <div className="mt-2">
          <InputBox
            label="From"
            onAmountChange={(amount) => setAmount(amount)}
            onselectOption={(option) => setFrom(option)}
            options={currencyOptions}
            currencyOption={from}
          />
        </div>

        <button
          onClick={swap}
          className=" bottom-4 z-10 border-[1px] border-white m-1 relative  text-[2rem] w-[8rem] h-[3rem] bg-sky-600 text-white rounded-lg"
        >
          Swap
        </button>

        <div className="relative bottom-8">
          <InputBox
            label="To"
            amount={convertedAmount}
            onselectOption={(option) => setTo(option)}
            options={currencyOptions}
            currencyOption={to}
          />
        </div>

        <div>
          <button
            onClick={convert}
            className=" bg-sky-600  w-[40rem] h-[4rem] text-white rounded-2xl text-[2rem] border-[1px] border-white  shadow-black"
          >
           Convert from {from} to {to}
          </button>
        </div>
      </div>
    </div>
  );
}
