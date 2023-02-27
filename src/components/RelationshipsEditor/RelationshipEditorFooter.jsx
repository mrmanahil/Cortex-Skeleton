import React from 'react'

function RelationshipEditorFooter() {
  return (
    <div className='relationShipEdit-footer-main'>
      <p>Set Relationship Type to Selected Nodes As: </p>
      <div className='d-flex align-center'>
        <button className='relshipEdit-btns'>
          <img src={require('../../assets/img/blackArrow.png')} />
          <span>Child</span>
        </button>
        <button className='relshipEdit-btns parent-btn'>
          <img src={require('../../assets/img/blackArrow.png')} />
          <span>Parent</span>
        </button>
        <button className='relshipEdit-btns'>
          <span>None</span>
        </button>
      </div>
      <div className='d-flex'>
        <button className='relshipEdit-btns'>
          <span>Commit Changes</span>
        </button>
      </div>
    </div>
  )
}

export default RelationshipEditorFooter