import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Stopwatch from "./components/stopWatch/stopWatch.component";
import Timer from "./components/timer/timer.component";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Stopwatch />} />
        <Route path="stopWatch" element={<Stopwatch />} />
        <Route path="timer" element={<Timer />} />
      </Route>
    </Routes>
  );
}

export default App;
