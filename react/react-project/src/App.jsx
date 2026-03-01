import "./App.css";
import Button from "./components/button/Button";
import Headler from "./components/headler/Headler";
import Menu from "./components/menu/Menu";
import Paragraph from "./components/paragraph/Paragraph";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="page">
      <div className="nav-menu">
      <Menu/>
    </div>
    <div className="search-conteiner">
      <Headler />
      <Paragraph />
      <Search />
    </div>
    </div>
  );
}

export default App;
