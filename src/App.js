import "./App.css";
import NavBar from "./components/NavBar";
import Input from "./components/Input";
import NoTasks from "./components/NoTasks";

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Input />
    </div>
  );
};

export default App;