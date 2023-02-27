import React from 'react'
import RelationShipFilterBtns from '../Relationships/RelationShipFilterBtns'
import RelationshipsSearch from '../Relationships/RelationshipsSearch'
import CommentBox from './CommentBox'
import ResourceFile from './ResourceFile'
import ResourceImage from './ResourceImage'
import ResourceLink from './ResourceLink'
import ResourceText from './ResourceText'

function Resources() {
  return (
    <div className='resoucesComp-main'>

      <RelationshipsSearch searchPlaceholder='Search...' />
      <RelationShipFilterBtns />

      <ResourceText
        resourceText_userId='USER017'
        resourceText_date='10:07:27 12-09-2021'
        resourceText_linkId='@USER015'
        resourceText_userPara='Check if other camera types require similar lens and try to unify requirements to simplify and reduce variety of lenses in the project'
      />

      <ResourceFile
        resourceText_userId='USER015'
        resourceText_date='13:51:58 10-09-2021'
      />

      <ResourceLink
        resourceText_userId='USER015'
        resourceText_date='13:49:11 10-09-2021'
        resourceText_link='https://www.lens_world.io/varifocal.html'
      />

      <ResourceImage
        resourceText_userId='USER015'
        resourceText_date='13:15:15 10-09-2021'
        resourceText_filename='varifocal_lenses.png'
      />

      <CommentBox />



    </div>
  )
}

export default Resources