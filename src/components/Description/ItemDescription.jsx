import React from 'react'

function ItemDescription(props) {
  return (
    <div className='itemDescroption-main'>
        <p className='itemHeading'> {props.itemName} </p>
        <p>
            {props.itemDescp}
        </p>
        <div className='itemImg'>
            <img src={props.itemImg}  />
        </div>
        <p className='img-caption'>
            {props.imgCaption}
        </p>
    </div>
  )
}

export default ItemDescription