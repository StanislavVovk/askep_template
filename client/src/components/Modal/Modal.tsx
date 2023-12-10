import { type FC, type ReactNode } from 'react'
import { Modal } from "react-bootstrap";

interface IModalComponentProps {
  children: ReactNode | ReactNode[] | string,
  modalVisibility: boolean
  toggleModalVisibility: () => void,
}
export const ModalComponent: FC<IModalComponentProps> = ({ children, modalVisibility, toggleModalVisibility }) => {
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={toggleModalVisibility}
      show={modalVisibility}
    >
      <Modal.Header className={'style.ModalTop'} closeButton/>
      <Modal.Body className={'style.ModalBody'}>
        {children}
      </Modal.Body>
    </Modal>
  );
}
