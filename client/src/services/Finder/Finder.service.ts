import axios from 'axios'
import { FinderAPI, type IDiagnosesResponseModel, type ISymptomsResponseModel } from 'common/common'
const token = localStorage?.getItem('token')

axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }


export class FinderService {
  private readonly _askepApiPath: string
  private readonly _diagnosisApiPath: string
  constructor(_apiPath: string, _diagnosisApiPath: string) {
    this._askepApiPath = _apiPath
    this._diagnosisApiPath = _diagnosisApiPath
  }

  findDiagnoses(query: string, limit?: number): Promise<IDiagnosesResponseModel[]> {
    return axios
      .get('http://localhost:4001/diagnosis/get-diagnosis', {
        params: {
          diagnosis_query: query,
          limit
        }
      })
      .then(diagnosisData => {
    // todo fix naming
       return diagnosisData.data.data as IDiagnosesResponseModel[]
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  findSymptoms(query: string) {
    return axios
      .get(`${this._askepApiPath}${FinderAPI.SYMPTOMS_API}`, {
        params: {
          category_id: '1',
          code: query,
          title: query,
          type: 'select2'
        }
      })
      .then(data => data.data as ISymptomsResponseModel[])
      .catch(error => {
        throw new Error(error)
      })
  }
}
