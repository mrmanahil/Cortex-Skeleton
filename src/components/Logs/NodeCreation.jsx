import React from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { Box, Container } from '@mui/system'


function NodeCreation(props) {
    return (
        <div className='nodeDetails-main nodeBox'>
            {/* <Container maxWidth="sm" className='bgcolor color-text-blue main-container'></Container> */}
            <Container className='bgcolor color-text-blue main-container'>
                <Box class="box-main">

                    <Grid container class="comp-container" direction="row" item lg={12}>
                        <Grid item lg={12}>
                            <p class="component-heading">{props.nodeHeading}</p>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" item lg={12}>

                        <Grid item lg={10}>
                            <TableContainer>
                                <Table style={{ borderBottom: "none" }}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className='table-cell'>
                                                Node Type
                                            </TableCell>
                                            <TableCell className='table-cell'>
                                                {props.NodeType}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='table-cell'>
                                                Node ID
                                            </TableCell>
                                            <TableCell className='table-cell'>
                                                {props.nodeId}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='table-cell'>
                                                Version
                                            </TableCell>
                                            <TableCell className='table-cell'>
                                                {props.nodeVersion}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='table-cell'>
                                                Created by
                                            </TableCell>
                                            <TableCell className='table-cell'>
                                                {props.nodeCreatedBy}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='table-cell'>
                                                Created at
                                            </TableCell>
                                            <TableCell className='table-cell'>
                                                {props.nodeCreatedAt}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                    </Grid>

                </Box>
            </Container>
        </div>
    )
}

export default NodeCreation;