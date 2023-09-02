import { Button, Container } from 'react-bootstrap'
import { RoutesEnum } from 'common/common'


// export const Home: FC<TemplateModel[]> = (templates) => {
export const Home = () => {
  return (
    <Container>
      {/* <ToastContainer> */}
      {/* <Template templateName={'hehe'} children={<LinkToEditor/>}/> */}
      {/* {templates.map((template, id) => { */}
      {/*    return <Template key={id} templateName={template.templateName}/> */}
      {/* })} */}
      <Button variant={'outline-primary'}>
      <a
        href={RoutesEnum.HOME}
        target={'_blank'}
        rel="noopener noreferrer">
        Open editor
      </a>
    </Button>
      {/* </ToastContainer> */}
    </Container>
  )
}
