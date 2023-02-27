import React from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow ,Button , Tooltip} from '@mui/material'
import { Box, Container } from '@mui/system'
import world_2_light_Img from '../assets/img/world_2_light.png'
import NodeAttrTooltip from './NodeAttrTooltip'


function NodeDescription(props) {
    return (
        <div className='nodeDetails-main nodeBox'>
            <Container className='bgcolor color-text-blue main-container'>
                <Box class="box-main">

                    <Grid container class="comp-container" direction="row" item lg={12}>
                        <Grid item lg={12}>
                            <p class="component-heading"> {props.nodeHeading} </p>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" item lg={12} alignItems="center">

                        <Grid item lg={12}>
                            <p className='m-0 nodeinnerPara'>
                                The lens of the perimeter cameras need to be able to detec moving objects at the assigned distance and light conditions
                                {/* <span className='nodeDetails-rightBtns top-13'>
                                    <div className='nodeDetails-rightBtns nodeAttTooltip-btn'>
                                        <Tooltip title={<NodeAttrTooltip machineTransFrom='Čeština' originalText='Objektiv perimetrických kamer musí být schopen detekovat pohybující se objekty v přidělené vzdálenosti a světelných podmínkách' />} placement="bottom-end"

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
                        </Grid>

                    </Grid>


                </Box>
            </Container>
        </div>
    )
}

export default NodeDescription;