import React, { useState, useRef } from 'react';
import { calculateGuards } from './calculator';
import moment from 'moment';

const Form = () => {

    const [persons, setPersons] = useState([]);
    const [currentPersonName, setCurrentPersonName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [guardTime, setGuardTime] = useState(1);
    const [guardsView, setGuardsView] = useState([]);
    const [minuteHour, setMinuteHour] = useState("hour");

    const peronNameRef = useRef(null);

    const onChangePersonName = (e) => {
        const personName = e.target.value;
        setCurrentPersonName(currentPersonName => personName);
    }

    const addToPersons = () => {
        if (!currentPersonName || !currentPersonName.trimStart().trimEnd()) {
            return alert("please enter a valid person name");
        }
        if (persons.includes(currentPersonName)) {
            return alert("name already in list");
        }
        setPersons(persons => [...persons, currentPersonName]);
        setCurrentPersonName("");
        peronNameRef.current.focus();
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
            addToPersons();
        }
    }

    const deletePerson = (index) => {
        setPersons(persons => {
            const newPersons = [...persons];
            newPersons.splice(index, 1);
            return newPersons;
        });
    }

    const calculatePersons = () => {
        if (guardTime <= 0) {
            return alert("please enter number above 0");
        }
        setGuardsView(calculateGuards(persons, startDate, endDate, guardTime, minuteHour));
    }

    console.log(guardsView);


    return (
        <div>
            <form>
                <div>
                    <input ref={peronNameRef} type="text" value={currentPersonName} placeholder="person name" onChange={onChangePersonName} onKeyDown={handleKeyDown} />
                    <input type="button" value="add" onClick={addToPersons} />
                </div>
                <div>
                    <label>
                        Start Date
                    <input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        End Date
                    <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Guard Time
                    <input type="number" value={guardTime} onChange={(e) => setGuardTime(e.target.value)} />
                        <select onChange={(e) => setMinuteHour(e.target.value)} name="cars" id="cars">
                            <option value="hour">Hour</option>
                            <option value="minute">Minute</option>
                        </select>
                    </label>
                </div>
                <div>
                    <input type="button" value="calculate" onClick={calculatePersons} />
                </div>
            </form>
            <div>
                Persons
                {persons.map((name, index) => (
                <div key={index}>
                    <span>{name}</span>&nbsp;
                    <button onClick={() => deletePerson(index)}>delete</button>
                </div>
            ))}
            </div>
            <div>
                Calculated
                <hr />
                {guardsView.map((person, index) => (
                    <div key={index}>
                        <div>name: {person.name}</div>
                        <div>start time: {moment(person.startTime).format('MM/DD/YYYY, h:mm a')}</div>
                        <div>end time: {moment(person.endTime).format('MM/DD/YYYY, h:mm a')}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form;