import {ChangeEvent, FC, useState} from "react";
import style from './textarea.module.css'


interface ITextAreaProps {
    placeholder?: string
    textareaLabel?: string
}

export const Textarea: FC<ITextAreaProps> = ({
                                                 placeholder = "Опишіть детально скарги",
                                                 textareaLabel = "Опишіть скарги:"
                                             }) => {
    const [textAreaValue, changeTextAreaValue] = useState('')

    const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        changeTextAreaValue(event.target.value)
    }
    console.log(textAreaValue)

    return (
        <div className={'mt-3 mb-3 d-flex flex-column align-content-start'}>
            <label
                className={`text-bg-info fw-bold mb-2 fs-5 ${style.TextareaLabel}`}>
                {textareaLabel}
            </label>
            <textarea placeholder={placeholder}
                      className={style.Textarea}
                      onChange={(event) => handleTextAreaChange(event)}/>
        </div>
    );
};
