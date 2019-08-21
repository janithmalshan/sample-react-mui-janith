import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    rootSvgNavMenuIcon: {
        width: 50,
        height: 50,
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
            <path fill="#FFF" fillRule="nonzero" d="M11.667 6.158h-1V4.789C10.667 2.15 8.573 0 6 0S1.333 2.149 1.333 4.79v1.368h-1A.338.338 0 0 0 0 6.5v8.553c0 .754.598 1.368 1.333 1.368h9.334c.735 0 1.333-.614 1.333-1.368V6.5c0-.19-.15-.342-.333-.342zm-4.669 7.146a.349.349 0 0 1-.083.266.33.33 0 0 1-.248.114H5.333a.33.33 0 0 1-.248-.114.349.349 0 0 1-.083-.266l.21-1.94a1.365 1.365 0 0 1-.545-1.1c0-.756.598-1.37 1.333-1.37s1.333.614 1.333 1.37c0 .442-.204.845-.545 1.1l.21 1.94zm1.669-7.146H3.333V4.789C3.333 3.28 4.53 2.053 6 2.053c1.47 0 2.667 1.227 2.667 2.736v1.369z"/>
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