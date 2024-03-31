import React, { useId } from "react";

export default function InputBox(
  {
    label , amount , onAmountChange , options=[] , currencyOption , onselectOption ,isDisabled
  }
) {

  const newId = useId()
  console.log(newId);
  return (
    <div className="text-black sm:text-[20px] text-[13px] w-full bg-white h-[10rem] rounded-xl ">
      <div className="flex justify-between items-center sm:w-[42rem] w-[15rem] mr-11 h-[5rem] mx-[2rem] text-gray-400">
        <div key={newId}>{label}</div>
        <div>Currency Type</div>
      </div>

      <div className="flex justify-between items-center sm:w-[42rem] w-[10rem] mr-11 h-[5rem] mx-[2rem] text-black">
      <form onSubmit={(e)=> e.preventDefault()} >
        <input id={newId} disabled={isDisabled} value={amount} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} className="pl-5 sm:rounded-[20px] rounded-[10px] relative right-5 outline-none w-[9rem] text-[15px] sm:text-[20px] border-b-[2px] border-black sm:w-[25rem]" type="number" required/>
      </form>
      <div> 
        <select value={currencyOption} onChange={(e)=> onselectOption(e.target.value)} className="outline-none border-none" name="" id="">

      {
        options.map((currency)=> 
        (<option key={currency} value={currency}> {currency.toUpperCase()} </option>))
      }
      
        </select>
      </div>
      </div>
    </div>
  );
}
