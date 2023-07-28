import {Container} from "react-bootstrap";
import {SymptomsAccordion} from "../components/SymptomsAccordion/SymptomsAccordion";
import {InlineSymptoms, Input, Textarea} from "../components/common";
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
} from "../common/common"

export const TemplateEditor = () => {
    return (
        <Container className={'w-100'}>
            <div>
                <h4>Скарги пацієнта</h4>
                <hr/>
                <Container>
                    <SymptomsAccordion symptomsAccordionData={NervousSystemData}/>
                    <SymptomsAccordion symptomsAccordionData={RespiratorySystemData}/>
                    <SymptomsAccordion symptomsAccordionData={CardioSystemData}/>
                    <SymptomsAccordion symptomsAccordionData={GastroSystemData}/>
                    <SymptomsAccordion symptomsAccordionData={UroSystemData}/>
                    <SymptomsAccordion symptomsAccordionData={EndocrineSystemData}/>
                    <Textarea textareaLabel={"Опишіть додаткові скарги пацієнта"}/>
                    <InlineSymptoms symptomsData={MusculoskeletalSystemData}/>

                    <SymptomsAccordion symptomsAccordionData={MusculoskeletalSystemData}/>
                    <Textarea textareaLabel={'Опишіть додаткові скарги пацієнта з опорно-рухової системи'}/>
                    <InlineSymptoms symptomsData={AnamnesisVitae}/>
                    <Textarea textareaLabel={'Опишіть додаткові відомості з анамнезу життя пацієнта'}/>
                    <InlineSymptoms symptomsData={PatientCondition} checkbox={false}/>
                    <InlineSymptoms symptomsData={PatientConscience} checkbox={true}/>
                    <Input inputLabel={'Зріст'}/>
                    <Input inputLabel={'Вага'}/>
                    <InlineSymptoms symptomsData={SkinAndMucousMembranes}/>
                    <Input inputLabel={'Частота дихання'}
                           placeholder={'Ввести значення (число від 0 до 300, формат ХХ за хв.)'}/>
                    <InlineSymptoms symptomsData={AuscultationLungs}/>
                    <Input inputLabel={'Артеріальний тиск'}
                           placeholder={'Ввести значення (формат 120/80 мм рт.ст. (себто з двох значень окремих цифр від 0 до 300))'}/>
                    <Input inputLabel={'Пульс'} placeholder={'Ввести значення (число від 0 до 300, формат ХХ за хв.)'}/>
                    <InlineSymptoms symptomsData={HeartTones}/>
                    <InlineSymptoms symptomsData={Tongue}/>
                    <InlineSymptoms symptomsData={Abdomen}/>
                    <InlineSymptoms symptomsData={Liver}/>
                    <InlineSymptoms symptomsData={Kidney}/>
                    <InlineSymptoms symptomsData={CentralNervousSystemDamage}/>
                    <Textarea textareaLabel={'Місцевий стан'} placeholder={''}/>
                    <InlineSymptoms symptomsData={Allergy}/>
                    <InlineSymptoms symptomsData={Scabies}/>
                    <InlineSymptoms symptomsData={Pediculosis}/>
                    <Textarea textareaLabel={'Додаткове обстеження / маніпуляції'} placeholder={''}/>

                </Container>
            </div>
        </Container>
    );
};
