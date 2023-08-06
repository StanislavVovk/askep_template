import type { FC } from 'react'
// fixme add here import fom common/common
import type { SymptomsData } from '../../common/constants/Symptoms'
import { Textarea } from '../Textarea/Textarea'
import { type Control } from 'react-hook-form'
import {Wrapper} from "../Wrapper/Wrapper";

interface ISymptomsWrapper {
  placeholder?: string
  symptomData: SymptomsData
  control: Control<Record<string, any>>
}

export const SymptomsWrapper: FC<ISymptomsWrapper> = ({
  placeholder,
  symptomData,
  control
}) => {
  return (
    <Wrapper
      customStyle={`mt-1 mb-4 d-flex flex-column align-content-start`}>
      <label
        className={`text-bg-info fw-bold fs-4`}>
        {symptomData.caption}
      </label>
      <span className={`text-wrap fs-5 mb-2}`}>
        {symptomData.symptoms.join(' / ')}
      </span>
      <Textarea
        placeholder={placeholder}
        textareaName={symptomData.className}
        control={control}
      />
    </Wrapper>
  )
}
