import { Canvas } from "fabric/fabric-impl";
import { useEffect, useState } from "react";
import { fabric } from 'fabric';

interface MyCanvasProps {
    images: string[];
}

export default function MyCanvas() {
    return (
        <canvas id="c">
        </canvas>
    )
}