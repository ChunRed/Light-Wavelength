'use client';
import React, { useMemo } from 'react';
import "bootstrap/dist/css/bootstrap.css";

// 固定波長順序
const wavelengths = [415, 445, 480, 515, 555, 590, 630, 680];

// 將單一波長轉換為對應的 RGB 顏色（近似）
function wavelengthToRGB(wl) {
    let R = 0, G = 0, B = 0;

    if (wl >= 380 && wl < 440) {
        R = -(wl - 440) / (440 - 380);
        B = 1;
    } else if (wl >= 440 && wl < 490) {
        G = (wl - 440) / (490 - 440);
        B = 1;
    } else if (wl >= 490 && wl < 510) {
        G = 1;
        B = -(wl - 510) / (510 - 490);
    } else if (wl >= 510 && wl < 580) {
        R = (wl - 510) / (580 - 510);
        G = 1;
    } else if (wl >= 580 && wl < 645) {
        R = 1;
        G = -(wl - 645) / (645 - 580);
    } else if (wl >= 645 && wl <= 780) {
        R = 1;
    }

    // Gamma 調整
    function adjust(c) {
        return Math.round(255 * Math.pow(c, 0.8));
    }

    return [adjust(R), adjust(G), adjust(B)];
}

// 主元件
export default function WavelengthColor(props) {
    const { values = [] } = props;

    const result = useMemo(() => {
        if (values.length !== wavelengths.length) {
            console.warn('需要提供 8 組波長值');
            return { r: 0, g: 0, b: 0, brightness: 0 };
        }

        let total = values.reduce((sum, val) => sum + val, 0);
        let rSum = 0, gSum = 0, bSum = 0;

        // 每個波長對應強度與 RGB 加權累加
        wavelengths.forEach((wl, i) => {
            const [cr, cg, cb] = wavelengthToRGB(wl);
            rSum += cr * values[i];
            gSum += cg * values[i];
            bSum += cb * values[i];
        });

        let r = total > 0 ? Math.round(rSum / total) : 0;
        let g = total > 0 ? Math.round(gSum / total) : 0;
        let b = total > 0 ? Math.round(bSum / total) : 0;

        // 使用加權平均計算感知亮度（更準確）
        const brightness = Math.round(0.2126 * r + 0.7152 * g + 0.0722 * b);

        return { r, g, b, brightness };
    }, [values]);

    const rgbColor = `rgb(${result.r}, ${result.g}, ${result.b})`;

    return (
        <div style={{ textAlign: 'center', padding: '1rem' }}>
            <div className=' text-light'>Convert to sRGB</div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: rgbColor,
                    margin: '1rem auto',
                    border: '1px solid #999',
                }}
            />
            <p className=' text-light'>R: {result.r}, G: {result.g}, B: {result.b}</p>
            <p className=' text-light'>brightness: {result.brightness}</p>
        </div>
    );
}
