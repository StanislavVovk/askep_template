import type { FC } from 'react'

import { type SymptomsModel } from 'common/models/SymptomsModel'
import { Wrapper } from 'components/Wrapper/Wrapper'
import { FormCheck } from 'react-bootstrap'
import { type Control, Controller } from 'react-hook-form'

interface IRadioGroupProps {
  control: Control
  inputData: SymptomsModel
}
export const RadioGroup: FC<IRadioGroupProps> = ({ control, inputData }) => {
  return (
    <Wrapper customStyle={'mb-4'}>
      <span className={'fs-4 fw-bold'}>{inputData.symptomGroupName}</span>
      <div className={'d-flex flex-row flex-wrap mt-3'}>
        <Controller
          control={control}
          name={inputData.symptoms[0].symptomClassName}
          render={({ field: { onChange } }) => (
            <>
              {inputData.symptoms.map((data, index) => (
                <FormCheck
                  id={data.symptomClassName.concat(` ${index}`)}
                  key={index}
                  label={data.symptom}
                  name={data.symptomClassName}
                  onChange={onChange}
                  type="radio"
                  value={data.symptom}
                />
              ))}
            </>
          )}
        />
      </div>
    </Wrapper>
  )
}
