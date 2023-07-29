import { type SymptomsModel } from '../models/SymptomsModel';

export const Allergy: SymptomsModel = {
  symptomGroupName: 'Алергічні реакції',
  symptoms: [
    {
      symptom: 'кропивниця',
      symptomClassName: 'conclusion_prev_allergical_reaction_1'
    },
    {
      symptom: 'набряк Квінки',
      symptomClassName: 'conclusion_prev_allergical_reaction_2'
    },
    {
      symptom: 'анафілактичний шок',
      symptomClassName: 'conclusion_prev_allergical_reaction_3'
    }
  ]
};
