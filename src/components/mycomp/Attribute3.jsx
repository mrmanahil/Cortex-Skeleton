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


function Attribute3() {
    
    const defaultProps = {
        options: dropdownOpt,
        getOptionLabel: (option) => option.title,
      };
    
      const flatProps = {
        options: dropdownOpt.map((option) => option.title),
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
            <img src={require('../mycomp/man.png')} alt="image" className='img_fluid' />     
              <span className='textcolor'>Variable Name</span>
            </div>
            <TextField helperText="A reference to the Attribute that is used in Formulas and Multipliers " id="name"  className="white-placeholder"   variant="standard" />
          </FormControl>
          <div className='row'>
            <div className='col-6'>
                <FormControl   variant="standard">
                    <div className='img_text'>               
                    <img src={require('../mycomp/settings.png')} alt="image" className='img_fluid' />     
                    <span className='textcolor'>Min Value</span>
                    </div>
                    <TextField id="name"  label="0"  className="white-placeholder" helperText="Value Inherited from "   variant="standard" />
                </FormControl>

                <FormControl   variant="standard">
                    <div className='img_text'>     
                    <img src={require('../mycomp/settings.png')} alt="image" className='img_fluid' />               
                    <span className='textcolor'>System Value</span>
                    </div>
                    <TextField id="name"  helperText="Calculated Value"  label="12.5"  className="white-placeholder"   variant="standard" />
                </FormControl>

                <FormControl   variant="standard">
                    <div className='img_text'>        
                    <img src={require('../mycomp/settings.png')} alt="image" className='img_fluid' />             
                    <span className='textcolor'>Max Value</span>
                    </div>
                    <TextField id="name"  className="white-placeholder"  variant="standard"  helperText="Value Inherited from AAAAAA"  label="360" />
                </FormControl>
                    <div className='single_img'>
                        <img src={require('../mycomp/bin.png')} alt="image" className='img_fluid' />   
                    </div>
            </div>


            <div className='col-6'>
                <FormControl fullWidth  variant="standard">
                    <div className='img_text'>          
                    <img src={require('../mycomp/settings.png')} alt="image" className='img_fluid' />     
                    <span className='textcolor'>Unit</span>
                    </div>
                    <Stack spacing={1} sx={{ width: 300 }}>
                        <Autocomplete
                            {...defaultProps}
                            id="clear-on-escape"
                            renderInput={(params) => (
                            <TextField {...params} helperText="Measure of Angle" variant="standard" />
                            )}
                        />
                    </Stack>
                 </FormControl>


                 <FormControl fullWidth  variant="standard">
                    <div className='img_text '>          
                    <img src={require('../mycomp/man.png')} alt="image" className='img_fluid' />     
                    <span className='textcolor'>User Value</span>
                    </div>
                    <TextField helperText="Overrides other values" id="name" label="Value"  className="white-placeholder m-0"   variant="standard" />
                </FormControl>
{/* 
                    <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Use in Multiplier" />              
                    </FormGroup>

                    <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Use in Aggregators" />           
                    </FormGroup>
                    
                    <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Use in Formulas" />           
                    </FormGroup> */}
                       <Grid item xs="6" lg="6">
                    <item>
                        <div class="checkbox-new">
                            <input id="Multiplier" type="checkbox" value="" class="d-none border border-color-blue rounded h-8 w-8" required="" />
                            <label for="Multiplier" class="custom-checkbox color-text-blue font-medium text-xxl">Use in Multiplier</label>
                        </div>

                        <div class="checkbox-new">
                            <input id="Aggregators" type="checkbox" value="" class="d-none border border-color-blue rounded h-8 w-8" required="" />
                            <label for="Aggregators" class="custom-checkbox color-text-blue font-medium text-xxl">Use in Aggregators</label>
                        </div>

                        <div class="checkbox-new">
                            <input id="Formulas" type="checkbox" value="" class="d-none border border-color-blue rounded h-8 w-8" required="" />
                            <label for="Formulas" class="custom-checkbox color-text-blue font-medium text-xxl">Use in Formulas</label>
                        </div>
                    </item>
                </Grid>






            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )

  
}





const dropdownOpt = [
    { title: 'Degrees ' },
    { title: 'Degrees' },
];




export default Attribute3