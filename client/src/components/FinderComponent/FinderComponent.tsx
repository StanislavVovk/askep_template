import type { ChangeEvent, FC } from 'react'
import { useRef, useState } from 'react'
import { Finder } from 'services/service'
import styles from './finder.module.css'

export const SymptomsFinderComponent: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    handleSymptomsRequest(e.target.value)
  }
  const handleWrapperClick = () => {
    inputRef.current?.focus()
  }

  const handleSymptomsRequest = (query: string) => {
    Finder.findSymptoms(query)
      .then(data =>
      {
        console.log(data.data)
        return data
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return (
    <div
      className={`w-100 border-black border-3 border ${styles.FinderWrapper} pe-3`}>
      <select className={'d-none'} onClick={handleWrapperClick} />
      <div className={`${styles.SymptomsWrapper}`} onClick={handleWrapperClick}>
        <ul
          className={`d-flex flex-row p-1 align-items-center justify-content-between ${styles.SymptomsWrapper}`}>
          <div
            className={'d-flex align-content-center h-100 w-100 flex-wrap'}
            onClick={handleWrapperClick}>
            <li className={'list-unstyled w-100 flex-wrap'}>
              <input
                id={'symptom-search'}
                type="text"
                className={`p-3 border-0 ${styles.FinderInput}`}
                role={'textbox'}
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
              />
            </li>
          </div>
          <span className={`${styles.Cross}`}>
            <i className="fa-solid fa-xmark" />
          </span>
        </ul>
      </div>
    </div>
  )
}
