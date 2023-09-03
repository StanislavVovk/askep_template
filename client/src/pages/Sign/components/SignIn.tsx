import {
  useAppForm,
  UserLoginDefaultValues,
  UserLoginSchema,
  UserPayloadKey,
  RoutesEnum,
  useAppDispatch,
  useAppSelector, type LoginQuery
} from 'common/common'
import { ErrorComponent } from 'components/common'
import { Input } from 'components/Input/Input'
import { Wrapper } from 'components/Wrapper/Wrapper'
import type { FC } from 'react'
import { Button, Form } from 'react-bootstrap'
import { type SubmitHandler } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { login } from 'store/auth/actions/actions'
import styles from '../sign.module.css'
export const SignIn: FC = () => {
  const { control, handleSubmit } = useAppForm({
    validationSchema: UserLoginSchema,
    defaultValues: UserLoginDefaultValues,
    mode: 'all'
  })
  const dispatch = useAppDispatch()
  // todo refactor this. Component don't support SRP
  // need to divide message display in other component also need to create valid InputGroup
  // as HOC or smthng like that
  // todo create custom Button component
  // move Wrapper component higher in parent element, coz DRY
  // should add remember password for users

  //

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
          navigate(RoutesEnum.HOME)
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
        onSubmit={handleSubmit(handleFormSubmit)}
        className={
          'd-flex justify-content-center align-items-center flex-column w-75'
        }>
        <Input
          autoComplete={'email'}
          label={'Email'}
          placeholder={'Email'}
          control={control}
          inputName={UserPayloadKey.EMAIL}
          type={'email'}
        />
        <Input
          autoComplete={'current-password'}
          label={'Password'}
          placeholder={'Password'}
          control={control}
          inputName={UserPayloadKey.PASSWORD}
          type={'password'}
        />
        <ErrorComponent>
          {authError?.message}
        </ErrorComponent>
        <Button type={'submit'} className={`${styles.SubmitButton} mb-4`}>
          Submit
        </Button>
      </Form>
      <div
        className={
          'd-flex flex-column mb-4 justify-content-center align-items-center'
        }>
        <span className={'fw-bold fs-5'}>New to us?</span>
        <NavLink
          to={RoutesEnum.SIGN_UP}
          className={'fw-bold fst-italic fs-5 text-decoration-none '}>
          Register
        </NavLink>
      </div>
    </Wrapper>
  )
}
