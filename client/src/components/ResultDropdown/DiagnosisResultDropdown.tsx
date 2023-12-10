import { type IDiagnosesResponseModel } from 'common/interfaces/FinderResponse'
import styles from 'components/ResultDropdown/result-dropdown.module.css'
import { type FC, type MouseEvent, useCallback } from 'react'

interface IDiagnosesResultDropdown {
  addDataToSelector: (data: IDiagnosesResponseModel) => void
  data: IDiagnosesResponseModel[]
  finderStatus: boolean
  inputValue: string
}

export const DiagnosisResultDropdown: FC<IDiagnosesResultDropdown> = ({
  addDataToSelector,
  data,
  finderStatus,
  inputValue
}) => {
  const handleSymptomsClick = useCallback(
    (e: MouseEvent<HTMLSpanElement>, item: IDiagnosesResponseModel) => {
      e.preventDefault()
      addDataToSelector(item)
    },
    [addDataToSelector]
  )

  // todo refactor this DRY!

  return (
    <div className={`${styles.DropdownWrapper} pe-3 d-flex flex-column pb-3`}>
      {finderStatus && data.length > 0 ? (
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
      ) : finderStatus && data.length === 0 ? (
        <div
          aria-disabled={true}
          className={`fw-bold ${styles.DropdownElements} fs-6 `}
          id={'no-data'}>
          Відсутні дані
        </div>
      ) : (
        <div
          aria-disabled={true}
          className={`fw-bold ${styles.DropdownElements} fs-6 `}
          id={'not-valid'}>
          Введіть більше 2х символів
        </div>
      )}
    </div>
  )
}
