import { ReactP5Wrapper, type Sketch } from "@p5-wrapper/react";

type Word = {
    text: string;
    angle: number;
    radius: number;
    speed: number;
    size: number;
};

const words = [
    "創造", "想像", "表現", "感性", "芸術", "色彩", "デザイン", "調和",
    "躍動", "静寂", "暖色", "寒色", "律動", "空間", "時間", "光影",
    "形状", "質感", "動き", "変化", "心象", "自然", "抽象", "具象"
];

const sketch: Sketch = (p5) => {
    const spiralWords: Word[] = [];
    const center = { x: 0, y: 0 };
    let maxRadius: number;

    p5.setup = () => {
        p5.createCanvas(1200, 600);
        // キャンバスの中心から端までの最大距離を計算（余白を確保）
        maxRadius = Math.min(p5.width, p5.height) * 0.45;
        center.x = p5.width / 2;
        center.y = p5.height / 2;

        // 初期の単語を配置
        for (let i = 0; i < words.length; i++) {
            spiralWords.push({
                text: words[i],
                angle: (p5.TWO_PI * i) / words.length,
                // 最大半径に収まるように調整
                radius: 30 + (maxRadius - 30) * (i / words.length),
                speed: 0.001 - (i * 0.00002),  // 速度差を微妙に
                size: 16 + Math.sin(i * 0.5) * 4,  // サイズに波を付ける
            });
        }
    };

    p5.draw = () => {
        p5.background(255, 20);
        
        const time = p5.millis() * 0.001;
        
        // 各単語を描画
        for (const word of spiralWords) {
            // 角度を更新
            word.angle += word.speed;
            
            // 半径を時間に応じて変化
            // 波の振幅を半径に応じて調整
            const amplitude = word.radius * 0.1;
            const currentRadius = word.radius + Math.sin(time + word.angle) * amplitude;
            
            // 位置を計算
            const x = center.x + Math.cos(word.angle) * currentRadius;
            const y = center.y + Math.sin(word.angle) * currentRadius;
            
            // 文字の回転角度を計算（文字が進行方向を向くように）
            const rotation = word.angle + p5.HALF_PI;
            
            p5.push();
            p5.translate(x, y);
            p5.rotate(rotation);
            
            // 文字の色と透明度を時間に応じて変化
            const alpha = p5.map(Math.sin(time * 2 + word.angle), -1, 1, 100, 255);
            p5.fill(0, alpha);
            
            p5.textSize(word.size);
            p5.textAlign(p5.CENTER, p5.CENTER);
            p5.text(word.text, 0, 0);
            p5.pop();
        }
    };
};

export function SpiralWords() {
    return (
        <>
            <h2>Spiral Words</h2>
            <ReactP5Wrapper sketch={sketch} />
        </>
    );
}
