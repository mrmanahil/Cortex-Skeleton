import React from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { Box, Container } from '@mui/system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import userIcon from '../assets/img/person.png'
import settingIcon from '../assets/img/setting.png'


function NodeMultiplier(props) {
    return (
        <div className='nodeMultiplier-main nodeBox'>
            <Container className='bgcolor color-text-blue main-container'>
                <Box class="box-main">

                    <Grid container class="comp-container" direction="row" item lg={12}>
                        <Grid item lg={12}>
                            <p class="component-heading"> {props.nodeHeading} </p>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" item lg={12} alignItems="center">

                        {/* <Grid item lg={12}> */}
                            <div className='nodeMultiplier-list'>
                                <ul>
                                    <li> 
                                        <div><img src={userIcon} alt="" />  <span> Input Multiplier </span> </div>
                                        <p>12,000 m2</p>
                                    </li>
                                    <li> 
                                        <div><img src={settingIcon} alt="" />  <span> Output Multiplier </span> </div>
                                        <p>12,000 m2</p>
                                    </li>
                                </ul>
                            </div>
                        {/* </Grid> */}

                        {/* <Grid item lg={6}>

                        </Grid>
                        <Grid item lg={6}>
                            <p className='nodeinnerPara'>
                                15
                            </p>
                        </Grid> */}


                    </Grid>


                </Box>
            </Container>
        </div>
    )
}

export default NodeMultiplier



