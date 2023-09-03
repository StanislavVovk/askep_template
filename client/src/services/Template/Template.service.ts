import axios from 'axios'

const token = localStorage.getItem('token')

axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

export class TemplateService {
  private readonly _apiPath: string

  constructor(_apiPath: string) {
    this._apiPath = _apiPath
  }

  createTemplate(data: any, token: string) {
    return axios
      .post(this._apiPath, data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => response)
      .catch(e => {
        throw new Error(e)
      })
  }

  deleteTemplate(templateId: string) {
    return axios
      .delete(this._apiPath, { data: templateId })
      .then(response => response)
      .catch(e => {
        throw new Error(e)
      })
  }

  getTemplates() {
    return axios
      .get(this._apiPath)
      .then(response => response)
      .catch(e => {
        throw new Error(e)
      })
  }
}
