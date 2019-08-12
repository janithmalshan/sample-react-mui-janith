import React from "react";
import {UiNavBar} from "../Common/UiNavBar";
import {UiFooter} from "../Common/UiFooter";
import {UiNavMenuItem} from "../Common/UiNavMenuItem";
import {InstrumentIcon} from "../Common/SvgIcons";
import {UiMainWrap} from "../Common/UiMainWrap";

export default function Dashboard() {

    return (
        <div>
            <UiNavBar username="Admin">
                {/*<h1>NAVIGATION</h1>*/}
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="Instruments"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="BINs"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="Instrument Provisioning"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="Issued Instruments"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="Manufacturers"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="Fraud Alerts"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="Fraud Rules"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="Devices"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="Security"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<InstrumentIcon/>}
                    tileTitle="Products"
                    tileDesc="Add or manage your users"/>
            </UiNavBar>

            <UiMainWrap><h1>Main wrapper</h1></UiMainWrap>
            <UiFooter/>
        </div>
    );
}