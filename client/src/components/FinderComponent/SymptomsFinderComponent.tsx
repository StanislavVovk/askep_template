import type { ChangeEvent, FC } from 'react'

import { type ISymptomsResponseModel } from 'common/common'
import { DropdownElement } from 'components/DropdownElement/DropdownElement'
import { SymptomsResultDropdown } from 'components/ResultDropdown/SymptomsResultDropdown'
import { useCallback, useRef, useState } from 'react'
import { Finder } from 'services/service'

import styles from './finder.module.css'

export const SymptomsFinderComponent: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [inputValue, setInputValue] = useState<string>('')
  const [finderStatus, setFinderStatus] = useState<boolean>(true)
  const [finderResult, setFinderResult] = useState<ISymptomsResponseModel[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const [selectData, setSelectData] = useState<ISymptomsResponseModel[]>([])


  const [isCursorInContainer, setIsCursorInContainer] = useState<boolean>(false)

  // todo refactor component structure (div in li) should set just li

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value.length < 2) {
      setFinderStatus(true)
    } else {
      setFinderStatus(false)
      await handleSymptomsRequest(value)
    }
  }

  const handleWrapperClick = () => {
    inputRef.current?.focus()
    setIsFocused(true)
  }

  const clearInputField = () => {
    setInputValue('')
    setFinderResult([])
    handleWrapperClick()
  }

  const handleBlur = () => {
    if (!isCursorInContainer) {
      if (inputValue.trim().length >= 0 && finderResult.length === 0) {
        setInputValue('')
      }
      setIsFocused(false)
    }
  }

  const handleSelectChange = (data: ISymptomsResponseModel) => {
    const isDataInSelectData = selectData.some(item => item.ids === data.ids)
    if (isDataInSelectData) {
      const updatedSelectData = selectData.filter(item => item.ids !== data.ids)
      setSelectData(updatedSelectData)
    } else {
      setSelectData([...selectData, data])
    }
    clearInputField()
  }

  const handleSymptomsRequest = async (query: string) => {
    const result = await Finder.findSymptoms(query)
    setFinderResult(result)
  }

  const handleXmarkClick = () => {
    clearInputField()
    setSelectData([])
    setFinderStatus(true)
  }

  const handleDeleteSelectorElement = (symptomData: ISymptomsResponseModel) => {
    const updatedSelectData = selectData.filter(
      selectDataItem => selectDataItem !== symptomData
    )
    setSelectData(updatedSelectData)
  }

  return (
    <div
      className={'mb-4 mt-3'}
      onClick={handleWrapperClick}
      onMouseEnter={() => {
        setIsCursorInContainer(true)
      }}
      onMouseLeave={() => {
        setIsCursorInContainer(false)
      }}>
      <div
        className={`w-100 border-black border-3 border ${styles.FinderWrapper} pe-3`}
        id={'wrapper'}>
        <select className={'d-none'} name={'reasons[]'}>
          {selectData.length > 0 &&
            selectData.map((item, index) => {
              return (
                <option key={index} value={item.ids}>
                  {item.ids} {item.text}
                </option>
              )
            })}
        </select>
        <div className={`${styles.SymptomsWrapper} align-items-center`}>
          <ul
            className={`d-flex flex-row p-1 align-items-center justify-content-evenly ${styles.SymptomsWrapper}`}>
            <div
              className={`d-flex align-content-center h-100 w-100 flex-wrap pe-1 ps-2 ${styles.DropdownElementsWrapper}`}>
              {selectData.map((item, index) => (
                <DropdownElement
                  deleteSelectorElement={handleDeleteSelectorElement}
                  hasDeleteButton={true}
                  key={index}
                  symptomData={item}
                />
              ))}
              <li className={'list-unstyled flex-wrap'}>
                <input
                  autoComplete={'off'}
                  autoCorrect={'off'}
                  className={`p-3 border-0 ${styles.FinderInput}`}
                  id={'symptom-search'}
                  onBlur={handleBlur}
                  onChange={handleInputChange}
                  ref={inputRef}
                  role={'textbox'}
                  type="text"
                  value={inputValue}
                />
              </li>
            </div>
            {selectData.length > 0 && (
              <span className={`${styles.Cross}`} onClick={handleXmarkClick}>
                <i className="fa-solid fa-xmark" />
              </span>
            )}
          </ul>
        </div>
      </div>
      {isFocused && (
        <SymptomsResultDropdown
          addDataToSelector={handleSelectChange}
          data={finderResult}
          finderStatus={finderStatus}
        />
      )}
    </div>
  )
}
