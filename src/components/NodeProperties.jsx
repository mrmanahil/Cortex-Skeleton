import React from 'react'
import Formulas from './Formulas';
import NodeAttrCommon from './NodeAttrCommon';
import NodeAttributes from './NodeAttributes';
import NodeDeatils from './NodeDeatils';
import NodeDescription from './NodeDescription';
import NodeMultiplier from './NodeMultiplier';
import NodeName from './NodeName';

function NodeProperties() {
    return (
        <>
            <p className='topHeading-nodeProp'>Node Properties</p>
            <NodeDeatils NodeType='Object' nodeId='98ED0F' nodeVersion='1001' nodeOption='X' nodeGroupId='FF' />
            <NodeName nodeHeading='Node Name' />
            <NodeDescription nodeHeading='Node Description' />
            <NodeMultiplier nodeHeading='Node Multiplier' />
            <Formulas nodeHeading='Formulas' />
            <NodeAttributes nodeHeading='Node Attributes' NodeAttributes_type='Diff' />
            <NodeAttrCommon nodeHeading='Node Attributes' NodeAttributes_type='Common' />
        </>
    )
}

export default NodeProperties