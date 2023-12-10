import type { FC, HTMLInputTypeAttribute } from 'react'

import { PasswordInput } from 'components/Input/PasswordInput'
import { Wrapper } from 'components/Wrapper/Wrapper'
import { ErrorComponent } from 'components/common'
import {
  FormCheck,
  type FormCheckProps,
  FormControl,
  FormLabel, InputGroup
} from 'react-bootstrap'
import {
  type Control,
  Controller,
  type FieldErrors,
} from 'react-hook-form'

export interface IInput extends Omit<FormCheckProps, 'size' | 'type'>  {
  control: Control<Record<string, any>>
  errors?: FieldErrors<Record<string, any>>
  inputName: string
  size?: undefined
  type?: HTMLInputTypeAttribute
}

// todo think about HOC here ??
// todo divide password input from other
// fixme render problems

export const Input: FC<IInput> = ({
  control,
  errors,
  inputName,
  type = 'text',
  ...props
}) => {

  // todo refactor this
  switch (type) {

    case 'radio':
      return (
        <Controller
          control={control}
          name={inputName}
          render={({ field: { onChange, ref } }) => (
            <FormCheck
              {...props}
              name={inputName}
              onChange={e => {
                onChange(e.target.value)
              }}
              ref={ref}
              type={'radio'}
            />
          )}
        />
      )
    case 'checkbox':
      return (
        <Controller
          control={control}
          name={inputName}
          render={({ field }) => (
            <FormCheck {...field} {...props} />
          )}
        />
      )
    case 'password':
      return (
        <PasswordInput control={control} inputName={inputName} {...props} />
      )
    default:
      return (
        <Wrapper
          customStyle={'mb-1 d-flex flex-column align-content-start w-100 '}>
          <Controller
            control={control}
            name={inputName}
            render={({ field, fieldState: {error} }) => {
              return (
                <>
                  <FormLabel className={'fs-4 fw-bold'}>{props.label}</FormLabel>
                  <InputGroup className={'p-0'}>
                    <FormControl type={type} {...field} {...props}/>
                    <ErrorComponent errorMessage={error?.message}/>
                  </InputGroup>
                </>
              )
            }}
          />
        </Wrapper>
      )
  }
}
