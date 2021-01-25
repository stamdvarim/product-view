import React, { useState } from 'react'
import Selector from 'react-select';

export const Select = (props) => {

    const { setMinuteHour } = props;

    const [options] = useState([
        { value: 'hour', label: 'שעות' },
        { value: 'minute', label: 'דקות' },
    ]);

    return (
        <Selector
            className="select"
            placeholder={props.minuteHour === "HOUR" ? "שעות" : "דקות"}
            value={props.value.value}
            onChange={(e) => setMinuteHour(e.value)}
            options={options}
            defaultValue={options[0]}
        />
    )
}
