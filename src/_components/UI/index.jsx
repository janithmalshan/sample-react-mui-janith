import React from 'react';
import Grid from "@material-ui/core/Grid";
import SignInLeft from "./Container/SignInLeft";
import {UiAlertContentWrapper} from "./Common/UiAlert";
import {ButtonAuth, ButtonDefault, ButtonDelete, ButtonSelect} from "./OverrideMui/ButtonTypes";
import Snackbar from "@material-ui/core/Snackbar";
import {
    BtnIconAdd,
    CheckBoxIcon,
    CheckBoxOutlineBlankIcon,
    IconLock,
    IconMerchants,
    InstrumentIcon,
    MenuIconClose,
    MenuIconConfigs,
    MenuIconCustomers,
    MenuIconDeals,
    MenuIconLoyalty,
    MenuIconMerchants,
    MenuIconNotifications,
    MenuIconOpen,
    MenuIconReports,
    MenuIconStore,
    MenuIconTransactions,
    MenuIconUsers,
    MenuIconWorkflows
} from "./Common/SvgIcons";
import {UiActionWrBottom, UiMainWrap, UiPaper, UiTitleWr} from "./Common/UiMainWrap";
import {UiField, UiFieldMultipleWr, UiFieldSingleWr, UiFieldValue, UiFormTitle} from "./Common/UiFormElements";
import {
    CheckboxDefault,
    CheckboxWithInput,
    InputDefault,
    InputWithButton,
    OptionDefault,
    RadioDefault,
    SelectDefault
} from "./OverrideMui/InputTypes";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import UiTableGrid from "./Container/TableGrid";
import {UiTab, UiTabs} from "./Common/UiTabs";
import {UiDialog, UiDialogConfirm} from "./Common/UIDialog";
import {UiTreeItem, UiTreeView} from "./Common/UiTreeView";
import IconTreePackage from "../../../styles/img/ic_tree_package.svg"
import IconTreeModule from "../../../styles/img/ic_tree_module.svg"
import IconTreeLayout from "../../../styles/img/ic_tree_layout.svg"

