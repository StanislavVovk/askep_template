import axios from 'axios'

export class TemplateService {
  private readonly _apiPath: string

  constructor(_apiPath: string) {
    this._apiPath = _apiPath
  }

  async createTemplate(data: any, token: string) {
    return await axios
      // import token from state manager
      .post(this._apiPath, data, {headers: {Authorization: `Bearer ${token}`}})
      .then(response => response)
      .catch(e => {
        throw new Error(e)
      })
  }

  async deleteTemplate(templateId: string, token: string) {
    return await axios
      .delete(this._apiPath, { data: templateId , headers: {Authorization: `Bearer ${token}`}})
      .then(response => response)
      .catch(e => {
        throw new Error(e)
      })
  }

  async getTemplates(token: string) {
    return await axios
      .get(this._apiPath, {headers: {Authorization: `Bearer ${token}`}})
      .then(response => response)
      .catch(e => {
        throw new Error(e)
      })
  }
}
