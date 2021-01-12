export const CastToDiconary  = (guardsList) => {
    let resultGuards = {};
    guardsList.map((guard) =>{
        if(guard.name in resultGuards){
            resultGuards[guard.name].push({startGuard: guard.startTime, endGuard: guard.endTime});
        }
        else{
            resultGuards[guard.name] =  [{startGuard: guard.startTime, endGuard: guard.endTime}]
        }
    });
    return resultGuards;
}


