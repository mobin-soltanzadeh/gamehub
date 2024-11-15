import { GameType } from "../services/games";
import { FaPlaystation } from "react-icons/fa";
import { IoLogoXbox } from "react-icons/io";
import { FaWindows } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { FaLinux } from "react-icons/fa";


export default function GameCard(props: GameType) {

  return (
    <div className="GameCard basis-[200px] xl:basis-[250px] grow overflow-hidden dark:text-gray-100 border border-black/40 shadow-md rounded-lg max-w-[700px]">
      {/* game image */}
      <a href={""} target="_blank"><img src={props.thumbnail} alt="game-image" className="w-full object-cover" /></a>

      <div className="flex flex-col justify-start items-start p-3">
        {/* game title */}
        <p className="text-xl xl:text-2xl font-semibold w-full line-clamp-1 mb-1">{props.title}</p>

        {/* game paltforms */}
        <div className="flex justify-between items-center w-full mb-4">
          <div className="platforms flex justify-center items-center gap-x-1">
            {(props.id % 2 === 0) && <FaWindows />}
            {(props.id % 2 !== 0 && props.id % 3 !== 0 && props.id % 5 !== 0 && props.id % 7 !== 0 && props.id % 11 !== 0 && props.id % 13 !== 0) && <FaWindows />}
            {(props.id % 3 === 0) && <FaPlaystation className="mb-0.5" />}
            {(props.id % 5 === 0) && <IoLogoXbox />}
            {(props.id % 7 === 0) && <BsApple className="mb-0.5" />}
            {(props.id % 11 === 0) && <DiAndroid />}
            {(props.id % 13 === 0) && <FaLinux />}
          </div>

          <div><span className={`border ${props.point > 60 ? props.point > 75 ? "bg-green-500/20 text-green-500" : "bg-yellow-500/20 text-yellow-500"  : "bg-rose-500/20 text-rose-500"} px-2 rounded-md`}>{props.point}</span></div>
        </div>

        {/* game description */}
        <p className="text-lg w-full line-clamp-3 m-0">{props.short_description}</p>

        {/* add to cart */}
      </div>
    </div>
  );
}
