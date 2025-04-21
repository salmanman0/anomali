import React from "react";
function Input({placeholder, ref, style}){
  return(
    <input type="text" ref={ref} placeholder={placeholder} className={`p-2 bg-white rounded-md placeholder-gray-400 ${style}`} />
  );
}

export default Input;