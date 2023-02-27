import React from 'react'
import RelationShipFilterBtns from '../Relationships/RelationShipFilterBtns'
import RelationshipsSearch from '../Relationships/RelationshipsSearch'
import RelationshipEditorFooter from './RelationshipEditorFooter'
import SelectRelationship from './SelectRelationship'

function RelationshipsEditor() {
  return (
    <div>
        <RelationshipsSearch searchPlaceholder='Search...' />
        <RelationShipFilterBtns />
        <SelectRelationship />
        <RelationshipEditorFooter />
    </div>
  )
}

export default RelationshipsEditor