import { ErrorMessage } from '@hookform/error-message'
import { PasswordInput } from 'components/Input/PasswordInput'
import type { FC, HTMLInputTypeAttribute } from 'react'
import { type Control, type FieldErrors, useController } from 'react-hook-form'
import {
  FormCheck,
  type FormCheckProps,
  FormControl,
  FormLabel,
} from 'react-bootstrap'
import { Wrapper } from 'components/Wrapper/Wrapper'

export interface IInput extends Omit<FormCheckProps, 'type'> {
  control: Control<Record<string, any>>
  errors?: FieldErrors<Record<string, any>>
  inputName: string
  type?: HTMLInputTypeAttribute
}

// todo think about HOC here ??
// todo divide password input from other
// fixme render problems
const Checkbox: FC<FormCheckProps> = ({ ...props }) => {
  return <FormCheck {...props} />
}
const Radiobutton: FC<FormCheckProps> = ({ ...props }) => {
  return <FormCheck type={'radio'} {...props} />
}

export const Input: FC<IInput> = ({
  control,
  inputName,
  type = 'text',
  ...props
}) => {
  const {
    field,
    formState: { errors }
  } = useController({ name: inputName, control })
  // todo refactor this

  const formProps = { ...props, ...field, size: undefined }

  switch (type) {
    case 'radio':
      return <Radiobutton {...formProps} />
    case 'checkbox':
      return <Checkbox {...formProps} />
    case 'password':
      return (
        <PasswordInput
          formProps={formProps}
          inputName={inputName}
          errors={errors}
        />
      )
    default:
      return (
        <Wrapper
          customStyle={'mb-1 d-flex flex-column align-content-start w-100 '}>
          <FormLabel className={'fs-4 fw-bold'}>{props.label}</FormLabel>
          <FormControl type={type} {...formProps} />
          <ErrorMessage name={inputName} errors={errors} />
        </Wrapper>
      )
  }
}
