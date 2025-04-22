import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hapusSemua, tambahNama } from "../slice/dataSlice";
function Home(){
  Title("Home - Anomali")
  const inputRef = useRef();
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.data.list);
  const jenisList = [
    "Tung Tung Tung Sahur",
    "Bombardilo Crocodilo",
    "Lil Lil Lil Bahlil",
    "Tralalelo Tralala",
    "Tripa Tropi",
    "Ga Ram Ram Ram Dan Madu Dung Dung",
    "Aniesini Gusini",
    "Fufubaba Fufufini",
    "Megatoto Walala Tibebe",
    "Corbuziero Dagusquero",
    "Prabowono Subiantono",
    "Nataligai Triliuna",
    "Mul Mul Mul Yoyo Solo Lolo"
  ];
  
  function hashStringToIndex(str, max) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % max;
  }
  const handleClick = () => {
    const text = inputRef.current.value.trim();
    if (text !== "") {
      dispatch(hapusSemua());
      const index = hashStringToIndex(text, jenisList.length);
      const jenis = jenisList[index];
      dispatch(tambahNama({ id: index + 1, nama: text, jenis: jenis }));
      inputRef.current.value = "";
    }
    inputRef.current.focus();
  };
  
  return(
    <>
      <div className="h-screen w-screen grid grid-rows-2">
        <div className="w-full h-full flex flex-col justify-center items-center bg-indigo-400">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-zinc-100 font-medium">ANOMALI</h1>
          <p className="text-xs sm:text-sm md:text-md lg:text-lg font-medium mt-3 text-white tracking-[.2em]">ANOMALI SEPERTI APAKAH ANDA</p>
          <a className="text-xs m-2 text-white py-2 px-4 bg-indigo-700 rounded-md absolute top-0 left-0" href="https://www.instagram.com/salmanananda.ms/">by @salmanananda.ms</a>
          
          <div className="flex flex-row items-center mt-4 ">
            <Input placeholder={"nama anda"} style={"h-10 justify-self-start border border-gray-300"} ref={inputRef}/>
            <Button label={"Submit"} style="bg-blue-600 ml-4 text-white" onClick={handleClick}/>
          </div>
        </div>
        <div className="w-full max-h-screen flex justify-center items-center p-8">
          {data.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 mb-4 flex flex-col items-center lg:w-1/3 md:w-2/3 text-center">
              <p className="text-xl font-semibold text-gray-700">
                Selamat <span className="text-indigo-500">{item.nama}</span>!
              </p>
              <p className="text-lg text-gray-600">
                Anda adalah anomali <br /> <span className="font-bold text-indigo-600">{item.jenis}</span>
              </p>
              <img src={`/assets/${item.id}.png`} alt={item.jenis} loading="lazy" decoding="async" className="w-64 h-64 object-contain rounded-md border border-gray-300"/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;