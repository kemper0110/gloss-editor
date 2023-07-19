import React, {useRef, useEffect} from 'react';
import {fabric} from 'fabric';
import './canvas.scss';

export function Canvas(
    {
        setCanvas,
        children,
    }: {
        setCanvas: (canvas: fabric.Canvas) => void;
        children?: React.ReactNode | React.ReactNode[];
    }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        setCanvas(
            new fabric.Canvas(canvasRef.current, {
                renderOnAddRemove: true,
                width: 600,
                height: 600
            }),
        );
    }, [setCanvas])

    return (
        <>
            <canvas className={'canvas'} ref={canvasRef}></canvas>
            {children}
        </>
    )
}