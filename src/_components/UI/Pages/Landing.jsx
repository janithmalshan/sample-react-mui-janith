import React from "react";
import {UiNavBar} from "../Common/UiNavBar";
import {UiFooter} from "../Common/UiFooter";
import {UiNavMenuItem} from "../Common/UiNavMenuItem";
import {UiSubNavMenuItem} from "../Common/UiSubNavMenuItem";
import {
    MenuIconConfigs,
    MenuIconCustomers,
    MenuIconDeals,
    MenuIconLoyalty,
    MenuIconMerchants,
    MenuIconNotifications,
    MenuIconReports,
    MenuIconStore,
    MenuIconTransactions,
    MenuIconUsers,
    MenuIconWorkflows,
    MenuIconPlus
} from "../Common/SvgIcons";
import {UiMainWrap, UiTitleWr} from "../Common/UiMainWrap";

export default function Dashboard() {

    return (
        <div>
            <UiNavBar username="Admin">
                {/*<h1>NAVIGATION</h1>*/}
                <UiSubNavMenuItem
                    count="99,999"
                    iconUrl={<MenuIconPlus/>}
                    tileTitle="My Users"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<MenuIconStore/>}
                    tileTitle="Stores"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<MenuIconLoyalty/>}
                    tileTitle="Loyalty"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<MenuIconDeals/>}
                    tileTitle="Deals"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<MenuIconNotifications/>}
                    tileTitle="Notifications"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<MenuIconCustomers/>}
                    tileTitle="Customers"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<MenuIconReports/>}
                    tileTitle="Reports"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<MenuIconTransactions/>}
                    tileTitle="Transaction"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<MenuIconConfigs/>}
                    tileTitle="System Configs"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<MenuIconWorkflows/>}
                    tileTitle="Workflows"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<MenuIconUsers/>}
                    tileTitle="Users"
                    tileDesc="Add or manage your users"/>
                <UiNavMenuItem
                    iconUrl={<MenuIconMerchants/>}
                    tileTitle="Merchants"
                    tileDesc="Add or manage your users"/>
            </UiNavBar>

            <UiMainWrap>
                <UiTitleWr>
                    <h1 className="ui-title">Main wrapper</h1>
                </UiTitleWr>
            </UiMainWrap>
            <UiFooter/>
        </div>
    );
}