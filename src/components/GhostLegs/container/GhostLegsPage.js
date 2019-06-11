import React, { useState } from 'react';
import GhostLegs from '../components/GhostLegs';
import NumberField from '../components/NumberField';

const GhostLegsPage = () => {
    const [ number, setNumber ] = useState(2);

    const onChangeNumber = (value) => {
        setNumber(value);
    };

    return (
        <div>
            <GhostLegs value={number} />
            <NumberField value={number} onChange={onChangeNumber} />
        </div>
    );
};

export default GhostLegsPage;