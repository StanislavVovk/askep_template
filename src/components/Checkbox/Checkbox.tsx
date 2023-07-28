import type {FC} from 'react';
import {useState} from "react";
import {SymptomGroup} from "../../common/common";
import {Form} from "react-bootstrap";

interface ICheckboxProps {
    symptomData: SymptomGroup
}

export const Checkbox: FC<ICheckboxProps> = ({symptomData}) => {

    const [checkboxStatus, setCheckboxStatus] = useState(false)

    // todo change handler. Need to add checkbox value
    const handleCheckboxClick = () => {
        setCheckboxStatus(!checkboxStatus)
    }
    return (
            <Form.Check
                type="checkbox"
                id={symptomData.symptomClassName}
                onChange={handleCheckboxClick}
                label={symptomData.symptom}
            />
    );
};
