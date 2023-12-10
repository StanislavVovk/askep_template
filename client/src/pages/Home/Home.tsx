import { useAppDispatch, useAppSelector } from 'common/common'
import { TemplateComponent } from 'components/common'
import { useEffect, useMemo } from 'react'
import { Button, Container, ToastContainer } from 'react-bootstrap'
import { getAllTemplates } from 'store/template/actions/actions'

export const Home = () => {
  const dispatch = useAppDispatch()
  const templates = useAppSelector(state => state.templateReducer.templates)

  const memoizedTemplates = useMemo(() => templates, [templates])

  useEffect( () => {
    const fetchTemplatesData = async () => {
      await dispatch(getAllTemplates())
    }
    void fetchTemplatesData()
  }, [dispatch])

  return (
    <Container className={'HomePage'}>
      <ToastContainer>
        {memoizedTemplates.map((template, id) => {
          return (
            <TemplateComponent key={id} templateName={template.templateName} />
          )
        })}
      </ToastContainer>
    </Container>
  )
}
// <Button variant={'outline-primary'}>
//   <a href={RoutesEnum.HOME} rel="noopener noreferrer" target={'_blank'}>
//     Open editor
//   </a>
// </Button>
