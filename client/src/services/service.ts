import { FinderAPI } from 'common/common'
import { FinderService } from './Finder/Finder.service'
import { AuthService } from './Auth/Auth.service'
import { StorageService } from './Storage/Storage.service'
import { TemplateService } from './Template/Template.service'
import { ENV } from 'common/constants/ENV'

const Storage = new StorageService(localStorage)

const Finder = new FinderService(FinderAPI.ASKEP_API)
const Template = new TemplateService(ENV.API_PATH)
const Auth = new AuthService(ENV.API_PATH)

export { Template, Auth, Storage, Finder }
