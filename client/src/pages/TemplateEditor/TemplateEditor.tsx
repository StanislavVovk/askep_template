import {
  Kidney,
  Liver,
  PatientConscience,
  Pediculosis,
  RoutesEnum,
  Scabies,
  SymptomsTextareaData,
  TemplateDefaultValue,
  type TemplateModel,
  TemplatePayloadKey,
  useAppForm
} from 'common/common'
import { TemplateSchema } from 'common/schemas/schemas'
import { DiagnosesFinderComponent } from 'components/FinderComponent/DiagnosesFinderComponent'
import { SymptomsFinderComponent } from 'components/FinderComponent/SymptomsFinderComponent'
import { Input } from 'components/Input/Input'
import { SymptomsInputGroup } from 'components/InputGroup/SymptomsInputGroup'
import { ModalComponent } from 'components/Modal/Modal'
import { SymptomsWrapper } from 'components/SymptomsWrapper/SymptomsWrapper'
import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Template } from 'services/service'

export const TemplateEditor = () => {
  // todo work with styles
  const [modalVisibility, changeModalVisibility] = useState<boolean>(false)
  const [modalText, changeModalText] = useState<string>('')
  const navigate = useNavigate()
  const { clearErrors, control, handleSubmit, reset, setValue } = useAppForm({
    defaultValues: TemplateDefaultValue,
    mode: 'onSubmit',
    validationSchema: TemplateSchema
  })
  const handleModalVisibilityChange = () => {
    if (modalVisibility) {
      changeModalVisibility(!modalVisibility)
      reset()
      navigate(RoutesEnum.TEMPLATE_EDITOR)
    }
    changeModalVisibility(!modalVisibility)
  }

  const handleFormSubmit: SubmitHandler<
    Record<keyof TemplateModel, string>
  > = values => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { template_name, ...templateData } = values
    Template.createTemplate({ templateData, templateName: template_name })
      .then(() => {
        handleModalVisibilityChange()
          // todo MESSAGE MESSAGE MESSAGE
        changeModalText('Успішно створено шаблон')
      })
      .then(() => {})
      .catch(e => {
        handleModalVisibilityChange()
        changeModalText(e)
      })
  }

  return (
    <Container className={'w-100'}>
      <Form
        className={'position-relative'}
        onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          control={control}
          inputName={TemplatePayloadKey.TEMPLATE_NAME}
          label={'Введіть назву шаблону'}
          required={true}
        />
        <SymptomsFinderComponent />
        <h4>Скарги пацієнта</h4>
        <hr />
        <SymptomsInputGroup
          control={control}
          inputData={PatientConscience}
          inputType={'radio'}
        />
        {SymptomsTextareaData.map((textareaData, key) => (
          <SymptomsWrapper
            control={control}
            key={key}
            symptomData={textareaData}
          />
        ))}
        <SymptomsInputGroup
          control={control}
          inputData={Kidney}
          inputType={'radio'}
        />
        <SymptomsInputGroup
          control={control}
          inputData={Liver}
          inputType={'radio'}
        />
        <SymptomsInputGroup
          control={control}
          inputData={Pediculosis}
          inputType={'radio'}
        />
        <SymptomsInputGroup
          control={control}
          inputData={Scabies}
          inputType={'radio'}
        />

        <DiagnosesFinderComponent
          clearError={clearErrors}
          control={control}
          setValue={setValue}
        />
        <div
          className={
            'd-flex justify-content-center flex-column align-items-center'
          }>
          <Button
            className={'fs-5 fw-bold border-2 pointer-event w-25'}
            type={'submit'}
            variant={'primary'}>
            Зберегти шаблон
          </Button>
        </div>
      </Form>
      {modalVisibility ?? (
        <ModalComponent
          modalVisibility={modalVisibility}
          toggleModalVisibility={handleModalVisibilityChange}>
          {modalText}
        </ModalComponent>
      )}
    </Container>
  )
}
