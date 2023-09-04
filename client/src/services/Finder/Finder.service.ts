import axios from 'axios'
import { FinderAPI } from 'common/common'

export class FinderService {
  private readonly _apiPath: string
  constructor(_apiPath: string) {
    this._apiPath = _apiPath
  }

  findSymptoms(query: string) {
    const encodedQuery = encodeURIComponent(query)

    return axios
      .get(`${this._apiPath}${FinderAPI.SYMPTOMS_API}`, {
        params: {
          title: encodedQuery,
          code: encodedQuery,
          type: 'select2',
          category_id: '1'
        }
      })
      .then(data => data)
      .catch(error => {
        throw new Error(error)
      })
  }

  findDiagnoses(query: string) {
    const encodedQuery = encodeURIComponent(query)

    return axios
      .get(`${this._apiPath}${FinderAPI.DIAGNOSIS_API}`, {
        params: {
          title: encodedQuery,
          limit: 30
        }
      })
      .then(data => data)
      .catch(error => {
        throw new Error(error)
      })
  }
}
