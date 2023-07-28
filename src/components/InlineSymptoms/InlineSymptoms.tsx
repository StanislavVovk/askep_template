// todo change component name
import style from './inlineSymptoms.module.css'
import type {FC} from 'react';
import {SymptomsModel} from "../../common/common";
import {Checkbox, Radiobutton} from "../common";

interface IInlineSymptomsProps {
    symptomsData: SymptomsModel,
    checkbox?: boolean
}

// todo think about solution of this case
export const InlineSymptoms: FC<IInlineSymptomsProps> = ({symptomsData, checkbox = true}) => {
    return (
        <div className={`${style.SymptomsList} mt-3 mb-3`}>
            <h4 className={'fs-5 fw-bold'}>{symptomsData.symptomGroupName}:</h4>
            <div className={`d-flex flex-row text-nowrap flex-wrap`}>
                {checkbox
                    ? symptomsData.symptoms.map((symptom, id) => <Checkbox key={id} symptomData={symptom}/>)
                    : symptomsData.symptoms.map((symptom, id) => <Radiobutton key={id} id={id} symptomData={symptom}/>)}
            </div>
        </div>
    );
};
