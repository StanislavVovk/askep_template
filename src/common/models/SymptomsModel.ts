export type SymptomGroup = {
    symptom: string
    symptomClassName: string
}

export type SymptomsModel = {
    symptomGroupName: string
    symptoms: SymptomGroup[]
}
