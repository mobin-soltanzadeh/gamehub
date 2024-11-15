import { useEffect, useState } from "react";
import { games } from "../services/games";

const useGenre = () => {
  const [genres, setGenre] = useState<string[]>([])
  
  useEffect(() => {    
    let newList: string[] = []
    games.forEach(game => newList.includes(game.genre) || newList.push(game.genre))
    setGenre(newList)
  }, [])

  return { genres }
}

export default useGenre;
