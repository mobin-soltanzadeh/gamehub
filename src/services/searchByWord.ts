import { GameType } from "./games";

export default function searchByWord(dataArray: GameType[], searchItem: string) {  
  let newGames: GameType[] = dataArray.filter(game => game.title.toLowerCase().includes(searchItem.toLowerCase()))
  let arr2 = dataArray.filter(game => game.genre.toLowerCase().includes(searchItem.toLowerCase()))

  arr2.forEach(game => {
    if(!newGames.includes(game))
      newGames.push(game)
  })
    
  return newGames;
}