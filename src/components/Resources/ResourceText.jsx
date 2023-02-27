import { Grid } from '@mui/material'
import { Box, Container, createTheme, ThemeProvider } from '@mui/system'
import React from 'react'

function ResourceText(props) {

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
                            <p className='resourcePara' >
                                <a href="#"> {props.resourceText_linkId} </a> {props.resourceText_userPara}
                            </p>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </div>
    )
}

export default ResourceText