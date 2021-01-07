import React, { useState } from 'react'
import Selector from 'react-select';

export const Select = (props) => {

    const [options] = useState([
        { value: 'hour', label: 'HOUR' },
        { value: 'minute', label: 'MINUTE' },
    ]);

    return (
        <Selector
            className="select"
            placeholder={props.minuteHour}
            value={props.value}
            onChange={(e) => { props.onChange(e) }}
            options={options}
            defaultValue={options[0]}
        />
    )
}
