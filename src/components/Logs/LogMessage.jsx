import React from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, Stack, TextField } from '@mui/material'
import { Box, Container } from '@mui/system'

function LogMessage(props) {
    return (
        <div className='logMessagfe-main w-96'>
            <div className='form-main-qa d-flex'>
                <div className='form-control-qa w-17'>
                    <label htmlFor="">Tracking ID</label>
                    <input type="text" placeholder={`${props.trackingId}`} />
                </div>
                <div className='form-control-qa w-17'>
                    <label htmlFor="">Status</label>
                    <input type="text" placeholder={`${props.logStatus}`} />
                </div>
                <div className='form-control-qa w-48'>
                    <label htmlFor="">Type</label>
                    <input type="text" placeholder={`${props.logType}`} />
                </div>
                <div className='form-control-qa w-10'>
                    <label htmlFor="">Undo</label>
                    <button className='btnImg undo-img'> <img src={require('../../assets/img/Undo.png')} alt="" /> </button>
                </div>


                <div className='form-control-qa w-17'>
                    <label htmlFor="">Node ID</label>
                    <input type="text" placeholder={`${props.logNodeId}`} />
                </div>
                <div className='form-control-qa w-28'>
                    <label htmlFor="">User</label>
                    <input type="text" placeholder={`${props.logUser}`} />
                </div>
                <div className='form-control-qa w-48'>
                    <label htmlFor="">Timestamp</label>
                    <input type="text" placeholder={`${props.timeStamp}`} />
                </div>

                <div className='form-control-qa w-98'>
                    <label htmlFor="">Log Message</label>
                    {/* <textarea name="" id="" className='log-message'>
                        {props.logmessage}
                    </textarea> */}
                    <div className='log-message-box'>
                        {props.logmessage}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LogMessage