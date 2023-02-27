import React from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { Box, Container } from '@mui/system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import userIcon from '../assets/img/person.png'
import settingIcon from '../assets/img/setting.png'


import w_userIcon from '../assets/img/w_user.png'
import w_settingIcon from '../assets/img/w_setting.png'


function NodeAttrCommon(props) {
    return (
        <div className='nodeAttributes-main nodeBox'>
            <Container className='bgcolor color-text-blue main-container'>
                <Box class="box-main">

                    <Grid container class="comp-container" direction="row" item lg={12}>
                        <Grid item lg={12}>
                            <p class="nodeAttribute-heading"> {props.nodeHeading} <span> ( {props.NodeAttributes_type} ) </span> </p>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" item lg={12} alignItems="center">

                        <Grid item lg={12}>
                            <div className='nodeAttr-list'>
                                <ul>
                                    <li> <img src={settingIcon} alt="" />  <span> Sensor Size </span> </li>
                                    <li> <img src={w_settingIcon} alt="" />  <span> 1/3 inch </span> </li>
                                    <li> <img src={settingIcon} alt="" />  <span> Object Distance </span> </li>
                                    <li> <img src={w_settingIcon} alt="" />  <span> 28 meters </span> </li>
                                    <li> <img src={settingIcon} alt="" />  <span> Object Size </span> </li>
                                    <li> <img src={w_settingIcon} alt="" />  <span> 6 meters </span> </li>
                                    <li> <img src={settingIcon} alt="" />  <span> Object Speed </span> </li>
                                    <li> <img src={w_settingIcon} alt="" />  <span> 0-12 mps </span> </li>
                                    <li> <img src={settingIcon} alt="" />  <span> Mechanical </span> </li>
                                    <li> <img src={w_settingIcon} alt="" />  <span> Fixed </span> </li>
                                    {/* <li> <img src={settingIcon} alt="" />  <span> formula name </span> </li> */}
                                    {/* <li> <img src={w_settingIcon} alt="" />  <span> xxxx yy </span> </li> */}
                                </ul>
                            </div>
                        </Grid>
                    </Grid>


                </Box>
            </Container>
        </div>
    )
}

export default NodeAttrCommon



