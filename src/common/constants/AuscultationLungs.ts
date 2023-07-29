import { type SymptomsModel } from '../models/SymptomsModel';

export const AuscultationLungs: SymptomsModel = {
  symptomGroupName: 'Шкіра та видимі слизові',
  symptoms: [
    {
      symptom: 'дихання везикулярне',
      symptomClassName: 'conclusion_prev_ausc_lungs_1'
    },
    {
      symptom: 'ослаблене везикулярне',
      symptomClassName: 'conclusion_prev_ausc_lungs_2'
    },
    {
      symptom: 'везикулярне з жорстким відтінком',
      symptomClassName: 'conclusion_prev_ausc_lungs_3'
    },
    {
      symptom: 'жорстке',
      symptomClassName: 'conclusion_prev_ausc_lungs_4'
    },
    {
      symptom: 'бронхіальне',
      symptomClassName: 'conclusion_prev_ausc_lungs_5'
    },
    {
      symptom: 'хрипи відсутні',
      symptomClassName: 'conclusion_prev_ausc_lungs_6'
    },
    {
      symptom: 'хрипи сухі ',
      symptomClassName: 'conclusion_prev_ausc_lungs_7'
    },
    {
      symptom: 'бронхіальне',
      symptomClassName: 'conclusion_prev_ausc_lungs_8'
    },
    {
      symptom: 'хрипи вологі',
      symptomClassName: 'conclusion_prev_ausc_lungs_9'
    }
  ]
};
