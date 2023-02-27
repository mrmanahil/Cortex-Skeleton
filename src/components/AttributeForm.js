import React from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { styled, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import Checkbox from '@mui/material/Checkbox';
import SelectAutocomplete from '../selectcomponent/SelectAutoComplete';
import InputCustomField from '../selectcomponent/InputCustomField';
import '../App.css';


const LightBlueButton = styled(Button)({
    backgroundColor: "var(--textcolor)",
    borderRadius: 8,
    textTransform: 'capitalize',
    minWidth: '150px',
    color: 'var(--bgcolor)',
    fontSize: '16px',
    padding: '5px 8px',
    lineHeight: '19px',
    "&:hover": {
        backgroundColor: "#fff",
    }
});

const TransparentButton = styled(Button)({
    backgroundColor: "transparent",
    minWidth: 'fit-content',
    color: '#fff',
    padding: '0px',
    position: 'absolute',
    right: '8px',
    top: '8px',
    zIndex: '1',
    "&:hover": {
        backgroundColor: "#fff",
        color: "var(--bgcolor)",
    }
});

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AttributeForm = () => (
    <div className='AttributeForm'>
        <div className='max-width-516'>
            <div className='design-box position-relative'>
                <TransparentButton>
                    <CloseIcon />
                </TransparentButton>
                <div className='input-css'>
                    <FormControl variant="standard" sx={{ width: "100%" }}>

                        <div className='d-flex flex-direction-column mb-8 color-input-white'>
                            <div className='d-flex color-blue align-items-center'>
                                <SettingsIcon />
                                <label className='color-blue ml-6'>Attribute Name</label>
                            </div>
                            <InputCustomField />
                            <label className='text-gray'>A reference to the Attribute</label>
                        </div>

                        <div className='d-flex flex-direction-column mb-8 color-input-white'>
                            <div className='d-flex color-blue align-items-center'>
                                <PermIdentityIcon />
                                <label className='color-blue ml-6'>Attribute Variable Name</label>
                            </div>
                            <InputCustomField />
                            <label className='text-gray'>A reference to the Attribute</label>
                        </div>

                        <div className='d-flex flex-direction-column mb-8 color-input-white'>
                            <div className='d-flex color-blue align-items-center'>
                                <PermIdentityIcon />
                                <label className='color-blue ml-6'>User Value</label>
                            </div>
                            <InputCustomField />
                            <label className='text-gray'>Enter a value (optional)</label>
                        </div>

                        <div className='d-flex justify-content-space-between'>

                            <div className='d-flex flex-direction-column mb-8 flex-48 color-input-white'>
                                <div className='d-flex color-blue align-items-center'>
                                    <PermIdentityIcon />
                                    <label className='color-blue ml-6'>User Min Value</label>
                                </div>
                                <InputCustomField />
                                <label className='text-gray'>Enter a value (optional)</label>
                            </div>
                            <div className='d-flex flex-direction-column mb-8 flex-48 color-input-white'>
                                <div className='d-flex color-blue align-items-center'>
                                    <PermIdentityIcon />
                                    <label className='color-blue ml-6'>User Value</label>
                                </div>
                                <div className='select-css pt-0 chevron-show'>
                                    <SelectAutocomplete />
                                </div>
                                <label className='text-gray'>Enter a value (optional)</label>
                            </div>
                            <div className='d-flex flex-direction-column mb-8 flex-48 color-input-white'>
                                <div className='d-flex color-blue align-items-center'>
                                    <PermIdentityIcon />
                                    <label className='color-blue ml-6'>User Max Value</label>
                                </div>
                                <InputCustomField />
                                <label className='text-gray'>Enter a value (optional)</label>
                            </div>

                        </div>

                        <div className='checkboxpages'>
                            <div className='checkboxstyling-parent'>
                                <div className='checkboxstyling'>
                                    <Checkbox
                                        id='checkbox-1'
                                        {...label}
                                        defaultChecked
                                        sx={{
                                            color: 'var(--textcolor)',
                                            '&.Mui-checked': {
                                                color: 'var(--textcolor)',
                                            },
                                        }}
                                    />
                                </div>
                                <label for="checkbox-1" className='color-blue label-checkbox ml-10'>Use in Formulas</label>
                            </div>
                            <div className='checkboxstyling-parent ml-20'>
                                <div className='checkboxstyling'>
                                    <Checkbox
                                        id='checkbox-2'
                                        {...label}
                                        defaultChecked
                                        sx={{
                                            color: 'var(--textcolor)',
                                            '&.Mui-checked': {
                                                color: 'var(--textcolor)',
                                            },
                                        }}
                                    />
                                </div>
                                <label for="checkbox-2" className='color-blue label-checkbox ml-10'>Use in Formulas</label>
                            </div>
                        </div>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', gap: '25px' , flexFlow: 'wrap' }}>                    <LightBlueButton>Insert</LightBlueButton>
                        </Box>
                    </FormControl>

                </div>

            </div>
        </div>
    </div>
);

export default AttributeForm