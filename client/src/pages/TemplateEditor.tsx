import { Button, Container, Form } from 'react-bootstrap'

import { SymptomsWrapper } from '../components/SymptomsWrapper/SymptomsWrapper'
import {
  Kidney,
  Liver,
  PatientConscience,
  Pediculosis,
  Scabies,
  SymptomsTextareaData,
  useAppForm
} from '../common/common'
import { type SubmitHandler } from 'react-hook-form'
import { FormDefaultValue } from '../common/constants/FormDefaultValue'
import { Input } from '../components/Input/Input'
import { InputGroup } from '../components/InputGroup/InputGroup'

export const TemplateEditor = () => {
  // todo work with styles

  const { control, handleSubmit, errors } = useAppForm({
    mode: 'onSubmit',
    defaultValues: FormDefaultValue
  })
  console.log(errors)
  const handleFormSubmit: SubmitHandler<Record<any, string>> = values => {
    console.log(values)
  }

  return (
    <Container className={'w-100'}>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          errors={errors}
          required={true}
          control={control}
          type={'text'}
          inputName={'template_name'}
          label={'Введіть назву шаблону'}
        />
        <h4>Скарги пацієнта</h4>
        <hr />
        <InputGroup control={control} inputType={'radio'} inputData={PatientConscience} />
        {SymptomsTextareaData.map((textareaData, key) => (
          <SymptomsWrapper
            key={key}
            symptomData={textareaData}
            control={control}
          />
        ))}
        <InputGroup control={control} inputType={'radio'} inputData={Kidney} />
        <InputGroup control={control} inputType={'radio'} inputData={Liver} />
        <InputGroup control={control} inputType={'radio'} inputData={Pediculosis} />
        <InputGroup control={control} inputType={'radio'} inputData={Scabies} />
        <div
          className={
            'd-flex justify-content-center flex-column align-items-center'
          }>
          <Button
            className={'fs-5 fw-bold border-2 pointer-event w-25'}
            type={'submit'}
            variant={'outline-primary'}>
            Зберегти шаблон
          </Button>
        </div>
      </Form>
    </Container>
  )
}
