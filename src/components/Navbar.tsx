import { useState } from "react";
import useGenre from "../hooks/useGenre";
import { games } from "../services/games";

import SwitchThemeBtn from "./SwitchThemeBtn";
import Logo from "../assets/logo.webp";

import { FiSearch } from "react-icons/fi";
import { IoIosMenu, IoIosClose } from "react-icons/io";


interface Props {
  onSearch: (word: string) => void;
  onChangeGenre: (genre: string) => void;
}

function Navbar({ onSearch, onChangeGenre }: Props) {
  const { genres } = useGenre();
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  const pressHandler = (e: any) => {    
    e.key === "Enter" && onSearch(e.target.value)
  }

  const clickHandler = (genre: string) => {
    onChangeGenre(genre);
    setDisplayMenu(false)
  }

  return (
    <div className="Navbar flex justify-center items-center gap-x-4">
      {/* Logo */}
      <img src={Logo} alt="game hub logo" className="w-16 h-16" />

      {/* search box */}
      <div className="flex justify-start items-center gap-x-2 w-full px-2 py-2 bg-gray-300 dark:bg-zinc-700 rounded-2xl">
        <FiSearch className="dark:text-white" size={"30px"} />
        <input type="text" placeholder="Search games . . ." className="w-full text-[10px] sssm:text-xs lg:text-base placeholder:text-zinc-800 placeholder:font-semibold dark:placeholder:text-gray-100 outline-none bg-transparent" onKeyDown={pressHandler} />
      </div>

      {/* theme btn */}
      <div className="hidden sm:inline-block mt-2"><SwitchThemeBtn /></div>
      
      <div className={`sm:hidden -rotate-180 hover:rotate-180 transition-transform duration-1000`} onClick={() => setDisplayMenu(true)} ><IoIosMenu  size={"40px"} /></div>
      
      <div className={`backGroundBlurModal sm:hidden ${displayMenu ? "" : "hidden"} fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-[2px] z-40`}  onClick={() => setDisplayMenu(false)}></div>

      <div className={`sm:hidden fixed top-0 left-0 -translate-x-full rounded-r-[45px] ${displayMenu ? "translate-x-0" : ""} flex flex-col justify-start items-start w-7/12 h-screen bg-gray-100 dark:bg-zinc-700 transition-transform duration-[1500ms] z-50`}>
      
        <ul className="flex flex-col gap-y-2 w-full px-8 pt-6">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold m-0">Genres</h1>
            <IoIosClose size={"50px"} className="rotate-0 hover:rotate-[360deg] p-1 transition-transform duration-1000" onClick={() => setDisplayMenu(false)} />
          </div>
        
          {genres.map((genre, index) => (
            <li key={genre} className={`flex justify-start items-center gap-x-2 lg:gap-x-3 hover:bg-gray-300 dark:hover:bg-zinc-700 rounded-md cursor-pointer`} onClick={() => clickHandler(genre)} >
              <img src={games[index].thumbnail} alt="genre-img" className="size-8 lg:size-10 object-cover rounded-md" />
              <span className="text-sm lg:text-lg xl:text-2xl">{genre}</span>
            </li>
          ))}

          <div className="flex justify-between items-center w-full mt-10">
            <h1>Theme</h1>
            <SwitchThemeBtn/>
          </div>
        </ul>

      </div>
    </div>
  );
}

export default Navbar;
