import {SymptomsModel} from "../models/SymptomsModel";

export const Scabies: SymptomsModel = {
    symptomGroupName: 'Огляд на коросту',
    symptoms: [
        {
            symptom: "так",
            symptomClassName: "conclusion_prev_scabies"
        },   {
            symptom: "ні",
            symptomClassName: "conclusion_prev_scabies"
        }
    ]
}
