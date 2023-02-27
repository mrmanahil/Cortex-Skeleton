import React from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { styled, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { TextareaAutosize } from '@mui/material';
import SelectSimple from '../selectcomponent/Select';
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

const AttributeForm = () => (
    <div className='AttributeForm'>
        <div className='max-width-516'>
            <div className='design-box position-relative'>

                <TransparentButton>
                    <CloseIcon />
                </TransparentButton>
                <div className='input-css'>
                    <FormControl variant="standard" sx={{ width: "100%" }}>

                        <div className='d-flex flex-direction-column mb-8 flex-48 color-input-white'>
                            <div className='d-flex color-blue align-items-center'>
                                <PermIdentityIcon />
                                <label className='color-blue ml-6'>Node Type*</label>
                            </div>
                            <SelectSimple />
                            <label className='text-gray'>Select a Node Type From List</label>
                        </div>

                        <div className='d-flex flex-direction-column mb-8 color-input-white'>
                            <div className='d-flex color-blue align-items-center'>
                                <PermIdentityIcon />
                                <label className='color-blue ml-6'>Node Name</label>
                            </div>
                            <InputCustomField />
                            <label className='text-gray'>Enter A Node Name</label>
                        </div>

                        <div className='d-flex mb-8 color-input-white'>
                            <div className='d-flex color-blue align-items-center'>
                                <PermIdentityIcon />
                                <label className='color-blue ml-6'>Node Description</label>
                            </div>
                            <TextareaAutosize aria-label="empty textarea" placeholder="" />
                            <label className='text-gray'>Enter a Node Description</label>
                        </div>

                        <div className='d-flex justify-content-space-between'>

                            <div className='d-flex flex-direction-column mb-8 flex-48 color-input-white'>
                                <div className='d-flex color-blue align-items-center'>
                                    <PermIdentityIcon />
                                    <label className='color-blue ml-6'>Multiplier User Value</label>
                                </div>
                                <InputCustomField />
                                <label className='text-gray'>Enter a Multiplier Value</label>
                            </div>

                            <div className='d-flex flex-direction-column mb-8 flex-48 color-input-white'>
                            </div>

                            <div className='d-flex flex-direction-column mb-8 flex-48 color-input-white'>
                                <div className='d-flex color-blue align-items-center'>
                                    <PermIdentityIcon />
                                    <label className='color-blue ml-6'>Multiplier Measure System</label>
                                </div>
                                <div className='select-css pt-0 chevron-show'>
                                    <SelectAutocomplete/>
                                </div>
                                <label className='text-gray'>Select a Measure System</label>
                            </div>

                            <div className='d-flex flex-direction-column mb-8 flex-48 color-input-white'>
                                <div className='d-flex color-blue align-items-center'>
                                    <PermIdentityIcon />
                                    <label className='color-blue ml-6'>Multiplier Unit</label>
                                </div>
                                <SelectAutocomplete/>
                                <label className='text-gray'>Select a Unit</label>
                            </div>

                        </div>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', gap: '25px' }}>
                            <LightBlueButton>Create</LightBlueButton>
                        </Box>

                    </FormControl>

                </div>

            </div>
        </div>
    </div>
);

export default AttributeForm