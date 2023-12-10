import axios from 'axios'
import { API_PATH, TEMPLATE_API } from 'common/enums/ApiPath'
import { type TemplateResponse } from 'common/interfaces/TemplateResponse'
import { type TemplateData } from 'common/models/TemplateModel'


const token = localStorage.getItem('token')

axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

export class TemplateService {
  private readonly _apiPath: string
  constructor(_apiPath: string) {
    this._apiPath = _apiPath
  }

  createTemplate({templateData, templateName}: {templateData: TemplateData, templateName: string}) {
    return axios
      .post(`${this._apiPath}${API_PATH.TEMPLATE}${TEMPLATE_API.CREATE_TEMPLATE}`, {
        template_name: templateName,
        templateData
      })
      .then(response => {
        return response.status === 201
      })
      .catch(e => {
        throw new Error(e)
      })
  }

  deleteTemplate(templateId: string) {
    return axios
      .delete(`${this._apiPath}${API_PATH.TEMPLATE}${TEMPLATE_API.DELETE_TEMPLATE}`, { data: templateId })
      .then(response => response)
      .catch(e => {
        throw new Error(e)
      })
  }

  getTemplates(filter?: any) {
    return axios
      .get(`${this._apiPath}${API_PATH.TEMPLATE}${TEMPLATE_API.GET_TEMPLATES}`)
      .then(response => response.data.templateData as TemplateResponse[])
      .catch(e => {
        throw new Error(e)
      })
  }
}
