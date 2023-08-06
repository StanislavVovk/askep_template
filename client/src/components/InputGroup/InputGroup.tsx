import type { FC, HTMLInputTypeAttribute } from 'react'
import { Wrapper } from '../Wrapper/Wrapper'
import { type SymptomsModel } from '../../common/common'
import { Input } from '../Input/Input'
import { type Control } from 'react-hook-form'

interface IInputGroupProps {
  inputType: HTMLInputTypeAttribute
  inputData: SymptomsModel
  control: Control<Record<string, any>>
}

export const InputGroup: FC<IInputGroupProps> = ({
  control,
  inputType,
  inputData
}) => {
  return (
    <Wrapper customStyle={'mb-4'}>
      <span className={'fs-4 fw-bold'}>{inputData.symptomGroupName}</span>
      <div className={'d-flex flex-row flex-wrap mt-3'}>
        {inputData.symptoms.map((data, index) => (
          <Input
            key={index}
            label={data.symptom}
            inputName={data.symptomClassName}
            id={data.symptomClassName.concat(` ${index}`)}
            type={inputType}
            control={control}
            className={'fs-5 pointer-event'}
          />
        ))}
      </div>
    </Wrapper>
  )
}
