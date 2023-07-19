import {useState, useEffect} from 'react';
import {fabric} from 'fabric';

interface ITextProps {
    id: string;
    options: fabric.ITextboxOptions;
    canvas: fabric.Canvas;
    onChange: (id: string, options: fabric.ITextboxOptions) => void;
}

export function Text({onChange, id, canvas, options}: ITextProps) {
    const [textbox] = useState<fabric.Textbox>(() => new fabric.Textbox(options.text ?? '', options));

    useEffect(() => {
        canvas.add(textbox);
    }, [canvas, textbox]);

    useEffect(() => {
        textbox.setOptions(options);
    }, [options, textbox]);

    useEffect(() => {
        const update = () => {
            onChange(id, textbox.toObject());
        };
        textbox.on('moved', update);
        textbox.on('scaled', update);
        textbox.on('rotated', update);
        textbox.on('changed', update);
    }, [id, onChange, textbox]);
    return <></>
}