import { ReactP5Wrapper, type Sketch } from "@p5-wrapper/react";

const sketch: Sketch<{ isLooping: boolean }> = (p5) => {
    let theta = 0;
    const lineCount = 3;
    p5.setup = () => {
        p5.createCanvas(1200, 600);
    };
    p5.draw = () => {
        p5.background(255);
        theta++;
        p5.translate(p5.width / 2, p5.height / 2);
        drawLine(0, 0);
    };

    const drawLine = (x = 0, y = 0, depth = 0) => {
        if (depth === 5) {
            return;
        }
        const x2 = x + 50 * p5.cos(p5.radians(theta));
        const y2 = y + 50 * p5.sin(p5.radians(theta));
        p5.line(x, y, x2, y2);
        p5.stroke(0, Math.max(0, 100 - (depth + 1) * 5));
        p5.strokeWeight(5);
        p5.translate(x2, y2);
        // p5.rotate(p5.radians(theta));
        // drawLine(0, 0, depth + 1);
        for (let i = 0; i < lineCount; i++) {
            p5.rotate(p5.radians(theta));
            drawLine(0, 0, depth + 1);
        }
    };
};
export function RecursiveLine() {
    return (
        <>
            <h2>Recursive Line</h2>
            <ReactP5Wrapper sketch={sketch} />
        </>
    );
}
