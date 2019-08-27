import React from "react";

export const UiFormWr = (props) => {

    return (
        <form className="ui-form" {...props}/>
    );
};

export const UiFormTitle = (props) => {

    return (
        <div className="ui-form__title">{props.formtitle}</div>
    );
};

export const UiFieldSingleWr = (props) => {

    return (
        <div className="ui-field-single" {...props}/>
    );
};

export const UiFieldMultipleWr = (props) => {

    return (
        <div className="ui-field-multiple" {...props}/>
    );
};

export const UiField = (props) => {

    return (
        <div className="ui-field">
            <UiFieldLabel>{props.fieldtitle}</UiFieldLabel>
            <div {...props}/>
        </div>
    );
};

const UiFieldLabel = (props) => {

    return (
        <label className="ui-field__label" {...props}/>
    );
};

export const UiFieldValue = (props) => {

    return (
        <p className="ui-field__value" {...props}/>
    );
};

export const Ui = (props) => {

    return (
        <div className="" {...props}/>
    );
};