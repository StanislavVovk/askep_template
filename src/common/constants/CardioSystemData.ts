import { type SymptomsModel } from '../models/SymptomsModel'

export const CardioSystemData: SymptomsModel = {
  symptomGroupName: 'Серцево-судинна система',
  symptoms: [
    {
      symptom: 'біль за грудиною',
      symptomClassName: 'conclusion_prev_cardio_sys_1'
    },
    {
      symptom: 'біль у ділянці серця',
      symptomClassName: 'conclusion_prev_cardio_sys_2'
    },
    {
      symptom: 'серцебиття',
      symptomClassName: 'conclusion_prev_cardio_sys_3'
    },
    {
      symptom: 'перебої в роботі серця',
      symptomClassName: 'conclusion_prev_cardio_sys_4'
    },
    {
      symptom: 'задишка',
      symptomClassName: 'conclusion_prev_cardio_sys_5'
    },
    {
      symptom: 'напади ядухи',
      symptomClassName: 'conclusion_prev_cardio_sys_6'
    },
    {
      symptom: 'зниження толерантності до фіз. навантаження',
      symptomClassName: 'conclusion_prev_cardio_sys_7'
    },
    {
      symptom: 'набряки',
      symptomClassName: 'conclusion_prev_cardio_sys_8'
    }
  ]
}
