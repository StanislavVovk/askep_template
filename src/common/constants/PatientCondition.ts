import {SymptomsModel} from "../models/SymptomsModel";

export const PatientCondition: SymptomsModel = {
    symptomGroupName: 'Загальний стан',
    symptoms: [
        {
            symptom: "Задовільний",
            symptomClassName: "conclusion_prev_object_condition_state"
        }, {
            symptom: "Середньої важності",
            symptomClassName: "conclusion_prev_object_condition_state"
        }, {
            symptom: "Важкий",
            symptomClassName: "conclusion_prev_object_condition_state"
        }, {
            symptom: "вкрай важкий",
            symptomClassName: "conclusion_prev_object_condition_state"
        }
    ]
}
