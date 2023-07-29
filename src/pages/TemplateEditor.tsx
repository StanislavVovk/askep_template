import { Container } from 'react-bootstrap';
import { SymptomsAccordion } from '../components/SymptomsAccordion/SymptomsAccordion';
import { InlineSymptoms, InputField } from '../components/common';
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
} from '../common/common';

export const TemplateEditor = () => {
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
            fieldCaption={'Опишіть додаткові скарги пацієнта'}
            isTextarea
          />
          <SymptomsAccordion
            symptomsAccordionData={MusculoskeletalSystemData}
          />
          <InputField
            fieldCaption={
              'Опишіть додаткові скарги пацієнта з опорно-рухової системи'
            }
          />
          <InlineSymptoms
            symptomsData={AnamnesisVitae}
            isInputField={true}
            fieldCaption={
              'Опишіть додаткові відомості з анамнезу життя пацієнта'
            }
          />
          <InlineSymptoms
            symptomsData={PatientCondition}
            isCheckbox={false}
            isInputField={true}
          />
          <InlineSymptoms
            symptomsData={PatientConscience}
            isCheckbox={true}
            isInputField={true}
          />
          <InlineSymptoms
            symptomsData={SkinAndMucousMembranes}
            isInputField={true}
          />
          <InlineSymptoms
            symptomsData={AuscultationLungs}
            isInputField={true}
          />
          <InlineSymptoms symptomsData={HeartTones} isInputField={true} />
          <InlineSymptoms symptomsData={Tongue} isInputField={true} />
          <InlineSymptoms symptomsData={Abdomen} isInputField={true} />
          <InlineSymptoms symptomsData={Liver} isInputField={true} />
          <InlineSymptoms symptomsData={Kidney} isInputField={true} />
          <InlineSymptoms
            symptomsData={CentralNervousSystemDamage}
            isInputField={true}
          />
          <InputField
            fieldCaption={'Місцевий стан'}
            placeholder={'Опишіть status localis'}
          />
          <InlineSymptoms symptomsData={Allergy} isInputField={true} />
          <InlineSymptoms symptomsData={Scabies} isInputField={false} />
          <InlineSymptoms symptomsData={Pediculosis} isInputField={false} />
        </Container>
      </div>
    </Container>
  );
};
