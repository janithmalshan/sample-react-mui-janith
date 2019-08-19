import React from "react";
import {UiNavBar} from "../Common/UiNavBar";
import {UiFooter} from "../Common/UiFooter";
import {UiNavMenuItem} from "../Common/UiNavMenuItem";
import {InstrumentIcon} from "../Common/SvgIcons";
import {UiMainWrap} from "../Common/UiMainWrap";
import {ButtonDefault} from "../OverrideMui/ButtonTypes";
import UiTableGrid from "../Container/TableGrid";

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
                        className="f-right">Add New</ButtonDefault>
                </div>
                {/*<div className="ui-action-wr clearfix">
                    <InputDefault className="ui-title f-left"/>
                    <ButtonDefault
                        variant="outlined"
                        color="primary"
                        className="f-right">Delete</ButtonDefault>
                    <ButtonDefault
                        variant="outlined"
                        color="primary"
                        className="f-right">Delete</ButtonDefault>
                </div>*/}
                <UiTableGrid/>
            </UiMainWrap>
            <UiFooter/>
        </div>
    );
}