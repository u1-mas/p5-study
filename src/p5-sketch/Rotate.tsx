import { ReactP5Wrapper, type Sketch } from "@p5-wrapper/react";

const sketch: Sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(1200, 600);
    };
    p5.draw = () => {
        p5.background(255);
        p5.translate(p5.width / 2, p5.height / 2);
        p5.rotate((p5.frameCount * 0.01) % 45);

        for (let angle = 0; angle <= 320; angle += 45) {
            p5.push();
            p5.rotate(p5.radians(angle));
            p5.line(0, 0, 200, 0);
            // 角度も表示する
            p5.textSize(15);
            p5.text(angle, 50, -5);
            p5.pop();
        }
    };
};
export function Rotate() {
    return (
        <>
            <h2>Rotate</h2>
            <ReactP5Wrapper sketch={sketch} />
        </>
    );
}
