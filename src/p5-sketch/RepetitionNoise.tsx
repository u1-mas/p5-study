import { ReactP5Wrapper, type Sketch } from "@p5-wrapper/react";

const sketch: Sketch = (p5) => {
    const seed = Math.random();
    const gap = 10;

    p5.setup = () => {
        p5.createCanvas(1200, 600);
    };

    p5.draw = () => {
        p5.background(255);
        const yOffset = p5.millis() * 0.0005;
        p5.noiseSeed(seed);
        // noiseを色に変換してキャンバス内に描画
        for (let x = 0; x < p5.width; x += gap) {
            for (let y = -yOffset; y < p5.height; y += gap) {
                const noiseValue = p5.noise(x, y);
                const color = p5.map(noiseValue, 0, 1, 40, 255);
                p5.fill(color);
                p5.noStroke();
                p5.square(x, y, gap);
            }
        }
    };
};

export const RepetitionNoise = () => {
    return (
        <>
            <h2>Repetition Noise</h2>
            <ReactP5Wrapper sketch={sketch} />
        </>
    );
};