export default function SignInSide() {

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    function handleClick() {
        setOpen(true);
    }

    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    function handleClickConfirm() {
        setOpen1(true);
    }

    function handleCloseConfirm() {
        setOpen1(false);
    }

    function handleClickPop() {
        setOpen2(true);
    }

    function handleClosePop() {
        setOpen2(false);
    }

    return (
        <Grid component="main">
            <SignInLeft/>
            <UiMainWrap>

                <div className="block ui-action-wr">
                    <ButtonDelete><a href={"/login"}>login</a></ButtonDelete>
                    <ButtonDelete><a href={"/register"}>register</a></ButtonDelete>
                    <ButtonDelete><a href={"/dashboard"}>dashboard</a></ButtonDelete>
                    <ButtonDelete><a href={"/datagrid"}>datagrid</a></ButtonDelete>
                    <ButtonDelete><a href={"/detail"}>detail view</a></ButtonDelete>
                    <ButtonDelete><a href={"/modify"}>modify view</a></ButtonDelete>
                    <ButtonDelete><a href={"/forgot"}>forgot password</a></ButtonDelete>
                    <ButtonDelete><a href={"/newpw"}>new password</a></ButtonDelete>
                </div>

                <div className="block ui-action-wr">
                    <h2>Buttons</h2>
                    <ButtonAuth
                        variant="contained"
                        color="primary">Authenticate Primary</ButtonAuth>
                    <ButtonAuth
                        variant="outlined"
                        color="primary">Authenticate Primary Stroked</ButtonAuth>
                    <ButtonDefault
                        variant="contained"
                        color="primary">Default Primary</ButtonDefault>
                    <ButtonDefault
                        variant="outlined"
                        color="primary">Default Primary Stroked</ButtonDefault>
                    <ButtonDefault
                        variant="contained"
                        color="primary"
                        className="ui-img-btn"><BtnIconAdd className="ui-btn-icon"/>Add New</ButtonDefault>
                    <ButtonDelete>Delete</ButtonDelete>
                    <ButtonSelect>Delete</ButtonSelect>
                </div>

                <div className="block ui-svg-set">
                    <h2>Svg Icons</h2>
                    <MenuIconOpen/><MenuIconClose/><IconLock/>
                    <CheckBoxOutlineBlankIcon/><CheckBoxIcon/><InstrumentIcon/>
                    <MenuIconStore/><MenuIconLoyalty/><MenuIconDeals/><MenuIconNotifications/><MenuIconCustomers/><MenuIconReports/>
                    <MenuIconTransactions/><MenuIconConfigs/><MenuIconWorkflows/><MenuIconUsers/><MenuIconMerchants/>
                    <InstrumentIcon/>
                </div>

                <div className="block ui-action-wr">
                    <h2>Dialog</h2>
                    <ButtonDefault variant="outlined" color="primary" onClick={handleClickConfirm}>
                        Open confirm dialog
                    </ButtonDefault>
                    <ButtonDefault variant="outlined" color="primary" onClick={handleClickPop}>
                        Open form dialog
                    </ButtonDefault>
                    <UiDialogConfirm open={open1} onClose={handleCloseConfirm} uiTitle="Delete">
                        <p className="ui-text">Are you sure you want to delete this?</p>
                    </UiDialogConfirm>
                    <UiDialog open={open2} onClose={handleClosePop} uiTitle="Modify BIN">
                        <UiFieldSingleWr>
                            <UiField fieldtitle="Issuer/ Agregator">
                                <InputDefault
                                    id="email"
                                    name="email"
                                    placeholder="Multi Line Input Placeholder"
                                    multiline
                                />
                            </UiField>
                        </UiFieldSingleWr>
                        <UiFieldMultipleWr>
                            <UiField fieldtitle="BIN Number">
                                <InputDefault
                                    placeholder="Placeholder"
                                    error={true}
                                    helperText="Enter valid BIN number"
                                />
                            </UiField>
                            <UiField fieldtitle="Number of Cards/ Limit">
                                <SelectDefault
                                    name="name"
                                    id="name"
                                >
                                    <OptionDefault value="">
                                        <em>None</em>
                                    </OptionDefault>
                                    <OptionDefault value={10}>Ten</OptionDefault>
                                    <OptionDefault value={20}>Twenty</OptionDefault>
                                    <OptionDefault value={30}>Thirty</OptionDefault>
                                </SelectDefault>
                            </UiField>
                        </UiFieldMultipleWr>
                    </UiDialog>
                </div>
                <UiTitleWr>
                    <h1 className="ui-title f-left ui-title-with-btn">
                        Detail View
                        <ButtonDefault className="title-button" variant="contained" color="primary">Ok</ButtonDefault>
                        <ButtonDefault className="title-button" variant="outlined" color="primary">Modify</ButtonDefault>
                    </h1>
                    <ButtonDelete className="f-right ui-btn-sm">Delete </ButtonDelete>
                </UiTitleWr>
                <UiPaper>
                    <UiFieldSingleWr>
                        <UiField fieldtitle="Issuer/ Agregator">
                            <UiFieldValue>9092 2999</UiFieldValue>
                        </UiField>
                    </UiFieldSingleWr>
                    <UiFieldMultipleWr>
                        <UiField fieldtitle="BIN Number">
                            <UiFieldValue>9092 2999</UiFieldValue>
                        </UiField>
                        <UiField fieldtitle="Number of Cards/ Limit">
                            <UiFieldValue>9092 2999</UiFieldValue>
                        </UiField>
                    </UiFieldMultipleWr>
                </UiPaper>
                <UiActionWrBottom>
                    <ButtonDefault variant="outlined" color="primary">Modify</ButtonDefault>
                    <ButtonDefault variant="contained" color="primary">Ok</ButtonDefault>
                </UiActionWrBottom>

                <UiPaper>
                    <UiFormTitle formtitle="Modify BIN"/>
                    <UiFieldSingleWr>
                        <UiField fieldtitle="Issuer/ Agregator" required>
                            <InputDefault
                                required
                                id="email"
                                name="email"
                                placeholder="Multi Line Input Placeholder"
                                multiline
                            />
                        </UiField>
                    </UiFieldSingleWr>
                    <UiFieldSingleWr>
                        <UiField fieldtitle="Generate Key">
                            <InputWithButton
                                id="key"
                                name="key"
                                buttonText="Generate"
                                placeholder="Placeholder"
                            />
                        </UiField>
                    </UiFieldSingleWr>
                    <UiFieldSingleWr>
                        <UiField fieldtitle="Number of Cards/ Limit">
                            <FormGroup row>
                                <FormControlLabel
                                    className="ui-field__checkbox"
                                    control={
                                        <CheckboxDefault/>
                                    }
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    className="ui-field__checkbox"
                                    control={
                                        <CheckboxDefault/>
                                    }
                                    label="SID"
                                />
                                <FormControlLabel
                                    className="ui-field__checkbox"
                                    control={
                                        <CheckboxDefault/>
                                    }
                                    label="BT Num"
                                />
                            </FormGroup>
                        </UiField>
                    </UiFieldSingleWr>
                    <UiFieldSingleWr>
                        <UiField fieldtitle="Vertical Checkbox">
                            <div className="ui-field__checkbox-with-input_wrap">
                                <FormControlLabel
                                    className="ui-field__checkbox-with-input"
                                    control={
                                        <CheckboxDefault/>
                                    }
                                    label="Secondary"
                                />
                                <InputDefault/>
                            </div>
                        </UiField>
                    </UiFieldSingleWr>
                    <UiFieldSingleWr>
                        <UiField fieldtitle="Number of Cards/ Limit">
                            <RadioGroup row>
                                <FormControlLabel className="ui-field__checkbox" value="female"
                                                  control={<RadioDefault/>} label="Female"/>
                                <FormControlLabel className="ui-field__checkbox" value="male"
                                                  control={<RadioDefault/>}
                                                  label="Male"/>
                            </RadioGroup>
                        </UiField>
                    </UiFieldSingleWr>
                    <UiFieldMultipleWr>
                        <UiField fieldtitle="BIN Number">
                            <InputDefault
                                placeholder="Placeholder"
                                error={true}
                                helperText="Enter valid BIN number"
                            />
                        </UiField>
                        <UiField fieldtitle="Number of Cards/ Limit">
                            <SelectDefault
                                name="name"
                                id="name"
                                selectvalue=""
                            >
                                <OptionDefault value={0}>
                                    <em>None</em>
                                </OptionDefault>
                                <OptionDefault value={10}>Ten</OptionDefault>
                                <OptionDefault value={20}>Twenty</OptionDefault>
                                <OptionDefault value={30}>Thirty</OptionDefault>
                            </SelectDefault>
                        </UiField>
                    </UiFieldMultipleWr>
                    <UiFieldSingleWr>
                        <UiField fieldtitle="Full width select">
                            <SelectDefault  selectvalue="">
                                <OptionDefault value="x">
                                    <em>None</em>
                                </OptionDefault>
                            </SelectDefault>
                        </UiField>
                    </UiFieldSingleWr>
                </UiPaper>

                <UiPaper>
                    <div className="ui-tab">
                        <UiTabs>
                            <UiTab label="Card Details"/>
                            <UiTab label="Card Limits"/>
                            <UiTab label="Preview"/>
                        </UiTabs>
                    </div>
                </UiPaper>

                <UiTableGrid/>

                <UiTreeView>
                    <UiTreeItem nodeId="1" labelText="All Mail" labelIcon={IconTreePackage}>
                        <UiTreeItem nodeId="2" labelText="Calendar" labelIcon={IconTreeModule}/>
                        <UiTreeItem nodeId="3" labelText="Chrome" labelIcon={IconTreeModule}/>
                        <UiTreeItem nodeId="4" labelText="123456" labelIcon={IconTreeModule}/>
                    </UiTreeItem>
                    <UiTreeItem nodeId="5" labelText="Documents" labelIcon={IconTreePackage}>
                        <UiTreeItem nodeId="7" labelText="src" labelIcon={IconTreeModule}>
                            <UiTreeItem nodeId="8" labelText="index.js" labelIcon={IconTreeLayout}/>
                            <UiTreeItem nodeId="9" labelText="tree-view.js" labelIcon={IconTreeLayout}/>
                        </UiTreeItem>
                        <UiTreeItem nodeId="6" labelText="Material-UI" labelIcon={IconTreeModule}>
                            <UiTreeItem nodeId="8" labelText="index.js" labelIcon={IconTreeLayout}/>
                            <UiTreeItem nodeId="9" labelText="tree-view.js" labelIcon={IconTreeLayout}/>
                        </UiTreeItem>
                    </UiTreeItem>
                </UiTreeView>
            </UiMainWrap>

            <ButtonAuth
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                open alert
            </ButtonAuth>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <UiAlertContentWrapper
                    onClose={handleClose}
                    variant="success"
                    message="This is a success message!"
                />
            </Snackbar>

            <div>
                <UiAlertContentWrapper
                    variant="error"
                    // className={classes.margin}
                    message="This is an error message!"
                />
                <UiAlertContentWrapper
                    variant="warning"
                    // className={classes.margin}
                    message="This is a warning message!"
                />
                <UiAlertContentWrapper
                    variant="info"
                    // className={classes.margin}
                    message="This is an information message!"
                />
                <UiAlertContentWrapper
                    variant="success"
                    // className={classes.margin}
                    message="This is a success message!"
                />
            </div>
        </Grid>
    );
}
