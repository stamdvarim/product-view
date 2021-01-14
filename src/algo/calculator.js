import moment from 'moment';

const shuffle = (names) => {
    for (let i = names.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [names[i], names[j]] = [names[j], names[i]];
    }
    return names;
}

export const calculateGuards = (personsNames, givenStartTime, givenEndTime, guardTime, minuteHour, isRandom) => {
    let shuffledNames = []
    if(isRandom){
        shuffledNames = [...shuffle([...personsNames])];
    }
    else{
        shuffledNames = personsNames;
    }
    let counter = 0;
    let guards = [];
    let startTime = moment(givenStartTime);
    while(!(moment(startTime).add(guardTime, minuteHour) >  moment(givenEndTime))){
        let endTime = moment(startTime).add(guardTime, minuteHour);
        if(counter === shuffledNames.length){
            counter = 0;
        }
        guards.push({
            name : shuffledNames[counter],
            startTime : startTime,
            endTime: endTime
        });
        startTime = endTime;
        counter++;
    }
    if(startTime < moment(givenEndTime)){
        if(counter === shuffledNames.length){
            counter = 0;
        }
        guards.push({
            name : shuffledNames[counter],
            startTime : startTime,
            endTime: moment(givenEndTime)
        });
    }
    return guards;
}



