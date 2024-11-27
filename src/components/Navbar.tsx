import { useState } from "react";
import useGenre from "../hooks/useGenre";
import { games } from "../services/games";

import SwitchThemeBtn from "./SwitchThemeBtn";
import Logo from "../assets/logo.webp";

import { FiSearch } from "react-icons/fi";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


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
    <div className="Navbar flex justify-center items-center gap-x-1 sm400:gap-x-2 lg:gap-x-4 p-2">
      {/* Logo */}
      <img src={Logo} alt="game hub logo" className="w-12 h-12 sm:w-16 sm:h-16" />

      {/* search box */}
      <div className="flex justify-start items-center gap-x-1 lg:gap-x-3 w-full px-2 py-2 bg-gray-300 dark:bg-zinc-700 rounded-2xl">
        <div className="w-5 h-5 lg:w-7 lg:h-7"><FiSearch className="dark:text-white" size={"100%"} /></div>
        <input type="text" placeholder="Search games . . ." className="w-full text-[10px] sssm:text-xs lg:text-base placeholder:text-zinc-800 placeholder:font-semibold dark:placeholder:text-gray-100 outline-none bg-transparent" onKeyDown={pressHandler} />
      </div>

      {/* login btn */}
      <Link to={"/gamehub/login"} className="max-w-8 max-h-8 sm400:max-w-9 sm400:max-h-9 sm:max-w-11 sm:max-h-11 lg:max-w-12 lg:max-h-12 text-zinc-800 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-500"><IoLogInOutline size={"100%"} /></Link>

      {/* theme btn */}
      <div className="mt-2 hover:text-orange-500 dark:hover:text-orange-500"><SwitchThemeBtn /></div>
      
      {/* menu btn */}
      <div className={`relative sm:hidden min-w-8 min-h-8 sm400:min-w-9 sm400:min-h-9 hover:text-orange-500 dark:hover:text-orange-500 rotate-0 hover:rotate-[900deg] transition-transform duration-[2000ms]`} onClick={() => setDisplayMenu(true)} ><IoIosMenu className="absolute top-0 left-0"  size={"100%"} /></div>

 
      <div className={`backGroundBlurModal sm:hidden ${displayMenu ? "" : "hidden"} fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-[2px] z-40`}  onClick={() => setDisplayMenu(false)}></div>

      {/* mobile navbar */}
      <div className={`sm:hidden fixed top-0 left-0 -translate-x-full rounded-r-[45px] ${displayMenu ? "translate-x-0" : ""} flex flex-col justify-start items-start w-7/12 h-screen bg-gray-100 dark:bg-zinc-700 transition-transform duration-[1000ms] z-50`}>
      
        <ul className="flex flex-col gap-y-2 w-full px-8 pt-6">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold m-0">Genres</h1>
            <IoIosClose size={"50px"} className="-rotate-180 hover:rotate-180 p-1 transition-transform duration-1000" onClick={() => setDisplayMenu(false)} />
          </div>
        
          {genres.map((genre, index) => (
            <li key={genre} className={`flex justify-start items-center gap-x-2 lg:gap-x-3 hover:bg-gray-300 dark:hover:bg-zinc-700 rounded-md cursor-pointer`} onClick={() => clickHandler(genre)} >
              <img src={games[index].thumbnail} alt="genre-img" className="size-8 lg:size-10 object-cover rounded-md" />
              <span className="text-sm lg:text-lg xl:text-2xl">{genre}</span>
            </li>
          ))}

          <div className="flex justify-between items-center w-full mt-3">
            <p className="m-0">Theme</p>
            <SwitchThemeBtn/>
          </div>

          <div className="flex justify-between items-center w-full mt-3">
            <div className="flex flex-col m-0">
              <p className="m-0">Sign in</p>
              <p className="m-0">Sign up</p>
            </div>

            <Link to={"/gamehub/login"} className="sm:hidden max-w-8 max-h-8 sm400:max-w-9 sm400:max-h-9 text-zinc-800 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-500"><IoLogInOutline size={"100%"} /></Link>
            {/* <div className="sm:hidden max-w-8 max-h-8 sm400:max-w-9 sm400:max-h-9 hover:text-orange-500 dark:hover:text-orange-500"><IoLogInOutline size={"100%"} /></div>           */}
          </div>
          
        </ul>

      </div>
    </div>
  );
}

export default Navbar;
