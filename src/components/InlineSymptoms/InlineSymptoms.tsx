// todo change component name
import style from './inlineSymptoms.module.css';
import type { FC, InputHTMLAttributes } from 'react';
import { type SymptomsModel } from '../../common/common';
import { Checkbox, InputField, Radiobutton } from '../common';

interface IInlineSymptomsProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  symptomsData: SymptomsModel
  isCheckbox?: boolean
  isInputField: boolean
  isTextarea?: boolean
  fieldCaption?: string
}

// todo think about solution of this case
export const InlineSymptoms: FC<IInlineSymptomsProps> = ({
  symptomsData,
  isCheckbox = true,
  fieldCaption,
  isInputField,
  isTextarea,
  ...props
}) => {
  return (
    <div className={`${style.SymptomsList} mt-3 mb-3`}>
      <h4 className={'fs-5 fw-bold'}>{symptomsData.symptomGroupName}:</h4>
      <div className={'d-flex flex-row text-nowrap flex-wrap'}>
        {isCheckbox
          ? symptomsData.symptoms.map((symptom, id) => (
              <Checkbox key={id} symptomData={symptom} />
          ))
          : symptomsData.symptoms.map((symptom, id) => (
              <Radiobutton key={id} id={id} symptomData={symptom} />
          ))}
      </div>
      {isInputField ?? (
        <InputField
          fieldCaption={fieldCaption}
          isTextarea={isTextarea}
          {...props}
        />
      )}
    </div>
  );
};
