import React from "react";
import {UiNavBar} from "../Common/UiNavBar";
import {UiFooter} from "../Common/UiFooter";
import {UiNavMenuItem} from "../Common/UiNavMenuItem";
import {BtnIconAdd, InstrumentIcon} from "../Common/SvgIcons";
import {UiMainWrap} from "../Common/UiMainWrap";
import {ButtonDefault, ButtonDelete, ButtonSelect} from "../OverrideMui/ButtonTypes";
import UiTableGrid from "../Container/TableGrid";
import {InputDefault} from "../OverrideMui/InputTypes";

export default function DataGrid() {

    return (
        <div>
            <UiNavBar username="Admin">
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="Instruments"
                    tileDesc="Add or manage your users"/>
            </UiNavBar>

            <UiMainWrap>
                <div className="ui-title-wr clearfix">
                    <h1 className="ui-title f-left">Inventory</h1>
                    <ButtonDefault
                        variant="contained"
                        color="primary"
                        className="f-right"><BtnIconAdd className="ui-btn-icon"/>Add New</ButtonDefault>
                </div>
                <div className="ui-action-wr clearfix">
                    <InputDefault className="ui-title f-left"/>
                    <ButtonSelect className="f-right ui-btn-sm">Select</ButtonSelect>
                    <ButtonDelete className="f-right ui-btn-sm">Delete</ButtonDelete>
                </div>
                <UiTableGrid/>
            </UiMainWrap>
            <UiFooter/>
        </div>
    );
}