import "./App.css";
import { fish, gods } from "./mocData/data";
import { getDrinks } from "./object/objectFucntion/functionObject";
import TsMedium from "./ts/tsmedium";
import { boil } from "./utils/common/boil";
import { min } from "./utils/min";

const App = () => {
  console.log(boil(gods, (a, b) => (a.power < b.power ? a : b)));
  console.log(min(fish, (f) => f.weight));
  return (
    <>
      {/* <Tsbasic /> */}
      {/* <TsMedium /> */}
      <h1>con cho ty</h1>
    </>
  );
};

export default App;
