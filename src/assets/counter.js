import { useTimer } from "./hooks/useTimer";


 const Counter = () => {
  const { pause, reset, running, seconds, start, stop } = useTimer();

  return (
    <div className="App">
      <h1>{seconds}</h1>
      <button onClick={running ? pause : start}>Start/Pause</button>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};
export default Counter