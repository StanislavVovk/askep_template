import {TemplateService} from "./Template/Template.service";
import {ENV} from "../common/constants/ENV";

const Template = new TemplateService(ENV.API_PATH)


export {Template}
