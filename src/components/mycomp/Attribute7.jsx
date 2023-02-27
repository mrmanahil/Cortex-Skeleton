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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextareaAutosize from '@mui/material/TextareaAutosize';




function createData( s_no, att_variable, att_value, att_unit ) {
    return {  s_no, att_variable, att_value, att_unit  };
  }  
  const rows = [
    createData('', 'InMult', '12,000', 'm2'),
    createData('B2B2', 'Spare', '0.1', 'Ratio'),
    createData('A1A1', 'CamDen', '25', '1/m2'),
    createData('', 'ResMult',' ' , ' ' ),
  ];

  function Attribute7() {
    
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
        <h3>Node Multiplier</h3>
    <div className='design-box border-radius'>
       
        <div className='std_form '>
        <fieldset>
            <legend>Node Multiplier</legend>
            <div className='row'>
                <div className='col-6'>
                    <FormControl fullWidth  variant="standard">
                        <div className='img_text'>              
                        <img src={require('../mycomp/settings.png')} alt="image" className='img_fluid' />
                        <span className='textcolor'>Input Multiplier</span>

                        
                        </div>
                       
                        <p className="gray-color text-left"> 12,000 m2</p>
                    </FormControl>                    
                </div>
                <div className='col-6'>
                    <FormControl fullWidth  variant="standard">
                        <div className='img_text'>          
                        <img src={require('../mycomp/settings.png')} alt="image" className='img_fluid' />     
                        <span className='textcolor'>Output Multiplier</span>
                        </div>
                        <p className="gray-color text-left"> 12,000 m2</p>
                    </FormControl>            
                </div>
            </div>
            </fieldset>





            
                            
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




export default Attribute7