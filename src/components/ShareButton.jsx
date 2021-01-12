import React, { useState, useEffect } from 'react'
import { CastToDiconary } from '../algo/CastToDiconary';
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import Button from '@material-ui/core/Button';

const ShareButton = (props) => {
    const { guardsView } = props;
    const [message, setMessage] = useState('');
    const generateToText = () => {
        const guardsDictionary = CastToDiconary(guardsView);
        let message = ``;
        Object.entries(guardsDictionary).map(([key, value]) => {
            let currentGuardMessage = `
                *${key}* - סה"כ *${value.length}* שמירות:\n`;
            value.map(x => {
                currentGuardMessage += `משעה - ${x.startGuard.format('H:mm MM/DD')}, עד שעה - ${x.endGuard.format('H:mm MM/DD')}\n`
            });
            message += currentGuardMessage;
        });
        return message
    }

    useEffect(() => {
        setMessage(generateToText());
    }, [guardsView])

    return (
        <div>
            <WhatsappShareButton url={message}><Button variant="contained" style={{ direction: "ltr" }} > <WhatsappIcon size={25} round={true}></WhatsappIcon>  שתף עם חבריך  </Button></WhatsappShareButton >
        </div >
    )
}
export default ShareButton;