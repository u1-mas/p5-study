import { ReactP5Wrapper, type Sketch } from "@p5-wrapper/react";

// biome-ignore lint/style/useNamingConvention: <explanation>
type OO = {
    x: number;
    y: number;
    lifetime: number;
    textSize: number;
};
const sketch: Sketch = (p5) => {
    let oos: OO[] = [];
    // canvas内のランダムな座標に「おお」という文字が出てくる
    p5.setup = () => {
        p5.createCanvas(1200, 600);
    };
    p5.draw = () => {
        p5.background(255, 30);
        p5.fill(0);
        if (oos.length < 20) {
            oos.push({
                x: p5.random(p5.width),
                y: p5.random(p5.height),
                lifetime: p5.random(100),
                textSize: p5.random(10, 100),
            });
        }

        for (const oo of oos) {
            p5.textSize(oo.textSize);
            p5.text("おお", oo.x, oo.y);
            oo.lifetime--;
        }
        oos = oos.filter((oo) => oo.lifetime > 0);
    };
};

// biome-ignore lint/style/useNamingConvention: <explanation>
export function RandomOO() {
    return (
        <>
            <h2>Random OO</h2>
            <ReactP5Wrapper sketch={sketch} />
        </>
    );
}
