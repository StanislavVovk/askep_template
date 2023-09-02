import { AuthService } from 'services/Auth/Auth.service'
import { TemplateService } from './Template/Template.service'
import { ENV } from 'common/constants/ENV'

const Template = new TemplateService(ENV.API_PATH)
const Auth = new AuthService(ENV.API_PATH)

export { Template, Auth }
