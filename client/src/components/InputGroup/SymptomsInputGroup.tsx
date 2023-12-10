import type { FC, HTMLInputTypeAttribute } from 'react'

import { type SymptomsModel } from 'common/common'
import { type Control } from 'react-hook-form'

import { Input } from '../Input/Input'
import { Wrapper } from '../Wrapper/Wrapper'

interface IInputGroupProps {
  control: Control<Record<string, any>>
  inputData: SymptomsModel
  inputType: HTMLInputTypeAttribute
}

// todo reorganise this component for better reusability
export const SymptomsInputGroup: FC<IInputGroupProps> = ({
  control,
  inputData,
  inputType
}) => {
  return (
    <Wrapper customStyle={'mb-4'}>
      <span className={'fs-4 fw-bold'}>{inputData.symptomGroupName}</span>
      <div className={'d-flex flex-row flex-wrap mt-3'}>
        {inputData.symptoms.map((data, index) => (
          <Input
            className={'fs-5'}
            control={control}
            id={data.symptomClassName.concat(` ${index}`)}
            inputName={data.symptomClassName}
            key={index}
            label={data.symptom}
            type={inputType}
            value={data.symptom}
          />
        ))}
      </div>
    </Wrapper>
  )
}
