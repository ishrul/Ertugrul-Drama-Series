import "./App.css";
import Header from "./Components/Header/Header";
import Drama from "./Components/Drama/Drama";

function App() {
  return (
    <div className="App">
      {/* header part */}
      <Header></Header>
      {/* body part */}
      <Drama></Drama>
    </div>
  );
}

export default App;
