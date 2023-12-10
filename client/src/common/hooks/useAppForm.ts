import type { Schema } from 'joi'
import type { ValidationMode } from 'react-hook-form'

import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'

import { UseFormMode } from '../constants/common'

interface IUseAppForm {
  defaultValues?: Record<string, any>
  mode?: keyof ValidationMode
  validationSchema?: Schema
}

export const useAppForm = ({
  defaultValues,
  mode,
  validationSchema
}: IUseAppForm) => {
  const {
    clearErrors,
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    reset,
    setError,
    setValue, watch
  } = useForm({
    defaultValues,
    mode: mode ?? UseFormMode.onSubmit,
    resolver: validationSchema ? joiResolver(validationSchema) : undefined
  })
  return {
    clearErrors,
    control,
    errors,
    handleSubmit,
    isDirty,
    isValid,
    reset,
    setError,
    setValue,
    watch
  }
}
