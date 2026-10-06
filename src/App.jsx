//1. imports
import "./App.css";
import List from "./components/List";
import { people } from "./data/people";

function App() {
  //2. JS

  //3.html
  return (
    <>
      <List people={people} />
    </>
  );
}

export default App;
