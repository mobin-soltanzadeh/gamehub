import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

import { games, GameType } from "../services/games";
import searchByGenre from "../services/searchByGenre";
import searchByWord from "../services/searchByWord";

function GameHub() {
  const [genre, setGenre] = useState("");
  const [searchedWord, setSearchedWord] = useState<string | any>("shooter")

  useEffect(() => {
    setSearchedWord("");
  }, [genre])
  
  let filteredGames: GameType[];
  searchedWord ? filteredGames = searchByWord(games, searchedWord) : filteredGames = searchByGenre(games, genre);
  
  return (
    <div className="App flex flex-col gap-y-5 xl:gap-y-10 p-4 xl:p-5 min-h-screen min-w-full text-zinc-800 dark:text-gray-100 bg-gray-100 dark:bg-black/90 transition-colors duration-1000">
      <Navbar onSearch={setSearchedWord} />

      <div className="flex justify-start items-start gap-x-2 lg:gap-x-4 xl::gap-x-8 gap-10">
        <Sidebar onChangeGenre={setGenre}/>
        <Main genre={genre} filteredGames={filteredGames} />
      </div>
    </div>
  );
}

export default GameHub;
