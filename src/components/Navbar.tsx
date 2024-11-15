import Logo from "../assets/logo.webp";
import SwitchThemeBtn from "./SwitchThemeBtn";
import { FiSearch } from "react-icons/fi";

interface Props {
  onSearch: (word: string) => void;
}


function Navbar({ onSearch }: Props) {

  const pressHandler = (e: any) => {    
    e.key === "Enter" && onSearch(e.target.value)
  }

  return (
    <div className="Navbar flex justify-center items-center gap-x-4">
      {/* Logo */}
      <img src={Logo} alt="game hub logo" className="w-16 h-16" />

      {/* search box */}
      <div className="flex justify-start items-center gap-x-2 w-full px-2 py-2 bg-gray-300 dark:bg-zinc-700 rounded-2xl">
        <FiSearch className="dark:text-white" size={"30px"} />
        <input type="text" placeholder="Search games . . ." className="w-full placeholder:text-zinc-800 placeholder:font-semibold dark:placeholder:text-gray-100 outline-none bg-transparent" onKeyDown={pressHandler} />
      </div>

      {/* theme btn */}
      <SwitchThemeBtn />
    </div>
  );
}

export default Navbar;
