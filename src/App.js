import CounterDecrease from "./CounterDecrease";
import CounterIncrease from "./CounterIncrease";

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
      <CounterIncrease name={"Increase Prop"} />
      <CounterDecrease name={"Decrease Prop"} />
    </div>
  );
}

export default App;
