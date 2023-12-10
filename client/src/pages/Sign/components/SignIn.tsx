import type { FC } from 'react'

import {
  type LoginQuery,
  RoutesEnum,
  UserLoginDefaultValues,
  UserLoginSchema,
  UserPayloadKey,
  useAppDispatch,
  useAppForm, useAppSelector
} from 'common/common'
import { Input } from 'components/Input/Input'
import { Wrapper } from 'components/Wrapper/Wrapper'
import { ErrorComponent } from 'components/common'
import { Button, Form } from 'react-bootstrap'
import { type SubmitHandler } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { login } from 'store/auth/actions/actions'

import styles from '../sign.module.css'
export const SignIn: FC = () => {
  const { control, handleSubmit } = useAppForm({
    defaultValues: UserLoginDefaultValues,
    mode: 'all',
    validationSchema: UserLoginSchema
  })
  const dispatch = useAppDispatch()
  // todo refactor this. Component don't support SRP
  // need to divide message display in other component also need to create valid InputGroup
  // as HOC or smthng like that
  // todo create custom Button component
  // move Wrapper component higher in parent element, coz DRY
  // should add remember password for users


  const authError = useAppSelector(state => state.authReducer.error)

  const navigate = useNavigate()
  const onLogin = (loginData: LoginQuery) => dispatch(login(loginData))
  const handleFormSubmit: SubmitHandler<Record<keyof LoginQuery, string>> = (
    loginData,
    event
  ) => {
    event?.preventDefault()
    onLogin(loginData)
      .unwrap()
      .then(data => {
        if (data) {
          navigate(RoutesEnum.TEMPLATE_HUB)
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
        className={
          'd-flex justify-content-center align-items-center flex-column w-75'
        }
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
          autoComplete={'current-password on'}
          control={control}
          inputName={UserPayloadKey.PASSWORD}
          label={'Password'}
          placeholder={'Password'}
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
        <span className={'fw-bold fs-5'}>New to us?</span>
        <NavLink
          className={'fw-bold fst-italic fs-5 text-decoration-none '}
          to={RoutesEnum.SIGN_UP}>
          Register
        </NavLink>
      </div>
    </Wrapper>
  )
}
