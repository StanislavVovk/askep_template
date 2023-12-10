import type { FC } from 'react'

import { type ISymptomsResponseModel } from 'common/interfaces/FinderResponse'

import styles from './dropdown-element.module.css'

interface IDropdownElement {
  deleteSelectorElement: (symptomData: ISymptomsResponseModel) => void
  hasDeleteButton?: boolean
  symptomData: ISymptomsResponseModel
}
export const DropdownElement: FC<IDropdownElement> = ({
  deleteSelectorElement,
  hasDeleteButton,
  symptomData
}) => {
  return (
    <li
      className={`list-unstyled p-2 d-flex ${styles.DropdownElement} me-2 fw-bold align-items-center`}>
      {hasDeleteButton && (
        <span>
          <span
            className={'pe-1'}
            onClick={() => {
              deleteSelectorElement(symptomData)
            }}>
            <i className={`fa-solid fa-xmark ${styles.XMark}`} />
          </span>
        </span>
      )}
      <span>
        {symptomData.ids} {symptomData.text}
      </span>
    </li>
  )
}
