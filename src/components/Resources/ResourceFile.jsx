import { Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { useState } from 'react';

function ResourceFile(props) {

    const [filename , setFilename] = useState('Choose File')
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
                            <p className='resourceFile' >
                                <label htmlFor="resourcefile_inp1">
                                    <img src={require('../../assets/img/fileIcon.png')} className='resource-icon' />
                                </label>
                                <input type="file" name="" id="resourcefile_inp1" onChange={handleChange} />
                                <span> {filename} </span>
                            </p>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </div>
    )
}

export default ResourceFile