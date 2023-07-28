import {SymptomsModel} from "../models/SymptomsModel";

export const Liver: SymptomsModel = {
    symptomGroupName: 'Печінка',
    symptoms: [
        {
            symptom: "пальпується по краю реберної дуги",
            symptomClassName: "conclusion_prev_liver"
        }, {
            symptom: "виступає з-під реберної дуги на ___см",
            symptomClassName: "conclusion_prev_liver"
        }, {
            symptom: "болюча",
            symptomClassName: "conclusion_prev_liver"
        }, {
            symptom: "не болюча",
            symptomClassName: "conclusion_prev_liver"
        },
    ]
}
