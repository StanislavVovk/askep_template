import type { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { useState } from 'react';
import style from './input_field.module.css';

interface IInputField
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  isTextarea?: boolean
  fieldCaption?: string
}

export const InputField: FC<IInputField> = ({
  isTextarea = false,
  fieldCaption,
  ...props
}) => {
  const [inputFieldValue, changeInputFieldValue] = useState('');

  console.log(inputFieldValue);
  const handleInputFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    changeInputFieldValue(event.target.value);
  };

  return (
    <div className={'mt-3 mb-3 d-flex flex-column align-content-start'}>
      <label
        className={`text-bg-info fw-bold mb-2 fs-5 ${style.InputFieldLabel}`}
      >
        {fieldCaption}
      </label>
      {isTextarea
        ? (
        <textarea
          {...props}
          className={style.Textarea}
          onChange={handleInputFieldChange}
        />
          )
        : (
        <input
          {...props}
          className={style.Input}
          onChange={handleInputFieldChange}
        />
          )}
    </div>
  );
};
