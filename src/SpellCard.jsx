import { useState } from "react";

export default function SpellCard({ spell }) {

    const [desc, setDesc] = useState(false);

    return (
      <li className="bg-neutral-800 w-96 p-14 rounded-xl shadow-xl">
        <hgroup className="flex flex-col items-center mb-4">
          <h4 className="font-bold text-xl">{spell.name}</h4>
          <small>
            {spell.level > 0 && `Level ${spell.level} `}
            {spell.school.name}
            {spell.level === 0 && " cantrip"}
          </small>
        </hgroup>
        <div className="grid grid-cols-2 gap-8">
          <p className="flex flex-col items-center">
            <strong>Casting Time</strong>
            {spell.casting_time}
          </p>
          <p className="flex flex-col items-center">
            <strong>Range</strong>
            {spell.range}
          </p>
          <p className="flex flex-col items-center">
            <strong>Components</strong>
            {spell.components.join(", ")}
          </p>
          <p className="flex flex-col items-center">
            <strong>Duration</strong>
            {spell.duration}
          </p>
        </div>
        <div className="flex flex-col mt-4">
            <button onClick={() => {setDesc(!desc)}} className="bg-cyan-700 rounded-lg p-2">Description</button>
            <p className={`max-h-80 overflow-scroll mt-4 text-center ${desc ? 'opacity-100 h-80' : 'opacity-0 h-0'} transition-opacity transition-all duration-700 `}>
                {spell.desc}
            </p>
        </div>
      </li>
    );
  }