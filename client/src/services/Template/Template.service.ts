import axios from 'axios'

export class TemplateService {
  private readonly _apiPath: string

  constructor(_apiPath: string) {
    this._apiPath = _apiPath
  }

  async createTemplate(data: any) {
    return await axios
      .post(this._apiPath, data)
      .then(response => response)
      .catch(e => {
        throw new Error(e)
      })
  }

  async deleteTemplate(templateId: string) {
    return await axios
      .delete(this._apiPath, { data: templateId })
      .then(response => response)
      .catch(e => {
        throw new Error(e)
      })
  }

  async getTemplates(userId: string) {
    return await axios
      .get(this._apiPath, {data: userId})
      .then(response => response)
      .catch(e => {
        throw new Error(e)
      })
  }
}
