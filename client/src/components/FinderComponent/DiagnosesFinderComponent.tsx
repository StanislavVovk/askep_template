import { DevTool } from '@hookform/devtools'
import { TemplatePayloadKey } from 'common/constants/DefaultValues/common'
import { type IDiagnosesResponseModel } from 'common/interfaces/FinderResponse'
import { DiagnosisResultDropdown } from 'components/ResultDropdown/DiagnosisResultDropdown'
import { ErrorComponent } from 'components/common'
import { type ChangeEvent, type FC, useRef, useState } from 'react'
import {
  type Control,
  Controller,
  type UseFormClearErrors,
  type UseFormSetValue
} from 'react-hook-form'
import { Finder } from 'services/service'

import styles from './finder.module.css'

interface IDiagnosesFinderComponentProps {
  clearError: UseFormClearErrors<Record<string, any>>
  control: Control
  setValue: UseFormSetValue<Record<string, any>>
}

// todo refactor

export const DiagnosesFinderComponent: FC<IDiagnosesFinderComponentProps> = ({
  clearError,
  control,
  setValue
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const [finderStatus, setFinderStatus] = useState<boolean>(true)
  const [finderResult, setFinderResult] = useState<IDiagnosesResponseModel[]>(
    []
  )
  const [isFocused, setIsFocused] = useState(false)
  const [isCursorInContainer, setIsCursorInContainer] = useState<boolean>(false)

  // todo custom hook?
  // todo create other component to divide business logic from UI
  // todo add handler which show loader for data fetching
  // todo add animation to ErrorComponent appearing and disappearing

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setValue(TemplatePayloadKey.HOSP_DIAGONSIS, value)
    clearError(TemplatePayloadKey.HOSP_DIAGONSIS)
    if (value.length < 2) {
      setFinderStatus(false)
    } else {
      setFinderStatus(true)
     void handleDiagnosisRequest(value)
    }
    return value
  }


  const handleWrapperClick = () => {
    inputRef.current?.focus()
    setIsFocused(true)
  }

  const handleBlur = () => {
    if (!isCursorInContainer) {
      if (inputValue.trim().length >= 0 && finderResult.length === 0) {
        setValue(TemplatePayloadKey.HOSP_DIAGONSIS, '')
      }
      setIsFocused(false)
    }
  }

  const handleAddingDiagnosis = async (data: IDiagnosesResponseModel) => {
    await new Promise<void>(resolve => {
      setValue(TemplatePayloadKey.HOSP_DIAGONSIS, `${data.ids} ${data.text}`)
      resolve()
    })
    setIsCursorInContainer(false)
    setIsFocused(false)
    inputRef.current?.blur()
  }

  const handleDiagnosisRequest = async (query: string) => {
    try {
      const result = await Finder.findDiagnoses(query)
      setFinderResult(result)
    } catch (error) {
      // todo create Errors list
      setFinderResult([])
      setIsFocused(false)
      // todo create custom hook here
      control.setError(TemplatePayloadKey.HOSP_DIAGONSIS, {
        message: 'Oops something went wrong',
        type: 'manual'
      })
    }
  }

  return (
    <div className={'mb-4 mt-3'}>
      <Controller
        control={control}
        name={TemplatePayloadKey.HOSP_DIAGONSIS}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <div
                className={`w-100 border-black border-3 border ${styles.FinderWrapper} pe-3`}
                id={'wrapper'}
                onClick={handleWrapperClick}>
                <div className={`${styles.SymptomsWrapper} align-items-center`}>
                  <input
                    {...field}
                    autoComplete={'off'}
                    autoCorrect={'off'}
                    className={`p-3 border-0 w-100 ${styles.FinderInput}`}
                    id={'diagnosis-search'}
                    name={TemplatePayloadKey.HOSP_DIAGONSIS}
                    onBlur={handleBlur}
                    onChange={e => {
                      field.onChange(handleInputChange(e))
                    }}
                    onFocus={() => {
                      clearError(field.name)
                    }}
                    ref={inputRef}
                    type="text"
                  />
                </div>
              </div>
              <ErrorComponent errorMessage={error?.message} />
              <DevTool control={control} />
            </>
          )
        }}
      />
      {isFocused && (
        <div
          onMouseEnter={() => {
            setIsCursorInContainer(true)
          }}
          onMouseLeave={() => {
            setIsCursorInContainer(false)
          }}>
          <DiagnosisResultDropdown
            addDataToSelector={handleAddingDiagnosis}
            data={finderResult}
            finderStatus={finderStatus}
            inputValue={inputValue}
          />
        </div>
      )}
    </div>
  )
}
