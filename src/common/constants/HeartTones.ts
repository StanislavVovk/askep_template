import {SymptomsModel} from "../models/SymptomsModel";

export const HeartTones: SymptomsModel = {
    symptomGroupName: 'Тони серця',
    symptoms: [
        {
            symptom: "ритмічні",
            symptomClassName: "conclusion_prev_ausc_heart_1"
        }, {
            symptom: "аритмічні ",
            symptomClassName: "conclusion_prev_ausc_heart_2"
        }, {
            symptom: "ясні",
            symptomClassName: "conclusion_prev_ausc_heart_3"
        }, {
            symptom: "ослаблені",
            symptomClassName: "conclusion_prev_ausc_heart_4"
        }, {
            symptom: "акцент 2-го тону над аортою",
            symptomClassName: "conclusion_prev_ausc_heart_5"
        }, {
            symptom: "легеневою артерією",
            symptomClassName: "conclusion_prev_ausc_heart_6"
        },
    ]
}
