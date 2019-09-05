import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import {ButtonDefault} from "../OverrideMui/ButtonTypes";

export const UiDialog = (props) => {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                className="ui-dialog"
            >
                <h1 className="ui-dialog__title">{props.uiTitle}</h1>
                <div {...props} className="ui-dialog__content"/>
                <div className="ui-dialog__action ui-action-wr t-right">
                    <ButtonDefault onClick={props.onClose} color="primary" variant="outlined">
                        No
                    </ButtonDefault>
                    <ButtonDefault onClick={props.onClose} color="primary" variant="contained" autoFocus>
                        Yes
                    </ButtonDefault>
                </div>
            </Dialog>
        </div>
    );
};

export const UiDialogConfirm = (props) => {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                className="ui-dialog"
            >
                <h1 className="ui-dialog__title">{props.uiTitle}</h1>
                <div {...props} className="ui-dialog__content"/>
                <div className="ui-dialog__action">
                    <ButtonDefault onClick={props.onClose} color="primary" variant="outlined">
                        No
                    </ButtonDefault>
                    <ButtonDefault onClick={props.onClose} color="primary" variant="contained" autoFocus>
                        Yes
                    </ButtonDefault>
                </div>
            </Dialog>
        </div>
    );
}
