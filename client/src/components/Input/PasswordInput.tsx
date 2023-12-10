import { ErrorMessage } from '@hookform/error-message'
import { type IInput } from 'components/Input/Input'
import { Wrapper } from 'components/Wrapper/Wrapper'
import { type FC,  useState } from 'react'
import { Button, FormControl, FormLabel, InputGroup } from 'react-bootstrap'
import { Controller } from 'react-hook-form'

import styles from './input.module.css'

export const PasswordInput: FC<IInput> = ({ control, inputName, ...props }) => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false)
  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }
  // fixme should be className in inputGroup

  return (
    <Wrapper customStyle={'mb-1 d-flex flex-column align-content-start w-100'}>
      <Controller
        control={control}
        name={inputName}
        render={({ field, formState }) => (
          <>
            <FormLabel className={'fs-4 fw-bold'}>{props.label}</FormLabel>
            <InputGroup className={'p-0'}>
              <FormControl
                className={`${styles.PasswordInput}`}
                type={passwordVisibility ? 'text' : 'password'}
                {...props}
                {...field}
              />
              <Button
                className={`d-flex justify-content-around align-items-center ${styles.PasswordButton}`}
                onClick={changePasswordVisibility}
                variant={'outline-primary'}>
                <i
                  className={`fa-solid ${
                    passwordVisibility ? 'fa-eye-slash' : 'fa-eye'
                  }`}
                />
              </Button>
            </InputGroup>
             <ErrorMessage errors={formState.errors} name={inputName} />
          </>
        )}
      />
    </Wrapper>
  )
}
