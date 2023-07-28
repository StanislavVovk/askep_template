import {SymptomsModel} from "../models/SymptomsModel";

export const Abdomen: SymptomsModel = {
    symptomGroupName: 'Живіт',
    symptoms: [
        {
            symptom: "м`який",
            symptomClassName: "conclusion_prev_abdomen_1"
        }, {
            symptom: "напружений",
            symptomClassName: "conclusion_prev_abdomen_2"
        }, {
            symptom: "болючий",
            symptomClassName: "conclusion_prev_abdomen_3"
        }, {
            symptom: "не болючий",
            symptomClassName: "conclusion_prev_abdomen_4"
        }
    ]
}
