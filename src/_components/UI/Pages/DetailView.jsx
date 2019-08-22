import React from "react";
import {UiNavBar} from "../Common/UiNavBar";
import {UiNavMenuItem} from "../Common/UiNavMenuItem";
import {InstrumentIcon} from "../Common/SvgIcons";
import {UiActionWrBottom, UiMainWrap, UiPaper, UiTitleWr} from "../Common/UiMainWrap";
import {ButtonDefault, ButtonDelete} from "../OverrideMui/ButtonTypes";
import {UiFooter} from "../Common/UiFooter";

export default function DetailView() {
    return (
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
                    /"
                    45
                </UiPaper>
                <UiActionWrBottom>
                    <ButtonDefault variant="outlined" color="primary">Modify</ButtonDefault>
                    <ButtonDefault variant="contained" color="primary">Ok</ButtonDefault>
                </UiActionWrBottom>
            </UiMainWrap>

            <UiFooter/>
        </div>
    );
}