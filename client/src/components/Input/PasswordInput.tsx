import { ErrorMessage } from '@hookform/error-message'
import { Wrapper } from 'components/Wrapper/Wrapper'
import { type HTMLInputTypeAttribute, useState , type FC } from 'react'
import { Button, type FormCheckProps, FormControl, FormLabel, InputGroup } from 'react-bootstrap'
import { type ControllerRenderProps, type FieldErrors } from 'react-hook-form'
import styles from './input.module.css'

type FormPropsType = Omit<FormCheckProps, 'type'> &  ControllerRenderProps<Record<string, any>> & {size: undefined }
interface IPasswordInput {
  formProps:  FormPropsType
  errors?: FieldErrors<Record<string, any>>
  inputName: string
  type?: HTMLInputTypeAttribute
}

export const PasswordInput: FC<IPasswordInput> = ({
  formProps,
  errors,
  inputName
}) => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false)
  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }
  // fixme should be className in inputGroup
  return (
    <Wrapper customStyle={'mb-1 d-flex flex-column align-content-start w-100'}>
      <FormLabel className={'fs-4 fw-bold'}>{formProps.label}</FormLabel>
      <InputGroup className={'p-0'}>
        <FormControl
          type={passwordVisibility ? 'text' : 'password'}
          className={`${styles.PasswordInput}`}
          {...formProps}
        />
          <Button
            onClick={changePasswordVisibility}
            className={`d-flex justify-content-around align-items-center ${styles.PasswordButton}`}
            variant={'outline-primary'}>
            <i className={`fa-solid ${passwordVisibility ? 'fa-eye-slash' : 'fa-eye' }`} />
          </Button>
      </InputGroup>
      <ErrorMessage name={inputName} errors={errors} />
    </Wrapper>
  )
}
