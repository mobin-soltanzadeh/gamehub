import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import { games } from "./services/games";

interface Game {
  id: number;
  title: string;
}

function App() {
  let allGames: Game[] = games.filter(game => game.id < 100)
  console.log(allGames.length);
  
  
  return (
    <div className="App flex flex-col">
      <Navbar />
      {/* <div className="flex ">
        <Sidebar />
        <Main />
      </div>  */}
    </div>
  );
}

export default App;
