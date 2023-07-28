import {ChangeEvent, FC, useState} from "react";
import style from './input.module.css'


interface IInputProps {
    placeholder?: string
    inputLabel?: string
}

export const Input: FC<IInputProps> = ({
                                                 placeholder = "",
                                                 inputLabel
                                             }) => {
    const [inputValue, changeInputValue] = useState('')
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        changeInputValue(event.target.value)
    }

    return (
        <div className={'mt-3 mb-3 d-flex flex-column align-content-start'}>
            <label
                className={`text-bg-info fw-bold mb-2 fs-5 ${style.InputLabel}`}>
                {inputLabel}
            </label>
            <input placeholder={placeholder}
                      className={style.Input}
                      onChange={(event) => handleInputChange(event)}/>
        </div>
    );
};
