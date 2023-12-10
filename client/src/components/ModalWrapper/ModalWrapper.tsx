import type { FC, ReactNode } from 'react'

import { ModalComponent } from 'components/Modal/Modal'
import { useState } from 'react'

interface IModalWrapperProps {
  children: ReactNode | ReactNode[] | string
}
export const ModalWrapper: FC<IModalWrapperProps> = ({ children }) => {
  const [modalVisibility, toggleModalVisibility] = useState<boolean>(false)
  const handleToggleVisibility = () => {
    toggleModalVisibility(!modalVisibility)
  }

  return (
    <ModalComponent
      modalVisibility={modalVisibility}
      toggleModalVisibility={handleToggleVisibility}>
      {children}
    </ModalComponent>
  )
}
