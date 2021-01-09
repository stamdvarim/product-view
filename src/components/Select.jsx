import React, { useState } from 'react'
import Selector from 'react-select';

export const Select = (props) => {

    const [options] = useState([
        { value: 'hour', label: 'שעות' },
        { value: 'minute', label: 'דקות' },
    ]);

    return (
        <Selector
            className="select"
            placeholder={props.minuteHour == "HOUR" ? "שעות" : "דקות"}
            value={props.value}
            onChange={(e) => { props.onChange(e) }}
            options={options}
            defaultValue={options[0]}
        />
    )
}
