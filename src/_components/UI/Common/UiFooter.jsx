import React from "react";

export const UiFooter = (props) => {

    return (
        <footer className="ui-footer">
            <div className="ui-footer-inner clearfix">
                <img src="../../../../styles/img/app_logo_dark.svg" className="ui-footer-logo f-left"/>
                <div className="ui-footer-inner-left f-left">
                    <p className="7">2019. All Rights Reserved. <a>Privacy Policy</a>   &nbsp;|&nbsp;   <a>Terms of Use</a></p>
                </div>
                <div className="ui-footer-inner-right">
                    <a>About</a>
                    <a>Help</a>
                    <a>Contacts</a>
                    <a>Partnerships</a>
                    <a>FAQ</a>
                </div>
            </div>
        </footer>
    );
}