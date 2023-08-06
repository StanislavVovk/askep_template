import { type SymptomsModel } from '../models/SymptomsModel'

export const PatientConscience: SymptomsModel = {
  symptomGroupName: 'Свідомість',
  symptoms: [
    {
      symptom: 'збережена',
      symptomClassName: 'conclusion_prev_object_conscience_state'
    },
    {
      symptom: 'без свідомості',
      symptomClassName: 'conclusion_prev_object_conscience_state'
    },
    {
      symptom: 'ступор',
      symptomClassName: 'conclusion_prev_object_conscience_state'
    },
    {
      symptom: 'сопор',
      symptomClassName: 'conclusion_prev_object_conscience_state'
    },
    {
      symptom: 'кома першого ступеню',
      symptomClassName: 'conclusion_prev_object_conscience_state'
    },
    {
      symptom: 'кома другого ступеню',
      symptomClassName: 'conclusion_prev_object_conscience_state'
    },
    {
      symptom: 'кома третього ступеню',
      symptomClassName: 'conclusion_prev_object_conscience_state'
    }
  ]
}
