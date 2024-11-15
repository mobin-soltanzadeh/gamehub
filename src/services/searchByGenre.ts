import { GameType } from "./games";

export default function searchByGenre(dataArray: GameType[], genre: string) {
  if (genre !== "") return dataArray.filter(data => data.genre.toLowerCase() === genre.toLowerCase());
  return dataArray;
}
