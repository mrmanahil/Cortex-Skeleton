import React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function Attribute5() {
    
    const defaultProps = {
        options: dropdownOpt,
        getOptionLabel: (option) => option.title,
      };
    
      const flatProps = {
        options: dropdownOpt.map((option) => option.title),
      };


      const defaultProps2 = {
        options: dropdownOpt2,
        getOptionLabel: (option) => option.title,
      };
    
      const flatProps2 = {
        options: dropdownOpt2.map((option) => option.title),
      };
    
      const [value, setValue] = React.useState(null);

  return (

      
  <div className='AttributeForm '>
    <div className='max-width-500'>
      <div className='design-box position-relative'>
       
        <div className='std_form confirmoverride'>
          <FormControl fullWidth  variant="standard">
            <div className='img_text'>              
              <img src={require('../mycomp/settings.png')} alt="image" className='img_fluid' />

              <span className='textcolor'>Attribute Name</span>
            </div>
            <TextField helperText="A reference to the Attribute " id="name" label="Name"  className="white-placeholder"  variant="standard" />
          </FormControl>

          <FormControl fullWidth  variant="standard">
                    <div className='img_text'>          
                    <img src={require('../mycomp/settings.png')} alt="image" className='img_fluid' />     
                    <span className='textcolor'>User Value</span>
                    </div>
                    <Stack spacing={1} sx={{ width: 300 }}>
                        <Autocomplete
                            {...defaultProps2}
                            id="att"
                            renderInput={(params) => (
                            <TextField {...params} helperText="User Value Overrides System Value"  variant="standard" />

                            )}
                        />
                    </Stack>
                 </FormControl>

          <FormControl fullWidth  variant="standard">
            <div className='img_text'>          
            <img src={require('../mycomp/man.png')} alt="image" className='img_fluid' />     
              <span className='textcolor'>System Value </span>
            </div>
            <TextField helperText="Values Inherited from AAAAAA, BBBBBB, CCCCCC, DDDDDD, EEEEEE" label="Fixed, Manual Varifocal, Remote V..." id="name"  className="white-placeholder"   variant="standard" />
          </FormControl>


          <div className='row'>
            <div className='col-6'>
            <FormControl fullWidth  variant="standard">
                    <div className='img_text'>          
                    <img src={require('../mycomp/settings.png')} alt="image" className='img_fluid' />     
                    <span className='textcolor'>Unit</span>
                    </div>
                    <Stack spacing={1} sx={{ width: 300 }}>
                        <Autocomplete
                            {...defaultProps}
                            id="att4"
                            renderInput={(params) => (
                            <TextField {...params} helperText="Not Applicable" variant="standard" />
                            )}
                        />
                    </Stack>
                 </FormControl>


                    <div className='single_img'>
                        <img src={require('../mycomp/bin.png')} alt="image" className='img_fluid' />   
                        <img src={require('../mycomp/AttributeType.png')} alt="image" className='img_fluid' />   
                    </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  )

  
}





const dropdownOpt = [
    { title: 'Value ' },
    { title: 'Value' },
];



const dropdownOpt2 = [
    { title: 'Fixed ' },
    { title: 'Value' },
];


export default Attribute5