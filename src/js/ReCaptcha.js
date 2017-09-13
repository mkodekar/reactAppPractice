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
        };

        var loaded = function onLoaded() {
            console.log("Done!!!");
        };
        return React.createElement(
            'div',
            null,
            React.createElement(Recaptcha, { ref: e => recaptchaInstance = e,
                sitekey: '6Le8VTAUAAAAAHcHJl43VKYaSVN89aOY-ODKU6Uc',
                render: 'explicit',
                verifyCallback: verified,
                onloadCallback: loaded }),
            React.createElement(
                'button',
                { onClick: resetRecaptcha },
                'Reset'
            )
        );
    }
}

export default ReCaptcha;