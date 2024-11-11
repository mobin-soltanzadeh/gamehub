
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return <div className="App flex flex-col">
    <Navbar />
    <div className="flex ">
      <Sidebar />
      <Main/>
    </div>
  </div>;
}

export default App;
