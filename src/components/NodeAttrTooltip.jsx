import React from 'react'

function NodeAttrTooltip(props) {
    return (
        <div className='tooltip-NodeAtt bgcolor color-text-white'>
            <p> Machine Translated from: Čeština {props.machineTransFrom} </p>
            <p> Original Text: {props.originalText} </p>
        </div>
    )
}

export default NodeAttrTooltip