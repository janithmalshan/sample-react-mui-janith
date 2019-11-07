import React from "react";
import UiCustomMoreButton from "./UiCustomMoreButton";

export const UiFormWr = (props) => {

    return (
        <form className="ui-form" {...props}/>
    );
};

export const UiFormTitle = (props) => {

    return (
        <div className="ui-form__title">{props.formtitle}
            <div className="ui-button__more_wrap">
                <UiCustomMoreButton
                    className="ui-button__more"
                    items={['one','two','three']}
                />
            </div>
        </div>
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
    if (props.required) {
        return (
            <div className="ui-field">
                <UiFieldLabel>{props.fieldtitle} <span className="ui-field__required-star">*</span> </UiFieldLabel>
                <div {...props}/>
            </div>
        );
    } else {
        return (
            <div className="ui-field">
                <UiFieldLabel>{props.fieldtitle}</UiFieldLabel>
                <div {...props}/>
            </div>
        );
    }
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