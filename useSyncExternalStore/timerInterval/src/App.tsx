import { useSyncExternalStore } from "react";
import timerStore from "./timerStore";

export default function App() {
  const time = useSyncExternalStore(timerStore.subscribe, timerStore.getSnapshot);

  return (
    <>
      <h1>Timer Interval</h1>
      <p>Time: {time}</p>
    </>
  );
}
