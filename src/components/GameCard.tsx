import { GameType } from "../services/games";
import { FaPlaystation } from "react-icons/fa";
import { IoLogoXbox } from "react-icons/io";
import { FaWindows } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { FaLinux } from "react-icons/fa";
import { useState } from "react";

export default function GameCard(props: GameType) {
  const [isLoading, setLoading] = useState<boolean>(true)
  return (
    <div className="GameCard basis-[200px] xl:basis-[250px] grow overflow-hidden border border-black/40 shadow-md rounded-lg max-w-[700px]">
      {/* game image */}
      <a href="" target="_blank">
        <img src={props.thumbnail} alt="game-image" className={`w-full ${isLoading ? "hidden" : ""} object-cover`} onLoad={() => setLoading(false)} />

        {isLoading &&
          <div className="animate-[pulse_1s_ease-in-out_infinite] flex justify-center items-center w-ful h-44 bg-gray-300">
            <svg className="animate-wiggle w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
            </svg>
          </div>
        }
      </a>

      <div className="flex flex-col justify-start items-start gap-y-1 p-3">
        {/* game paltforms && score */}
        <div className="flex justify-between items-center w-full">
          <div className="platforms flex justify-center items-center gap-x-1 mb-1">
            {(props.id % 2 === 0) && <div className="w-5 h-5 sm:w-6 sm:h-6"><FaWindows size={"100%"} /></div>}
            {(props.id % 2 !== 0 && props.id % 3 !== 0 && props.id % 5 !== 0 && props.id % 7 !== 0 && props.id % 11 !== 0 && props.id % 13 !== 0) && <div className="w-5 h-5 sm:w-6 sm:h-6"><FaWindows size={"100%"} /></div>}
            {(props.id % 3 === 0) && <div className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5"><FaPlaystation size={"100%"} /></div>}
            {(props.id % 5 === 0) && <div className="w-5 h-5 sm:w-6 sm:h-6"><IoLogoXbox size={"100%"} /></div>}
            {(props.id % 7 === 0) && <div className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5"><BsApple size={"100%"} /></div>}
            {(props.id % 11 === 0) && <div className="w-5 h-5 sm:w-6 sm:h-6"><DiAndroid size={"100%"} /></div>}
            {(props.id % 13 === 0) && <div className="w-5 h-5 sm:w-6 sm:h-6"><FaLinux size={"100%"} /></div>}
          </div>

          <div><span className={`border ${props.point > 60 ? props.point > 75 ? "bg-green-500/20 text-green-500" : "bg-yellow-500/20 text-yellow-500"  : "bg-rose-500/20 text-rose-500"} px-2 rounded-md`}>{props.point}</span></div>
        </div>

        {/* game title */}
        <p className="text-xl xl:text-2xl font-semibold w-full line-clamp-1 m-0">{props.title}</p>

        {/* game description */}
        <p className="text-lg w-full line-clamp-3 m-0">{props.short_description}</p>

        {/* add to cart */}
      </div>
    </div>
  );
}
