import { type SymptomsModel } from '../models/SymptomsModel'

export const Kidney: SymptomsModel = {
  symptomGroupName: 'Симптом Пастернацького',
  symptoms: [
    {
      symptom: 'від`ємний',
      symptomClassName: 'conclusion_prev_kidney_↨'
    },
    {
      symptom: 'позитивний зліва',
      symptomClassName: 'conclusion_prev_kidney_↨'
    },
    {
      symptom: 'позитивний справа',
      symptomClassName: 'conclusion_prev_kidney_↨'
    },
    {
      symptom: 'позитивний з обох сторін',
      symptomClassName: 'conclusion_prev_kidney_↨'
    }
  ]
}
