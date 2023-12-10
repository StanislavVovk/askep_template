import type { FC, MouseEvent } from 'react'

import { type ISymptomsResponseModel } from 'common/interfaces/FinderResponse'
import { useCallback } from 'react'

import styles from './result-dropdown.module.css'
interface IResultDropdown {
  addDataToSelector: (data: ISymptomsResponseModel) => void
  data: ISymptomsResponseModel[]
  finderStatus: boolean
}
export const SymptomsResultDropdown: FC<IResultDropdown> = ({
  addDataToSelector,
  data,
  finderStatus
}) => {
  const handleSymptomsClick = useCallback(
    (e: MouseEvent<HTMLSpanElement>, item: ISymptomsResponseModel) => {
      e.preventDefault()
      addDataToSelector(item)
    },
    [addDataToSelector]
  )

  return (
    <div className={`${styles.DropdownWrapper} pe-3 d-flex flex-column pb-3`}>
      {finderStatus ? (
        <div
          aria-disabled={true}
          className={`fw-bold ${styles.DropdownElements} fs-6 `}
          id={'no-data'}>
          Введіть більше 2х символів
        </div>
      ) : data.length > 0 ? (
        data.map((item, id) => (
          <div
            className={`fw-bold ${styles.DropdownElements} fs-6 `}
            key={id}
            onClick={e => {
              handleSymptomsClick(e, item)
            }}>
            {item.ids} {item.text}
          </div>
        ))
      ) : (
        <div
          aria-disabled={true}
          className={`fw-bold ${styles.DropdownElements} fs-6 `}
          id={'no-data'}>
          Відсутні дані
        </div>
      )}
    </div>
  )
}
