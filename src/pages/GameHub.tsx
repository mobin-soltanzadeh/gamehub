import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

import { games, GameType } from "../services/games";
import searchByGenre from "../services/searchByGenre";
import searchByWord from "../services/searchByWord";

function GameHub() {
  const [genre, setGenre] = useState("");
  const [searchedWord, setSearchedWord] = useState<string | any>("")

  useEffect(() => {
    setSearchedWord("");
  }, [genre])
  
  let filteredGames: GameType[];
  searchedWord ? filteredGames = searchByWord(games, searchedWord) : filteredGames = searchByGenre(games, genre);
  
  return (
    <div className="App flex flex-col gap-y-0 xl:gap-y-10 min-h-screen min-w-full lg:p-2 text-zinc-800 dark:text-gray-100 bg-gray-100 dark:bg-black/90 transition-colors duration-1000">
      <Navbar onSearch={setSearchedWord} onChangeGenre={setGenre} />

      <div className="flex justify-start items-start gap-x-1 lg:gap-x-3 xl:gap-x-4 gap-10 p-2 xl:p-3">
        <Sidebar mainGenre={genre} onChangeGenre={setGenre}/>
        <Main genre={genre} filteredGames={filteredGames} />
      </div>
    </div>
  );
}

export default GameHub;
