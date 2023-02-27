import React from "react";
import { Grid } from "@mui/material";
import '../../index.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormLabel from '@mui/material/FormLabel';

function updateData( result, formula, attr, value, unit) {
    return {  result, formula, attr, value, unit };
  }
const rows = [
    updateData(' ', 'A0A0', 'Sensor', 3, 'Inch'),
    updateData(' ', 'B1B1', 'ObjDist', 28, 'meters'),
    updateData(' ', 'C2C2', 'ObjSize', 6, 'meters'),
    updateData('', 'D3D3', 'OptFL', 6, 'mm'),

];
function Editformula(){
    return(
        <>
           <Grid container className="bgcolor add_attribute">
                <Grid direction="row" xs={12}>
                    <Grid item lg="12" xs="12">
                        <item>
                            <div className="geariconHeading">
                                <div className="attribut-head">
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path
                                            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
                                        </path>
                                    </svg>

                                    <label for="name" class="block mx-8 font-medium color-text-blue">Attribute Name</label>
                                </div>
                                <input type="text" id="attribute"
                                    class="bg-transparent block color-text-blue"
                                    placeholder="" required="" />
                                <span class="ref-text">A reference to the Attribute</span>
                            </div>
                        </item>
                    </Grid>
                </Grid>

                <Grid direction="row" xs={12}>
                    <Grid item lg="12" xs="12">
                        <item>
                            <div className="geariconHeading">
                                <div className="attribut-head">
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path
                                            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
                                        </path>
                                    </svg>

                                    <label for="name" class="block mx-8 font-medium color-text-blue">Available Formula Variables</label>
                                </div>
                            </div>
                        </item>
                    </Grid>
                </Grid>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 680 }} aria-label="simple table" className="data-table">
                        <TableHead>
                            <TableRow>

                                <TableCell className="color-text-blue" >Result</TableCell>
                                <TableCell className="color-text-blue">Formula Variable</TableCell>
                                <TableCell className="color-text-blue">Attribute Variable</TableCell>
                                <TableCell className="color-text-blue">Attribute Value</TableCell>
                                <TableCell className="color-text-blue">Attribute Unit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row,index) => (
                                <TableRow
                                    key={row.result}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <FormControlLabel value="female" control={<Radio />} />
                                        {/* <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                            >
                                               <FormControlLabel value={index} control={<Radio />} label={index}/>
                                            </RadioGroup>
                                        </FormControl> */}
                                    </TableCell>
                                    <TableCell >{row.formula}</TableCell>
                                    <TableCell className="attr-value">{row.attr}</TableCell>
                                    <TableCell >{row.value}</TableCell>
                                    <TableCell >{row.unit}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid direction="row" xs={12}>
                    <Grid item lg="12" xs="12">
                        <item>
                            <div className="geariconHeading">
                                <div className="attribut-head">
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path
                                            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
                                        </path>
                                    </svg>

                                    <label for="name" class="block mx-8 font-medium color-text-blue">Formula</label>
                                </div>
                                <input type="text" id="attribute"
                                    class="bg-transparent block color-text-blue"
                                    placeholder="" required="" />
                                <span class="ref-text">Enter a formula above using Variables above and operators (+-x/()=)</span>
                            </div>
                            <div class="submit-btn">
                                <button type="submit"
                                    class="bg-lighblue  font-medium   color-dark-blue text-xxl">validate</button>
                            </div>
                        </item>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}
export default Editformula;