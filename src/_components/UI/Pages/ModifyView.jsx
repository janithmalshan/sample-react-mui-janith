import React from "react";
import {UiNavBar} from "../Common/UiNavBar";
import {UiNavMenuItem} from "../Common/UiNavMenuItem";
import {InstrumentIcon} from "../Common/SvgIcons";
import {UiActionWrBottom, UiMainWrap, UiPaper, UiTitleWr} from "../Common/UiMainWrap";
import {ButtonDefault, ButtonDelete} from "../OverrideMui/ButtonTypes";
import {UiField, UiFieldMultipleWr, UiFieldSingleWr, UiFieldValue, UiFormTitle} from "../Common/UiFormElements";
import {UiFooter} from "../Common/UiFooter";
import {InputAuth, InputDefault} from "../OverrideMui/InputTypes";

export default function DetailView() {
    return(
        <div>
            <UiNavBar username="Admin">
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="Instruments"
                    tileDesc="Add or manage your users"/>
            </UiNavBar>

            <UiMainWrap>
                <UiTitleWr>
                    <h1 className="ui-title f-left">Detail View</h1>
                    <ButtonDelete className="f-right ui-btn-sm">Delete</ButtonDelete>
                </UiTitleWr>
                <UiPaper>
                    <UiFormTitle formtitle="Modify BIN"/>
                    <UiFieldSingleWr>
                        <UiField fieldtitle="Issuer/ Agregator">
                            <InputDefault
                                id="email"
                                name="email"
                                placeholder="Placeholder"
                                variant="outlined"
                                // error={true}
                                // helperText="Enter valid email address"
                            />
                        </UiField>
                    </UiFieldSingleWr>
                    <UiFieldMultipleWr>
                        <UiField fieldtitle="BIN Number">
                            <InputDefault
                                id="email"
                                name="email"
                                placeholder="Placeholder"
                                variant="outlined"
                            />
                        </UiField>
                        <UiField fieldtitle="Number of Cards/ Limit">
                            <InputDefault
                                id="email"
                                name="email"
                                placeholder="Placeholder"
                                variant="outlined"
                            />
                        </UiField>
                    </UiFieldMultipleWr>
                </UiPaper>
                <UiActionWrBottom>
                    <ButtonDefault variant="outlined" color="primary">Update</ButtonDefault>
                    <ButtonDefault variant="contained" color="primary">Ok</ButtonDefault>
                </UiActionWrBottom>
            </UiMainWrap>

            <UiFooter/>
        </div>
    );
}