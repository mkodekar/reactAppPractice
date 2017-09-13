import React from 'react';

class ReCaptcha extends React.Component {
    render() {
        var Recaptcha = require('react-recaptcha');
        let recaptchaInstance;
        const resetRecaptcha = () => {
            recaptchaInstance.reset();
        };

        var verified = function onVerification(response) {
            console.log(response);
        }

       var loaded =  function onLoaded() {
            console.log("Done!!!");
        }
        return(
            <div>
            <Recaptcha ref={e => recaptchaInstance = e}
            sitekey="6Le8VTAUAAAAAHcHJl43VKYaSVN89aOY-ODKU6Uc"
            render="explicit"
            verifyCallback={verified}
            onloadCallback={loaded}/>
            <button onClick={resetRecaptcha}>Reset</button>
            </div>
        );
    }
}

export default ReCaptcha