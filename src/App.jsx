//1. imports
import "./App.css";
import Card from "./components/Card";
import List from "./components/List";
import { people } from "./data/people";

function App() {
  //2. JS

  //3.html
  return (
    <>
      <Card />
      <List people={people} />
    </>
  );
}

export default App;
