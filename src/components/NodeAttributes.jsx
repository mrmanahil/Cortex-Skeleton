import React from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, Button, Tooltip } from '@mui/material'
import { Box, Container } from '@mui/system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import userIcon from '../assets/img/person.png'
import settingIcon from '../assets/img/setting.png'

import w_userIcon from '../assets/img/w_user.png'
import w_settingIcon from '../assets/img/w_setting.png'

import world_2_light_Img from '../assets/img/world_2_light.png'
import NodeAttrTooltip from './NodeAttrTooltip'



function NodeAttributes(props) {
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
                                    <li>
                                        <img src={settingIcon} alt="" />
                                        <span> Optimal Focal Length </span>
                                    </li>
                                    <li>
                                        <img src={w_settingIcon} alt="" />
                                        <span> 28 mm </span>
                                    </li>
                                    <li>
                                        <img src={userIcon} alt="" />
                                        <p>
                                            <span> Polarized </span>
                                            {/* <span>
                                                <div className='nodeDetails-rightBtns nodeAttTooltip-btn'>
                                                    <Tooltip title={<NodeAttrTooltip machineTransFrom='Čeština' originalText='Polarizované' />} placement="bottom"

                                                        componentsProps={{
                                                            tooltip: {
                                                                sx: {
                                                                    color: "#fff",
                                                                    backgroundColor: "#0C2146",
                                                                    padding: '10px',
                                                                    border: '4px solid #2979FF',
                                                                    marginTop: '0 !important',
                                                                }
                                                            }
                                                        }}

                                                    >
                                                        <Button> <img className='yellowWorldImg' src={world_2_light_Img} ></img> </Button>
                                                    </Tooltip>
                                                </div>
                                            </span> */}
                                        </p>
                                    </li>
                                    <li>
                                        <img src={w_userIcon} alt="" />
                                        <span> True </span>
                                    </li>
                                    <li>
                                        <img src={settingIcon} alt="" />
                                        <span> Max Operating Temperature </span>
                                    </li>
                                    <li>
                                        <img src={w_userIcon} alt="" />
                                        <span> 50 Celcius </span>
                                    </li>

                                    <li>
                                        <img src={settingIcon} alt="" />
                                        <span> Vertical Filed of View </span>
                                    </li>
                                    <li>
                                        <img src={w_settingIcon} alt="" />
                                        <span> -15 degrees </span>
                                    </li>
                                    <li>
                                        <img src={settingIcon} alt="" />
                                        <span> Horizontal Field of View </span>
                                    </li>
                                    <li>
                                        <img src={w_settingIcon} alt="" />
                                        <span> 12.5 degrees </span>
                                    </li>

                                    <li className='addNewAttr'>
                                        <span> <FontAwesomeIcon icon={faPlus} /> </span>
                                        <span>Add Attribute </span>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>


                </Box>
            </Container>
        </div>
    )
}

export default NodeAttributes


