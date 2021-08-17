import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'
import "../src/styles/index.css"
import * as loadJs from 'loadjs';
import {CustomSendBirdApp} from './CustomSendBirdApp'

const appId= '<APPID>';
const userId='<USERID>';

var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

function showCifPanel()
{
    (window as any).Microsoft.CIFramework.setMode(1).then(function(){
        console.log("mode set it up");
    });
}


loadJs.default(baseUrl+'/webresources/Widget/msdyn_ciLibrary.js','CIL');

loadJs.default.ready('CIL',function(){

    console.log('CIF loaded ;)');

    ReactDOM.render(

        <CustomSendBirdApp appId={appId} userId={userId}/>,

        document.getElementById('app-root'),
    );

    (window as any).Microsoft.CIFramework.setClickToAct(true);

    (window as any).Microsoft.CIFramework.addHandler('onclicktoact', function(event:any) {
        // your code for what it should do when the click event happens in dynamics
        console.log("call!!!!!")
        console.log(event);
        showCifPanel();
      });

      (window as any).Microsoft.CIFramework.addHandler('onmodechanged', function(event:any) {
          console.log(event);
        showCifPanel();
      });

      showCifPanel();
});


