import type { FC } from 'react'
import { Accordion } from 'react-bootstrap'
import type { SymptomsModel } from '../../common/common'
import { Checkbox } from '../common'
import style from './symptomsAccordion.module.css'
interface ISymptomsAccordion {
  symptomsAccordionData: SymptomsModel
}

export const SymptomsAccordion: FC<ISymptomsAccordion> = ({
  symptomsAccordionData
}) => {
  return (
    <Accordion flush className={'mt-2'}>
      <Accordion.Header className={style.AccordionHeader}>
        <h4 className={'fw-bold fs-5'}>
          {symptomsAccordionData.symptomGroupName}
        </h4>
      </Accordion.Header>
      <Accordion.Body className={style.AccordionBody}>
        {symptomsAccordionData.symptoms.map((symptom, id) => (
          <Checkbox key={id} symptomData={symptom} />
        ))}
      </Accordion.Body>
    </Accordion>
  )
}
