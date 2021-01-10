import React from 'react'
import {
    WhatsappShareButton, WhatsappIcon
} from "react-share";
import Button from '@material-ui/core/Button';

const ShareButton = (props) => {
    return (

        <div>
            <WhatsappShareButton url={props.url} title={props.title} ><Button variant="contained" style={{ direction: "ltr" }}><WhatsappIcon size={25} round={true}></WhatsappIcon>  שתף עם חבריך  </Button></WhatsappShareButton>
        </div>
    )
}
export default ShareButton;