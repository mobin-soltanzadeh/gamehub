import useGenre from "../hooks/useGenre";
import { games } from "../services/games";

interface Props {
  mainGenre: string;
  onChangeGenre: (genre: string) => void;
}

function Sidebar({ mainGenre, onChangeGenre }: Props ) {
  const { genres } = useGenre();

  return (
    <div className="Sidebar hidden sm720:block dark:text-gray-100 pt-2">
      <ul className="flex flex-col gap-y-4 pl-2 w-40 lg:w-64 pr-4">
        <h1 className="text-lg lg:text-2xl xl:text-4xl font-bold">Genres</h1>
        {genres.map((genre, index) => (
          <li key={genre} className={`flex items-center gap-x-2 lg:gap-x-3 ${mainGenre === genre ? "font-bold" : ""} hover:bg-gray-300 dark:hover:bg-zinc-700 rounded-md cursor-pointer`} onClick={() => onChangeGenre(genre)} >
            <img src={games[index].thumbnail} alt="genre-img" className="size-8 lg:size-10 object-cover rounded-md" />
            <span className={`text-sm lg:text-lg xl:text-2xl ${mainGenre === genre ? "pl-1" : ""}`}>{genre}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
