import type { FC } from 'react'

import {
  RoutesEnum, type SignUpQuery, UserPayloadKey,
  UserRegistrationDefaultValues, UserRegistrationSchema,
  useAppDispatch,
  useAppForm,
  useAppSelector
} from 'common/common'
import { Input } from 'components/Input/Input'
import { Wrapper } from 'components/Wrapper/Wrapper'
import { ErrorComponent } from 'components/common'
import { Button, Form } from 'react-bootstrap'
import { type SubmitHandler } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { signUp } from 'store/auth/actions/actions'

import styles from '../sign.module.css'
export const SignUp: FC = () => {
  const { control, errors, handleSubmit } = useAppForm({
    defaultValues: UserRegistrationDefaultValues,
    mode: 'all',
    validationSchema: UserRegistrationSchema
  })

  // todo refactor this. Component don't support SRP
  // need to divide message display in other component also need to create valid InputGroup
  // as HOC or smthng like that
  // todo create custom Button component
  // move Wrapper component higher in parent element, coz DRY
  // should add remember password for users

  const authError = useAppSelector(state => state.authReducer.error)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const onSignUp = (registrationData: SignUpQuery) => dispatch(signUp(registrationData))
  const handleFormSubmit: SubmitHandler<Record<keyof SignUpQuery, string>> = (signUpData, event) => {
    event?.preventDefault()
    onSignUp(signUpData)
      .unwrap()
      .then(data => {
        if (data) {
          navigate(RoutesEnum.SIGN_UP)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Wrapper
      customStyle={
        'p-0 pb-2 pt-3 d-flex justify-content-center align-items-center flex-column'
      }>
      <Form
        className={'d-flex flex-column align-items-center w-75'}
        onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          autoComplete={'email'}
          control={control}
          inputName={UserPayloadKey.EMAIL}
          label={'Email'}
          placeholder={'Email'}
          type={'email'}
        />
        <Input
          autoComplete={'username'}
          control={control}
          inputName={UserPayloadKey.NAME}
          label={'Username'}
          placeholder={'Username'}
          type={'text'}
        />
        <Input
          autoComplete={'new-password'}
          control={control}
          inputName={UserPayloadKey.PASSWORD}
          label={'Password'}
          placeholder={'Password'}
          type={'password'}
        />
        <Input
          autoComplete={'new-password'}
          control={control}
          inputName={UserPayloadKey.REPEAT_PASSWORD}
          label={'Repeat password'}
          placeholder={'Repeat password'}
          type={'password'}
        />
        <ErrorComponent errorMessage={authError?.message}/>
        <Button className={`${styles.SubmitButton} mb-4`} type={'submit'}>
          Submit
        </Button>
      </Form>
      <div
        className={
          'd-flex flex-column mb-4 justify-content-center align-items-center'
        }>
        <span className={'fw-bold fs-5'}>Already have account?</span>
        <NavLink
          className={'fw-bold fst-italic fs-5 text-decoration-none '}
          to={RoutesEnum.SIGN_IN}>
          Sign in
        </NavLink>
      </div>
    </Wrapper>
  )
}
