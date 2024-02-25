import React from "react";

export default function InputBox(
  {
    label , amount , onAmountChange , options=[] , currencyOption , onselectOption , mainFunction
  }
) {
  return (
    <div className="text-black sm:text-[20px] text-[13px] w-full bg-white h-[10rem] rounded-xl ">
      <div className="flex justify-between items-center sm:w-[42rem] w-[15rem] mr-11 h-[5rem] mx-[2rem] text-gray-400">
        <div>{label}</div>
        <div>Currency Type</div>
      </div>

      <div className="flex justify-between items-center sm:w-[42rem] w-[10rem] mr-11 h-[5rem] mx-[2rem] text-black">
      <form onSubmit={(e)=>e.preventDefault()
         }>
        <input  value={amount} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} className=" rounded-md outline-none w-[9rem] text-[15px] sm:text-[20px]  sm:border-none sm:w-[25rem]" type="number" />
      </form>
      <div> 
        <select value={currencyOption} onChange={(e)=> onselectOption(e.target.value)} className="outline-none border-none" name="" id="">

      {
        options.map((currency)=> (<option key={currency} value={currency}> {currency} </option>))
      }
      
        </select>
      </div>
      </div>
    </div>
  );
}
