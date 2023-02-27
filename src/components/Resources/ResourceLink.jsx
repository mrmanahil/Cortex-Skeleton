import { Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { useState } from 'react';

function ResourceLink(props) {

    const [filename, setFilename] = useState('Choose File')
    function handleChange(event) {
        setFilename(`${event.target.files[0].name}`)
    }

    return (
        <div className='resourcesText-main'>
            <Container sx={{ paddingLeft: '0px !important', paddingRight: '0px !important' }} >
                <Box>
                    <Grid container class="space-between" direction="row" item lg={12} sx={{ display: 'flex' }}>
                        <Grid item lg={6}>
                            <p> {props.resourceText_userId} </p>
                        </Grid>
                        <Grid item lg={6}>
                            <p className='text-right' > {props.resourceText_date} </p>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" item lg={12} >
                        <Grid item lg={12}>
                            <p className='resourceLink d-flex align-center' >
                                <img src={require('../../assets/img/LinkIcon.png')} className='resource-icon' />
                                <a href="">
                                    {props.resourceText_link}
                                </a>
                                {/* <input type="file" name="" id="resourcefile_inp1" onChange={handleChange} />
                                <span> {filename} </span> */}
                            </p>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </div>
    )
}

export default ResourceLink