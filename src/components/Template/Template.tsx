import type {FC, ReactNode} from 'react';
import {Button, Toast} from "react-bootstrap";


interface ITemplate {
    templateName: string
    func?: Function
    children?: ReactNode
}

export const Template: FC<ITemplate> = ({templateName, func, children}) => {
    return (
        <Toast>
            <Toast.Header closeButton={false}>
                <strong className="me-auto">{templateName}</strong>
            </Toast.Header>
            <Toast.Body>
                Desc
                <>
                    <Button>
                        {children}
                    </Button>
                </>
            </Toast.Body>
        </Toast>
    );
};
