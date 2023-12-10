export interface ISymptomsResponseModel {
  category: {
    code: string
    created_at: string
    id: number
    level: null | number
    parent_id: null | number
    title: string
    updated_at: string
  }
  category_id: number
  ids: string
  text: string
}

export interface IDiagnosesResponseModel {
  ids: string
  not_allowed_primary_diagnose: boolean
  text: string
}
