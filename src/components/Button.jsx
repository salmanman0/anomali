import React from 'react'
function Button({label, style="", onClick}){
  
  return(
    <>
      <button className={`h-10 py-2 px-6 rounded-lg text-md cursor-pointer ${style}`} onClick={onClick} type="button">{label}</button>
    </>
  );
}

export default Button