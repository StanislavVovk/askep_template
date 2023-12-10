import type { FC, ReactNode } from 'react'

import { Container } from 'react-bootstrap'

import { Footer } from '../Footer/Footer'
import { NavBar } from '../NavBar/NavBar'
import style from './layout.module.css'

interface ILayout {
  children: ReactNode | ReactNode[]
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container className={`mt-4 mb-5 ${style.Content}`}>{children}</Container>
      <Footer />
    </>
  )
}
