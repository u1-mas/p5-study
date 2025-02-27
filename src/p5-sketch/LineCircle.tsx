import { ReactP5Wrapper, type Sketch } from "@p5-wrapper/react";

const sketch: Sketch = (p5) => {
    let center = { x: 0, y: 0 };
    p5.setup = () => {
        p5.createCanvas(1200, 600);
        center = p5.createVector(p5.width / 2, p5.height / 2);
    };
    p5.draw = () => {
        p5.background(255, 10);
        p5.fill(0);

        const θ = (p5.millis() * 0.001) % p5.TWO_PI; // 0~2πの範囲で周期的に変化
        const maxLength = Math.hypot(p5.width / 2, p5.height / 2); // 端までの最大距離

        // 角度に基づいて端の座標を計算
        const endX = center.x + Math.cos(θ) * maxLength;
        const endY = center.y + Math.sin(θ) * maxLength;
        p5.line(center.x, center.y, endX, endY);

        // 角度の変化に応じて部分円を描く
        p5.noFill();
        p5.stroke(0, 50);
        p5.strokeWeight(1);
        p5.arc(center.x, center.y, maxLength * 0.1, maxLength * 0.1, 0, θ);
    };
};

export function LineCircle() {
    return (
        <>
            <h2>Line Circle</h2>
            <ReactP5Wrapper sketch={sketch} />
        </>
    );
}
