import type { FC, HTMLInputTypeAttribute } from 'react'
import { type Control, type FieldErrors, useController } from 'react-hook-form'
import {
  FormCheck,
  type FormCheckProps,
  FormControl,
  FormLabel
} from 'react-bootstrap'
import { Wrapper } from 'components/Wrapper/Wrapper'

interface IInput extends Omit<FormCheckProps, 'type'> {
  control: Control<Record<string, any>, any>
  errors?: FieldErrors<Record<string, any>>
  inputName: string
  type: HTMLInputTypeAttribute
}

// todo think about HOC here ??
// todo need to refactor this
// todo create valid error component

// fixme render problems
const Checkbox: FC<FormCheckProps> = ({ ...props }) => {
  return <FormCheck {...props} />
}

const Radiobutton: FC<FormCheckProps> = ({ ...props }) => {
  return <FormCheck type={'radio'} {...props} />
}

export const Input: FC<IInput> = ({
  errors,
  control,
  inputName,
  type = 'text',
  ...props
}) => {
  const { field } = useController({ name: inputName, control })
  // refactor this
  const formProps = { ...props, ...field, size: undefined }
  switch (type) {
    case 'radio':
      return <Radiobutton {...formProps} />
    case 'checkbox':
      return <Checkbox {...formProps} />
    default:
      return (
        <Wrapper
          customStyle={'mt-1 mb-4 d-flex flex-column align-content-start '}>
          <FormLabel className={'fs-4 fw-bold'}>{props.label}</FormLabel>
          <FormControl type={type} {...formProps} />
          <div>{errors?.root?.message}</div>
        </Wrapper>
      )
  }
}
