import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../App.css';
// import Radio from '@mui/material/Radio';
// import { FormControlLabel } from '@mui/material';
// import { styled } from '@mui/material';

export default function SelectVariants() {
    const [items, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    // const RadioButtonsCustom = styled(Radio)({
    //     color: '#fff',
    //     "&.Mui-checked": {
    //         color: "var(--bgcolor)",
    //     }
    // });

    return (

        <div className='select-css-select-simple w-100'>
            <Select className='list-items-parent'
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={items}
                onChange={handleChange}
                sx={{ width: "100%", margin: "0px" }}
                InputLabelProps={{ shrink: false }}
            >
                <MenuItem className='mune-item-50' value={10}>
                    {/* <FormControlLabel value="Intent - Subject" control={<RadioButtonsCustom />} label="Intent - Subject" /> */}
                    <div className='itemslistradio'>
                        <span className='radio-btn'></span>
                        <p>Intent - Subject</p>
                    </div>
                </MenuItem>
                <MenuItem className='mune-item-50' value={20}>
                    {/* <FormControlLabel value="Intent - Activity" control={<RadioButtonsCustom />} label="Intent - Activity" /> */}
                    <div className='itemslistradio'>
                        <span className='radio-btn'></span>
                        <p>Intent - Activity</p>
                    </div>
                </MenuItem>
                <MenuItem className='mune-item-50' value={30}>
                    {/* <FormControlLabel value="Intent - Outcome" control={<RadioButtonsCustom />} label="Intent - Outcome" /> */}
                    <div className='itemslistradio'>
                        <span className='radio-btn'></span>
                        <p>Intent - Outcome</p>
                    </div>
                </MenuItem>
                <MenuItem className='mune-item-50' value={40}>
                    {/* <FormControlLabel value="Object" control={<RadioButtonsCustom />} label="Object" /> */}
                    <div className='itemslistradio'>
                        <span className='radio-btn'></span>
                        <p>Intent - Object</p>
                    </div>
                </MenuItem>
                <MenuItem className='mune-item-50' value={50}>
                    {/* <FormControlLabel value="Product" control={<RadioButtonsCustom />} label="Product" /> */}
                    <div className='itemslistradio'>
                        <span className='radio-btn'></span>
                        <p>Product</p>
                    </div>
                </MenuItem>
                <MenuItem className='mune-item-50' value={60}>
                    {/* <FormControlLabel value="Relative Location" control={<RadioButtonsCustom />} label="Relative Location" /> */}
                    <div className='itemslistradio'>
                        <span className='radio-btn'></span>
                        <p>Relative Location</p>
                    </div>
                </MenuItem>
                <MenuItem className='mune-item-50' value={70}>
                    {/* <FormControlLabel value="Absolute Location" control={<RadioButtonsCustom />} label="Absolute Location" /> */}
                    <div className='itemslistradio'>
                        <span className='radio-btn'></span>
                        <p>Absolute Location</p>
                    </div>
                </MenuItem>
                <MenuItem className='mune-item-50' value={80}>
                    {/* <FormControlLabel value="Utility" control={<RadioButtonsCustom />} label="Utility" /> */}
                    <div className='itemslistradio'>
                        <span className='radio-btn'></span>
                        <p>Utility</p>
                    </div>
                </MenuItem>
                <MenuItem className='mune-item-50' value={90}>
                    {/* <FormControlLabel value="Network" control={<RadioButtonsCustom />} label="Network" /> */}
                    <div className='itemslistradio'>
                        <span className='radio-btn'></span>
                        <p>Network</p>
                    </div>
                </MenuItem>
                <MenuItem className='mune-item-50' value={100}>
                    {/* <FormControlLabel value="Environment" control={<RadioButtonsCustom />} label="Environment" /> */}
                    <div className='itemslistradio'>
                        <span className='radio-btn'></span>
                        <p>Environment</p>
                    </div>
                </MenuItem>
            </Select>
        </div>

    );
}
