import React from 'react'
import RelationShipFilterBtns from '../Relationships/RelationShipFilterBtns'
import RelationshipsSearch from '../Relationships/RelationshipsSearch'
import LogMessage from './LogMessage'
import NodeCreation from './NodeCreation'
import NodeLastEdit from './NodeLastEdit'

function LogsMain() {
  return (
    <div className='logsmain-comp'>
      <NodeCreation nodeHeading='Node Creation' NodeType='Object' nodeId='98ED0F' nodeVersion='1001' nodeCreatedBy='USER001' nodeCreatedAt='12:23:03 12-02-2021' />
      <NodeLastEdit nodeHeading='Node Last Edit' nodeVersion='2006' nodeEditedBy='USER017' nodeEditedAt='12:23:03 12-02-2021' />
      <RelationshipsSearch searchPlaceholder='Search...' />
      <RelationShipFilterBtns />

      <LogMessage trackingId='DDF439' logStatus='Success' logType='Auto Attribute' logNodeId='98ED0F' logUser='CORTEX' timeStamp='12:17:01 14-09-2021'
        logmessage='CORTEX has automatically added a new Attribute “Focal Length” to Node 98ED0F and has calculated the Value for “Focal Length” based on parameters inherited from other nodes. The Value for “Focal Length” is set to “10 mm”' />

      <LogMessage trackingId='DDF439' logStatus='Success' logType='Custom Attribute' logNodeId='98ED0F' logUser='USER 017' timeStamp='12:17:01 14-09-2021'
        logmessage='USER 017 has added a new Custom Attribute with Key “Polarization” of Type “Boolean”. The Value for “Polarization” is set to “True” ' />

      <LogMessage trackingId='DDF439' logStatus='Success' logType='Update' logNodeId='98ED0F' logUser='USER 014' timeStamp='12:17:01 14-09-2021'
        logmessage='USER 014 has Updated the Name of Node 98ED0F to “Perimeter Camera Lens” ' />

      <LogMessage trackingId='BD7782' logStatus='Success' logType='Node Created' logNodeId='98ED0F' logUser='USER 014' timeStamp='12:17:01 14-09-2021'
        logmessage='USER 014 has created Node 98ED0F as a child of Node 5003BC and has inherited all of its Attributes. ” ' />

    </div>
  )
}

export default LogsMain