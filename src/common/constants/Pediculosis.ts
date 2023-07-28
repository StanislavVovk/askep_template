import {SymptomsModel} from "../models/SymptomsModel";

export const Pediculosis: SymptomsModel = {
    symptomGroupName: 'Огляд на педикульоз',
    symptoms: [
        {
            symptom: "так",
            symptomClassName: "conclusion_prev_pediculosis"
        },   {
            symptom: "ні",
            symptomClassName: "conclusion_prev_pediculosis"
        }
    ]
}
