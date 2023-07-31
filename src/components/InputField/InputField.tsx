import type { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { useState } from 'react';
import style from './inputField.module.css';

interface IInputField
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  isTextarea?: boolean;
  fieldCaption?: string;
  hasLabel: boolean;
  onDataReceive?: (data: string) => void;
}

export const InputField: FC<IInputField> = ({
                                              onDataReceive,
                                              hasLabel = false,
                                              isTextarea = true,
                                              fieldCaption,
                                              ...props
                                            }) => {
  const [inputFieldValue, changeInputFieldValue] = useState('');

  const handleInputFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    changeInputFieldValue(event.target.value);
    if(onDataReceive) onDataReceive(event.target.value);
  };

  return (
    <div className={`mt-1 mb-3 d-flex flex-column align-content-start`}>
      {hasLabel && (
        <label className={`text-bg-info fw-bold fs-5 ${style.InputFieldLabel}`}>
          {fieldCaption}
        </label>
      )}
      {isTextarea
       ? (
         <textarea
           value={inputFieldValue}
           {...props}
           className={style.Textarea}
           onChange={handleInputFieldChange}
         />
       )
       : (
         <input
           value={inputFieldValue}
           {...props}
           className={style.Input}
           onChange={handleInputFieldChange}
         />
       )}
    </div>
  );
};
