import React from 'react'
import ListDepthIcon from '../../assets/img/ListDepth.svg'

function SelectField(props) {

    return (
        <div className='selectMenu-list'>
            <li>
                <div className='d-flex align-center'>
                    <div className='listName-and-icon d-flex align-center'>
                        <p className='nodeStart-al'> {props.ListDepthIconText} </p>
                        <p className='listDepthIcon'>
                            <img src={ListDepthIcon} />
                            <sup> {props.listDepSup} </sup>
                        </p>
                    </div>
                    <p className='relNode-listText'>
                        <span> &#40; {props.listColor} &#41; </span>
                        <span> {props.nodeName} </span>
                    </p>
                </div>
                <button className='btnIcon'>
                    <img src={require('../../assets/img/downArrow.png')} />
                </button>
            </li>
        </div>
    )
}

export default SelectField