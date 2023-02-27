import React from 'react'
import RelationshipsSearch from '../Relationships/RelationshipsSearch'
import ItemDescription from './ItemDescription'

function Description() {
  return (
    <div className='descriptionComp-main'>
        <RelationshipsSearch searchPlaceholder='wiki.neurologik.io\cctv_lenses.html' />
        <ItemDescription 
        itemName='CCTV Camera Lens' 
        itemDescp='A CCTV Camera Lens is an optical lens or assembly of lenses used in conjunction with a camera body and mechanism to make images of objects on sensors capable of producing image streams electronically.'
        itemImg={require('../../assets/img/item1.png')}
        imgCaption='Different kinds of camera lenses, including wide angle, telephoto and speciality'
        />
    </div>
  )
}

export default Description