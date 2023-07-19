import {Canvas} from "./Canvas.tsx";
import {Text} from "../components/Text.tsx";
import {useCallback, useState} from "react";
import {fabric} from "fabric";

const CanvasContainer = () => {
    const [canvas, setCanvas] = useState<fabric.Canvas | undefined>();
    const [texts, setTexts] = useState<{ [key in string]: fabric.ITextboxOptions }>({
        '0': {text: 'A', left: 0},
        '1': {text: 'B', left: 30},
        '2': {text: 'C', left: 90},
    });

    const onTextChange = useCallback((id: string, options: fabric.ITextOptions) => {
        setTexts((texts) => ({...texts, [id]: options}));
    }, []);

    return (
        <main className={'canvas'}>
            <Canvas setCanvas={setCanvas}>
                {Object.entries(texts).map(
                    ([key, options]) =>
                        canvas && <Text id={key} options={options} canvas={canvas} onChange={onTextChange} key={key}/>,
                )}
            </Canvas>
        </main>
    )
}

export default CanvasContainer