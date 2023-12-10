import type {FC} from 'react'

import { Alert, Container } from 'react-bootstrap'

import styles from './error-component.module.css'

interface IErrorComponent {
  errorMessage?: string
}
export const ErrorComponent: FC<IErrorComponent> = ({errorMessage}) => {
  return errorMessage ? (
    <Container className={'justify-content-center align-items-center mt-1 mb-0 w-100 p-0 '}>
      <Alert className={`${styles.ErrorMessage} fw-bold`} variant={'danger'}>{errorMessage}</Alert>
    </Container>
  ) : <></>
}
