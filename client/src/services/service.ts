import { FinderAPI } from 'common/common'
import { ENV } from 'common/constants/ENV'

import { AuthService } from './Auth/Auth.service'
import { FinderService } from './Finder/Finder.service'
import { StorageService } from './Storage/Storage.service'
import { TemplateService } from './Template/Template.service'

const Storage = new StorageService(localStorage)
const Finder = new FinderService(FinderAPI.ASKEP_API, FinderAPI.DIAGNOSIS_API)
const Template = new TemplateService(ENV.API_PATH, )
const Auth = new AuthService(ENV.API_PATH)

export { Auth, Finder, Storage, Template }
