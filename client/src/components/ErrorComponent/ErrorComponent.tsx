import type { FC, ReactNode } from 'react'
import { Container } from 'react-bootstrap'

interface IErrorComponent {
  children: ReactNode | ReactNode[] | string
}
export const ErrorComponent: FC<IErrorComponent> = ({ children }) => {
  return (
    <Container className={'justify-content-center align-items-center'}>
      {children}
    </Container>
  )
}
