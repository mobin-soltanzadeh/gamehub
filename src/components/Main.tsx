import { useEffect, useState } from "react";
import { GameType } from "../services/games";
import GameCard from "./GameCard";
import { FaArrowDownShortWide , FaArrowUpWideShort   } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import BottomPagination from "./BottomPagination";

interface Props {
  genre: string;
  filteredGames: GameType[];
};

function Main({ genre, filteredGames }: Props) {  
  const [sortedGames, setSortedGames] = useState<GameType[]>(filteredGames)  ;
  const [filter, setFilter] = useState<string>("Name ");
  const [platform, setPlatform] = useState<string>("");
  const [PlatformModal, setPlatformModal] = useState<boolean>(false);
  const [OrderModal, setOrderModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  document.title = genre + "Games";

  useEffect(() => {
    setSortedGames(filteredGames)
    setCurrentPage(1)
  }, [filteredGames])

  useEffect(() => {  
    setCurrentPage(1)
    let newGames = [...filteredGames];
    
    if(platform === "All" || platform === "") setSortedGames(newGames);
    else if(platform === "PC") setSortedGames(newGames.filter(game => (game.id % 2 === 0) || (game.id % 2 !== 0 && game.id % 3 !== 0 && game.id % 5 !== 0 && game.id % 7 !== 0 && game.id % 11 !== 0 && game.id % 13 !== 0)));
    else if(platform === "PlayStation") setSortedGames(newGames.filter(game => game.id % 3 === 0))
    else if(platform === "Xbox") setSortedGames(newGames.filter(game => game.id % 5 === 0))
    else if(platform === "iOS") setSortedGames(newGames.filter(game => game.id % 7 === 0))
    else if(platform === "Android") setSortedGames(newGames.filter(game => game.id % 11 === 0))
    else if(platform === "Linux") setSortedGames(newGames.filter(game => game.id % 13 === 0))

    setFilter("Name ")
    newGames = [...sortedGames]
    if (filter === "Name!") newGames.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1);
    else if (filter === "Name ") newGames.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase() ? -1 : 1);
    else if (filter === "Release date!") newGames.sort((a, b) => a.release_date.toUpperCase() < b.release_date.toUpperCase() ? -1 : 1);
    else if (filter === "Release date ") newGames.sort((a, b) => a.release_date.toUpperCase() > b.release_date.toUpperCase() ? -1 : 1);
    else if (filter === "Average rating!") newGames.sort((a, b) => a.point < b.point ? -1 : 0);
    else if (filter === "Average rating ") newGames.sort((a, b) => a.point > b.point ? -1 : 0);

  }, [platform])

  useEffect(() => {    
    let newGames = [...sortedGames]
    if (filter === "Name!") newGames.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0);
    else if (filter === "Name ") newGames.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase() ? -1 : 0);
    else if (filter === "Release date!") newGames.sort((a, b) => a.release_date.toUpperCase() < b.release_date.toUpperCase() ? -1 : 0);
    else if (filter === "Release date ") newGames.sort((a, b) => a.release_date.toUpperCase() > b.release_date.toUpperCase() ? -1 : 0);
    else if (filter === "Average rating!") newGames.sort((a, b) => a.point < b.point ? -1 : 0);
    else if (filter === "Average rating ") newGames.sort((a, b) => a.point > b.point ? -1 : 0);
    
    setSortedGames(newGames)
    
  }, [filter])
  

  return (
    <div className="Main flex flex-col grow justify-center items-start gap-y-3 lg:gap-y-5 xl:gap-y-8 w-full">
      <p className="mainHeader text-2xl lg:text-3xl xl:text-5xl font-bold">{platform} {genre} Games</p>
      
      <div className="flex flex-col lg:flex-row gap-x-3 gap-y-2">
  
        <div className="relative rounded-lg" onFocus={() => setPlatformModal(true)} onBlur={() => setTimeout(() => setPlatformModal(false), 200)}>
          <button className="flex justify-center items-center gap-x-0 lg:gap-x-8 px-2 bg-gray-300 dark:bg-zinc-700 rounded-md focus:ring-4 ring-blue-400/20">
            <span className="text-start text-sm lg:text-lg font-semibold w-28 lg:w-40 px-1 lg:px-2 py-1 lg:py-2">{platform === "" ? "Platform" : platform}</span>
            <div className="w-4 lg:w-6"><IoIosArrowDown size={"100%"} className="mt-1" /></div>
          </button>

          <ul style={{display: PlatformModal ? "flex" : "none"}} className="absolute top-full translate-y-2 left-0 flex flex-col justify-center items-start w-full p-0 text-gray-100 bg-black/90 border-y-8 border-black/90 rounded-md z-50">
            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setPlatform("All")}>All platforms</li>
            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setPlatform("PC")}>PC</li>
            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setPlatform("PlayStation")}>PlayStation</li>
            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setPlatform("Xbox")}>Xbox</li>
            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setPlatform("iOS")}>iOS</li>
            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setPlatform("Android")}>Android</li>
            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setPlatform("Linux")}>Linux</li>
          </ul>
        </div>

        <div className="relative" onFocus={() => setOrderModal(true)} onBlur={() => setTimeout(() => setOrderModal(false), 200)}>
          <button className="flex justify-center items-center gap-x-0 lg:gap-x-8 px-2 bg-gray-300 dark:bg-zinc-700 rounded-md focus:ring-4 ring-blue-400/20">
            <span className="text-start text-sm lg:text-lg font-semibold w-48 lg:w-72 px-1 lg:px-2 py-1 lg:py-2">Order by: {filter.slice(0, -1)}</span>
            <div className="w-4 lg:w-6"><IoIosArrowDown size={"100%"} className="mt-1" /></div>
          </button>

          <ul style={{display: OrderModal ? "flex" : "none"}} className="absolute top-full translate-y-2 left-0 flex flex-col justify-center items-start w-full p-0 text-gray-100 bg-black/90 border-y-8 border-black/90 rounded-md z-50">
            
            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setFilter("Name!")}>
              <span>Name</span> 
              <FaArrowDownShortWide />
            </li>
            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setFilter("Name ")}>
              <span>Name</span> 
              <FaArrowUpWideShort />
            </li>

            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setFilter("Release date!")}>
              <span>Release date</span>
              <FaArrowDownShortWide />
            </li>
            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setFilter("Release date ")}>
              <span>Release date</span>
              <FaArrowUpWideShort />
            </li>

            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setFilter("Average rating!")}>
              <span>Average rating</span>
              <FaArrowDownShortWide />
            </li>
            <li className="flex justify-start items-center gap-x-2 py-1 text-start w-full px-2 hover:bg-zinc-700" onClick={() => setFilter("Average rating ")}>
              <span>Average rating</span>
              <FaArrowUpWideShort />
            </li>

          </ul>
        </div>

      </div>


      <ul className="flex flex-wrap justify-start items-stretch gap-8 p-0">
        {sortedGames.slice((currentPage*10)-10, currentPage*10).map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </ul>

        <BottomPagination arrLength={sortedGames.length} currentPage={currentPage} onChangePage={setCurrentPage} />
    </div>
  );
}

export default Main;