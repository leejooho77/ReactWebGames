import React from 'react';
import { InputNumber } from 'antd';

const NumberField = ({ value, onChange }) => {
    const onChangeNumber = (value) => {
        onChange(value);
    }

    return (
        <InputNumber min={2} max={10} value={value} onChange={onChangeNumber} />
    );
};

export default NumberField;