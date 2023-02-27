import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import SelectField from './SelectField';

export default function SelectRelationship() {
    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };


    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 0 }}>
            <FormControlLabel
                label={<SelectField ListDepthIconText='I' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label={<SelectField ListDepthIconText='I' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label={<SelectField ListDepthIconText='I' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label={<SelectField ListDepthIconText='I' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label={<SelectField ListDepthIconText='I' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label={<SelectField ListDepthIconText='O' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label={<SelectField ListDepthIconText='O' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label={<SelectField ListDepthIconText='O' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label={<SelectField ListDepthIconText='O' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label={<SelectField ListDepthIconText='RL' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
             <FormControlLabel
                label={<SelectField ListDepthIconText='RL' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
               label={<SelectField ListDepthIconText='RL' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
               className='selectField-render'
               control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
           />
           
           <FormControlLabel
                label={<SelectField ListDepthIconText='AL' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
                className='selectField-render'
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
               label={<SelectField ListDepthIconText='AL' listDepSup='0' listColor='FFFFFF' nodeName='Node Name' />}
               className='selectField-render'
               control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
           />
            
            
        </Box>
    );

    return (
        <div className='selectAll-div'>
            <FormControlLabel
                label="Select All"
                control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                    />
                }
            />
            {children}
        </div>
    );
}
