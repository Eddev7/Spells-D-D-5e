import { useEffect, useState } from "react";
import { getAllSpells } from "./api";
import { FaSearch } from "react-icons/fa";
import SpellCard from "./SpellCard";

export default function App() {

  const [pesquisa, setPesquisa] = useState("");
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const savedSpells = localStorage.getItem("spells");
    if (savedSpells) setSpells(JSON.parse(savedSpells));
    getAllSpells().then((spells) => {
      setSpells(spells);
      localStorage.setItem("spells", JSON.stringify(spells));
    });
  }, []);

  return (
    <div className="bg-gray-900 w-screen min-h-screen text-white">
      <header className=" flex w-full h-48 justify-center items-center">
        <h1 className=" font-bold text-4xl">Spells From D&D 5º</h1>
      </header>
      <form onSubmit={(e) => handleSearch(e)} className=" w-full h-80 flex flex-col justify-center items-center border-b-4 border-t-4">
        <label className=" font-bold mb-2 text-xl">SEARCH</label>
        <div className="flex">
          <input onChange={(e) => setPesquisa(e.target.value)} className=" p-3 rounded-lg w-80 text-black" name="" placeholder="Search spell"></input>
        </div>
      </form>

      <div className="flex justify-center mt-10">
        <ul className="grid lg:grid-cols-4 gap-10 grid-cols-1">
          {spells.map((spell) => {
            if(pesquisa == '') {
              return (
                <SpellCard key={spell.index} spell={spell} />
              )
            } else {
              let valorDigitado = pesquisa.toLowerCase();
              if(spell.name.toLowerCase().includes(valorDigitado)){
                return (
                  <SpellCard key={spell.index} spell={spell} />
                )  
              }
            }
          })}
        </ul>
      </div>
    </div>
  );
}