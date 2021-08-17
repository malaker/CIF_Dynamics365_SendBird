import React from 'react'
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

export interface CustomSendBirdAppProps{
    appId:string,
    userId:string
}

export function CustomSendBirdApp(props:CustomSendBirdAppProps):JSX.Element
{
    return  <div className="App">
        <SendBirdApp appId={props.appId} userId={props.userId}/>
        </div>
}
