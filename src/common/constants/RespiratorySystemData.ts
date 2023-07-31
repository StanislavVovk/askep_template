import { type SymptomsModel } from '../models/SymptomsModel'

export const RespiratorySystemData: SymptomsModel = {
  symptomGroupName: 'Дихальна система',
  symptoms: [
    {
      symptom: 'задишка в стані спокою',
      symptomClassName: 'conclusion_prev_resp_sys_1'
    },
    {
      symptom: 'задишка при фізичному навантаженні',
      symptomClassName: 'conclusion_prev_resp_sys_2'
    },
    {
      symptom: 'кашель сухий',
      symptomClassName: 'conclusion_prev_resp_sys_3'
    },
    {
      symptom: 'кашель вологий',
      symptomClassName: 'conclusion_prev_resp_sys_4'
    },
    {
      symptom: 'труднощі при відхаркуванні мокротиння',
      symptomClassName: 'conclusion_prev_resp_sys_5'
    },
    {
      symptom: 'підвищення температури тіла, пітливість',
      symptomClassName: 'conclusion_prev_resp_sys_6'
    },
    {
      symptom: 'загальна слабість',
      symptomClassName: 'conclusion_prev_resp_sys_7'
    }
  ]
}
