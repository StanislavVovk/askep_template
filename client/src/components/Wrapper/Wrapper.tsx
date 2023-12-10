import type { FC, ReactNode } from 'react'

import styles from './wrapper.module.css'

interface IWrapperProps {
  children: ReactNode | ReactNode[]
  className?: string
  customStyle?: string
}

export const Wrapper: FC<IWrapperProps> = ({ children, customStyle = '' }) => {
  return <div className={`${customStyle} ${styles.Wrapper}`}>{children}</div>
}
