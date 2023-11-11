import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import DisplayGifs from "./Components/DisplayGifs";

function App() {
  const [category, setCategory] = useState('')



  return (
    <>
      <div className="App">
        <h1>Gifs Search</h1>
        <AddCategory setCategory={setCategory} />
        <DisplayGifs category ={category} />
      </div>
    </>
  );
}

export default App;
