import type {ChangeEvent, FC} from 'react';
import {useState} from "react";
import {SymptomGroup} from "../../common/models/SymptomsModel";
import {FormCheck} from "react-bootstrap";

interface IRadiobuttonProps {
    symptomData: SymptomGroup
    id: number
}

// todo think about component reusability. Same as Checkbox component
export const Radiobutton: FC<IRadiobuttonProps> = ({symptomData, id}) => {
    const [radiobuttonStatus, setRadiobuttonStatus] = useState('')
    const handleCheckboxClick = (event: ChangeEvent<HTMLInputElement>) => {
        setRadiobuttonStatus(event.target.value)
    }

    return (
        <FormCheck
            type={"radio"}
            name={symptomData.symptomClassName}
            value={symptomData.symptom}
            id={symptomData.symptomClassName+id}
            onChange={(event) => handleCheckboxClick(event)}
            label={symptomData.symptom}>
        </FormCheck>
    );
};
