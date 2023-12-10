import type { FC } from 'react'

import { Button, Col, Row, Toast, ToastContainer } from 'react-bootstrap'

import styles from './template.module.css'

interface ITemplate {
  templateName: string
}
// todo Typography rules!!!
export const TemplateComponent: FC<ITemplate> = ({ templateName }) => {
  return (
    <Toast>
      <Toast.Header closeButton={false}>
        <ToastContainer className={'w-100'}>
          <Row>
            <Col lg={8} md={8} xl={8} xs={8}>
              <strong className="me-auto">{templateName}</strong>
            </Col>
            <Col lg={4} md={4} xl={4} xs={4}>
              <Button className={styles.TemplateButton} variant={'outline-secondary'}><i className="fa-solid fa-pen-to-square"/></Button>
              <Button className={styles.TemplateButton} variant={'outline-danger'}><i className="fa-solid fa-trash"/></Button>
            </Col>
          </Row>
        </ToastContainer>
      </Toast.Header>
      <Toast.Body>
        <>
          <Button>Використати шаблон</Button>
        </>
      </Toast.Body>
    </Toast>
  )
}
