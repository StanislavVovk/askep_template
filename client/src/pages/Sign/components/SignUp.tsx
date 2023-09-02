import {
  RoutesEnum,
  useAppForm,
  UserPayloadKey,
  UserRegistrationDefaultValues,
  UserRegistrationSchema
} from 'common/common'
import { NavLink } from 'react-router-dom'
import { Input } from 'components/Input/Input'
import { Wrapper } from 'components/Wrapper/Wrapper'
import type { FC } from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from '../sign.module.css'
export const SignUp: FC = () => {
  const { control, handleSubmit, errors } = useAppForm({
    mode: 'onSubmit',
    defaultValues: UserRegistrationDefaultValues,
    validationSchema: UserRegistrationSchema
  })

  // todo refactor this. Component don't support SRP
  // need to divide message display in other component also need to create valid InputGroup
  // as HOC or smthng like that
  // todo create custom Button component
  // move Wrapper component higher in parent element, coz DRY
  // should add remember password for users
  const handleFormSubmit = () => {
    // handleSubmit('', '')
  }

  return (
    <Wrapper
      customStyle={
        'p-0 pb-2 pt-3 d-flex justify-content-center align-items-center flex-column'
      }>
      <Form
        onSubmit={handleFormSubmit}
        className={'d-flex flex-column align-items-center w-75'}>
        <Input
          autoComplete={'email'}
          placeholder={'Email'}
          label={'Email'}
          control={control}
          inputName={UserPayloadKey.EMAIL}
          type={'email'}
        />
        <Input
          autoComplete={'username'}
          placeholder={'Username'}
          label={'Username'}
          control={control}
          inputName={UserPayloadKey.USERNAME}
          type={'text'}
        />
        <Input
          autoComplete={'new-password'}
          placeholder={'Password'}
          label={'Password'}
          control={control}
          inputName={UserPayloadKey.PASSWORD}
          type={'password'}
        />
        <Input
          autoComplete={'new-password'}
          label={'Repeat password'}
          placeholder={'Repeat password'}
          control={control}
          inputName={UserPayloadKey.REPEAT_PASSWORD}
          type={'password'}
        />
        <Button type={'submit'} className={`${styles.SubmitButton} mb-4`}>
          Submit
        </Button>
      </Form>
      <div
        className={
          'd-flex flex-column mb-4 justify-content-center align-items-center'
        }>
        <span className={'fw-bold fs-5'}>Already have account?</span>
        <NavLink
          to={RoutesEnum.SIGN_IN}
          className={'fw-bold fst-italic fs-5 text-decoration-none '}>
          Sign in
        </NavLink>
      </div>
    </Wrapper>
  )
}
