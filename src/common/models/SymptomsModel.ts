export interface SymptomGroup {
  symptom: string
  symptomClassName: string
}

export interface SymptomsModel {
  symptomGroupName: string
  symptoms: SymptomGroup[]
}
