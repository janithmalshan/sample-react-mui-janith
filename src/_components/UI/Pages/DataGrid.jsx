import React from "react";
import {UiNavBar} from "../Common/UiNavBar";
import {UiFooter} from "../Common/UiFooter";
import {UiNavMenuItem} from "../Common/UiNavMenuItem";
import {InstrumentIcon} from "../Common/SvgIcons";
import {UiMainWrap} from "../Common/UiMainWrap";
import {ButtonAuth, ButtonDefault} from "../OverrideMui/ButtonTypes";
import UiTableGrid from "../Common/UiTableGrid";

export default function Datagrid() {

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
                <UiTableGrid/>
            </UiMainWrap>
            <UiFooter/>
        </div>
    );
}