import { Container } from 'react-bootstrap'
import { SymptomsAccordion } from '../components/SymptomsAccordion/SymptomsAccordion'
import { InlineSymptoms, InputField } from '../components/common'
import {
  Abdomen,
  Allergy,
  AnamnesisVitae,
  AuscultationLungs,
  CardioSystemData,
  CentralNervousSystemDamage,
  EndocrineSystemData,
  GastroSystemData,
  HeartTones,
  Kidney,
  Liver,
  MusculoskeletalSystemData,
  NervousSystemData,
  PatientCondition,
  PatientConscience,
  Pediculosis,
  RespiratorySystemData,
  Scabies,
  SkinAndMucousMembranes,
  Tongue,
  UroSystemData
} from '../common/common'

export const TemplateEditor = () => {
  // todo fix problems with status localis component
  return (
    <Container className={'w-100'}>
      <div>
        <h4>Скарги пацієнта</h4>
        <hr />
        <Container>
          <SymptomsAccordion symptomsAccordionData={NervousSystemData} />
          <SymptomsAccordion symptomsAccordionData={RespiratorySystemData} />
          <SymptomsAccordion symptomsAccordionData={CardioSystemData} />
          <SymptomsAccordion symptomsAccordionData={GastroSystemData} />
          <SymptomsAccordion symptomsAccordionData={UroSystemData} />
          <SymptomsAccordion symptomsAccordionData={EndocrineSystemData} />
          <InputField
            hasLabel={true}
            fieldCaption={'Опишіть додаткові скарги пацієнта'}
            isTextarea
          />
          <SymptomsAccordion
            symptomsAccordionData={MusculoskeletalSystemData}
          />
          <InputField
            hasLabel
            fieldCaption={
              'Опишіть додаткові скарги пацієнта з опорно-рухової системи'
            }
          />
          <InlineSymptoms
            hasLabel
            symptomsData={AnamnesisVitae}
            isInputField={true}
            fieldCaption={
              'Опишіть додаткові відомості з анамнезу життя пацієнта'
            }
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={PatientCondition}
            isCheckbox={false}
            isInputField={true}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={PatientConscience}
            isCheckbox={true}
            isInputField={true}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={SkinAndMucousMembranes}
            isInputField={true}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={AuscultationLungs}
            isInputField={true}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={HeartTones}
            isInputField={true}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={Tongue}
            isInputField={true}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={Abdomen}
            isInputField={true}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={Liver}
            isInputField={true}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={Kidney}
            isInputField={true}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={CentralNervousSystemDamage}
            isInputField={true}
          />
          <InputField
            hasLabel={true}
            fieldCaption={'Місцевий стан'}
            placeholder={'Опишіть status localis'}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={Allergy}
            isInputField={true}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={Scabies}
            isInputField={false}
          />
          <InlineSymptoms
            hasLabel={false}
            symptomsData={Pediculosis}
            isInputField={false}
          />
        </Container>
      </div>
    </Container>
  )
}
