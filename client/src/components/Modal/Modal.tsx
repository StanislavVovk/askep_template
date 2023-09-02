import { type FC, type ReactNode } from 'react'
import { Modal } from "react-bootstrap";

interface IModalComponentProps {
  children: ReactNode | ReactNode[] | string,
  toggleModalVisibility: () => void,
  modalVisibility: boolean
}
export const ModalComponent: FC<IModalComponentProps> = ({ children, toggleModalVisibility, modalVisibility }) => {
  return (
    <Modal
      show={modalVisibility}
      onHide={toggleModalVisibility}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={'style.ModalTop'} closeButton/>
      <Modal.Body className={'style.ModalBody'}>
        {children}
      </Modal.Body>
    </Modal>
  );
}
