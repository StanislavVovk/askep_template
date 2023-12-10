import { RoutesEnum } from 'common/common'
import { SignIn } from 'pages/Sign/components/SignIn'
import { SignUp } from 'pages/Sign/components/SignUp'
import { type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import styles from './sign.module.css'

export const Sign = () => {
  const { pathname } = useLocation()
  const getScreen = (path: string): ReactNode => {
    switch (path) {
      case RoutesEnum.SIGN_IN: {
        return <SignIn />
      }
      case RoutesEnum.SIGN_UP: {
        return <SignUp />
      }
      default: {
        // todo create error handler here
        return <div>Error</div>
      }
    }
  }
  return (
    <div className={'h-100 w-100 align-items-center d-flex justify-content-center'}>
      <section className={`${styles.SignWrapper}`}>
        {getScreen(pathname)}
      </section>
    </div>)
}
