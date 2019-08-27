import React from "react";
import {UiNavBar} from "../Common/UiNavBar";
import {UiNavMenuItem} from "../Common/UiNavMenuItem";
import {InstrumentIcon} from "../Common/SvgIcons";
import {UiActionWrBottom, UiMainWrap, UiPaper, UiTitleWr} from "../Common/UiMainWrap";
import {ButtonDefault, ButtonDelete} from "../OverrideMui/ButtonTypes";
import {UiField, UiFieldMultipleWr, UiFieldSingleWr, UiFormTitle} from "../Common/UiFormElements";
import {UiFooter} from "../Common/UiFooter";
import {CheckboxDefault, InputDefault, OptionDefault, RadioDefault, SelectDefault} from "../OverrideMui/InputTypes";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import RadioGroup from "@material-ui/core/RadioGroup/";

export default function DetailView() {
    const [age, setAge] = React.useState('');
    const handleChange = event => {
        setAge(event.target.value);
    };

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
                    <h1 className="ui-title f-left">Add/Modify View</h1>
                    <ButtonDelete className="f-right ui-btn-sm">Delete</ButtonDelete>
                </UiTitleWr>
                <UiPaper>
                    <UiFormTitle formtitle="Modify BIN"/>
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
                        <UiField fieldtitle="Age">
                            <SelectDefault
                                selectvalue={age}
                                onChange={handleChange}
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
                        <UiField fieldtitle="Number of Cards/ Limit">
                            <RadioGroup row>
                                <FormControlLabel className="ui-field__checkbox" value="female"
                                                  control={<RadioDefault/>} label="Female"/>
                                <FormControlLabel className="ui-field__checkbox" value="male" control={<RadioDefault/>}
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
                            <InputDefault
                                placeholder="Placeholder"
                            />
                        </UiField>
                    </UiFieldMultipleWr>
                    <UiFieldSingleWr>
                        <UiField fieldtitle="Full width select">
                            <SelectDefault>
                                <OptionDefault value="x">
                                    <em>None</em>
                                </OptionDefault>
                            </SelectDefault>
                        </UiField>
                    </UiFieldSingleWr>
                </UiPaper>
                <UiActionWrBottom>
                    <ButtonDefault variant="outlined" color="primary">Cancel</ButtonDefault>
                    <ButtonDefault variant="contained" color="primary">Save</ButtonDefault>
                </UiActionWrBottom>
            </UiMainWrap>

            <UiFooter/>
        </div>
    );
}