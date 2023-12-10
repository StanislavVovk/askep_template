import type { FC } from 'react'

import { type Control } from 'react-hook-form'

// fixme add here import fom common/common
import type { SymptomsData } from '../../common/constants/Symptoms'

import { Textarea } from '../Textarea/Textarea'
import {Wrapper} from "../Wrapper/Wrapper";

interface ISymptomsWrapper {
  control: Control<Record<string, any>>
  placeholder?: string
  symptomData: SymptomsData
}

export const SymptomsWrapper: FC<ISymptomsWrapper> = ({
  control,
  placeholder,
  symptomData
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
        control={control}
        placeholder={placeholder}
        textareaName={symptomData.className}
      />
    </Wrapper>
  )
}
