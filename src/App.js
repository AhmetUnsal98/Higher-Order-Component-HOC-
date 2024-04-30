import CounterIncreaseHover from "./CounterIncreaseHover";
import CounterIncreaseClick from "./CounterIncreaseClick";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        aliginItems: "center",
        justifyContent: "center",
      }}
      className="App"
    >
      <CounterIncreaseClick />
      <CounterIncreaseHover />
    </div>
  );
}

export default App;
