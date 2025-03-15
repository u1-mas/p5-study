import "./App.css";
import { LineCircle } from "./p5-sketch/LineCircle.tsx";
import { RandomOO } from "./p5-sketch/RandomOO.tsx";
import { RecursiveLine } from "./p5-sketch/RecursiveLine.tsx";
import { RepetitionNoise } from "./p5-sketch/RepetitionNoise.tsx";
import { Rotate } from "./p5-sketch/Rotate.tsx";
import { SpiralWords } from "./p5-sketch/SpiralWords.tsx";

function App() {
    return (
        <>
            <h1>P5 Examples</h1>
            <RecursiveLine />
            <Rotate />
            <LineCircle />
            <RandomOO />
            <RepetitionNoise />
            <SpiralWords />
        </>
    );
}

export default App;
