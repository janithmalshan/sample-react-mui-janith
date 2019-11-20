import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';
import {makeStyles} from "@material-ui/core/styles";
import IconStore from "../../../../styles/img/ic_menu_store.svg"
import IconLoyalty from "../../../../styles/img/ic_menu_loyalty.svg"
import IconDeals from "../../../../styles/img/ic_menu_deals.svg"
import IconNotifications from "../../../../styles/img/ic_menu_notifications.svg"
import IconCustomers from "../../../../styles/img/ic_menu_customers.svg"
import IconReports from "../../../../styles/img/ic_menu_reports.svg"
import IconTransactions from "../../../../styles/img/ic_menu_transactions.svg"
import IconConfigs from "../../../../styles/img/ic_menu_system_configs.svg"
import IconWorkflows from "../../../../styles/img/ic_menu_workflows.svg"
import IconUsers from "../../../../styles/img/ic_menu_users.svg"
import IconMerchants from "../../../../styles/img/ic_menu_merchants.svg"

const useStyles = makeStyles({
    rootSvgNavMenuIcon: {
        width: 100,
        height: 100,
        //viewBox="0 0 50 50" could not resize
    }
});
export const HomeIcon = () => {
    return (
        <SvgIcon viewBox="0 0 24 24">
            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
        </SvgIcon>
    );
};
export const MenuIconOpen = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22">
            <g fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="square" strokeWidth="3">
                <path d="M2 2.352h18.029M2 11.352h18.029M2 20.352h18.029"/>
            </g>
        </svg>
    );
};
export const MenuIconClose = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18">
            <g fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="square" strokeWidth="3">
                <path d="M2.782 2.782l12.749 12.749M2.782 15.53L15.531 2.783"/>
            </g>
        </svg>
    );
};
export const IconLock = () => {
    return (
        <svg width="12" height="17" viewBox="0 0 12 17">
            <path fill="#FFF" fillRule="nonzero"
                  d="M11.667 6.158h-1V4.789C10.667 2.15 8.573 0 6 0S1.333 2.149 1.333 4.79v1.368h-1A.338.338 0 0 0 0 6.5v8.553c0 .754.598 1.368 1.333 1.368h9.334c.735 0 1.333-.614 1.333-1.368V6.5c0-.19-.15-.342-.333-.342zm-4.669 7.146a.349.349 0 0 1-.083.266.33.33 0 0 1-.248.114H5.333a.33.33 0 0 1-.248-.114.349.349 0 0 1-.083-.266l.21-1.94a1.365 1.365 0 0 1-.545-1.1c0-.756.598-1.37 1.333-1.37s1.333.614 1.333 1.37c0 .442-.204.845-.545 1.1l.21 1.94zm1.669-7.146H3.333V4.789C3.333 3.28 4.53 2.053 6 2.053c1.47 0 2.667 1.227 2.667 2.736v1.369z"/>
        </svg>
    );
};
export const BtnIconAdd = (props) => {
    return (
        <svg {...props} width="15" height="14" viewBox="0 0 15 14">
            <g fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="square" strokeWidth="2">
                <path d="M13.5 7h-12M7.5 1v12"/>
            </g>
        </svg>
    );
};
export const CheckBoxOutlineBlankIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#FFF" fillRule="evenodd" stroke="#B0B6C1"
                  d="M4 1h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3z"/>
        </svg>
    );
};
export const CheckBoxIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18">
            <g fill="none" fillRule="evenodd">
                <path fill="#6764FF" stroke="#4B49C0"
                      d="M4 1h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3z"/>
                <path stroke="#FFF" strokeWidth="1.5" d="M5 8.725l2.749 2.685L13.159 6"/>
            </g>
        </svg>
    );
};
export const InstrumentIcon = () => {
    const classes = useStyles();
    return (
        <SvgIcon viewBox="0 0 50 50" className={classes.rootSvgNavMenuIcon}>
            <g fill="none" fillRule="evenodd">
                <path d="M0-9h50v50H0z"/>
                <g strokeWidth="2">
                    <path stroke="#6764FF" strokeLinecap="round" strokeLinejoin="round"
                          d="M3 1h44a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM8.4 10.03l39.03-.06"/>
                    <path stroke="#F9904E" strokeLinecap="round" strokeLinejoin="round" d="M8.4 21.03l11.43-.06"/>
                    <path stroke="#F9904E" d="M35.8 23.4a3 3 0 1 1 0-4.8 3 3 0 1 1 0 4.8z"/>
                </g>
            </g>
        </SvgIcon>
    );
};
export const MenuIconStore = () => {
    const classes = useStyles();
    return (
        <img src={IconStore} className={classes.rootSvgNavMenuIcon}/>
    );
};
export const MenuIconLoyalty = () => {
    const classes = useStyles();
    return (
        <img src={IconLoyalty} className={classes.rootSvgNavMenuIcon}/>
    );
};
export const MenuIconDeals = () => {
    const classes = useStyles();
    return (
        <img src={IconDeals} className={classes.rootSvgNavMenuIcon}/>
    );
};
export const MenuIconNotifications = () => {
    const classes = useStyles();
    return (
        <img src={IconNotifications} className={classes.rootSvgNavMenuIcon}/>
    );
};
export const MenuIconCustomers = () => {
    const classes = useStyles();
    return (
        <img src={IconCustomers} className={classes.rootSvgNavMenuIcon}/>
    );
};
export const MenuIconReports = () => {
    const classes = useStyles();
    return (
        <img src={IconReports} className={classes.rootSvgNavMenuIcon}/>
    );
};
export const MenuIconTransactions = () => {
    const classes = useStyles();
    return (
        <img src={IconTransactions} className={classes.rootSvgNavMenuIcon}/>
    );
};
export const MenuIconConfigs = () => {
    const classes = useStyles();
    return (
        <img src={IconConfigs} className={classes.rootSvgNavMenuIcon}/>
    );
};
export const MenuIconWorkflows = () => {
    const classes = useStyles();
    return (
        <img src={IconWorkflows} className={classes.rootSvgNavMenuIcon}/>
    );
};
export const MenuIconUsers = () => {
    const classes = useStyles();
    return (
        <img src={IconUsers} className={classes.rootSvgNavMenuIcon}/>
    );
};
export const MenuIconMerchants = () => {
    const classes = useStyles();
    return (
        <img src={IconMerchants} className={classes.rootSvgNavMenuIcon}/>
    );
};
export const TreeIconClose = () => {
    return (
        <svg width="11" height="8" viewBox="0 0 11 8">
            <path fill="none" fillRule="evenodd" stroke="#6764FF" strokeWidth="2" d="M1 7.4L5.5 2 10 7.4"/>
        </svg>
    );
};
export const TreeIconOpen = () => {
    return (
        <svg width="11" height="8" viewBox="0 0 11 8">
            <path fill="none" fillRule="evenodd" stroke="#8C95A8" strokeWidth="2" d="M10 1L5.5 6.4 1 1"/>
        </svg>
    );
};
export const MenuIconPlus = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.1666 10.1666H10.1666V17.1666H7.83325V10.1666H0.833252V7.83325H7.83325V0.833252H10.1666V7.83325H17.1666V10.1666Z"
                fill="#8E8E93"/>
        </svg>
    );
};
export const ButtonIconMore = () => {
    return (
        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.99984 4.33317C3.01275 4.33317 3.83317 3.51275 3.83317 2.49984C3.83317 1.48692 3.01275 0.666504 1.99984 0.666504C0.98692 0.666504 0.166504 1.48692 0.166504 2.49984C0.166504 3.51275 0.98692 4.33317 1.99984 4.33317ZM1.99984 6.1665C0.98692 6.1665 0.166504 6.98692 0.166504 7.99984C0.166504 9.01275 0.98692 9.83317 1.99984 9.83317C3.01275 9.83317 3.83317 9.01275 3.83317 7.99984C3.83317 6.98692 3.01275 6.1665 1.99984 6.1665ZM1.99984 11.6665C0.98692 11.6665 0.166504 12.4869 0.166504 13.4998C0.166504 14.5128 0.98692 15.3332 1.99984 15.3332C3.01275 15.3332 3.83317 14.5128 3.83317 13.4998C3.83317 12.4869 3.01275 11.6665 1.99984 11.6665Z"
                fill="white"/>
        </svg>
    );
};
export const ButtonIconSearch = () => {
    return (
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.4858 10.4858L13.9997 13.9999L10.4858 10.4858ZM11.9798 6.48988C11.9798 9.52192 9.52192 11.9798 6.48988 11.9798C3.45784 11.9798 1 9.52192 1 6.48988C1 3.45804 3.45784 1 6.48988 1C9.52192 1 11.9798 3.45804 11.9798 6.48988Z"
                      stroke="#8C95A8" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="15" height="14" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};
