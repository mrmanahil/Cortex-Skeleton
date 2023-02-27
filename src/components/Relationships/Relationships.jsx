import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


import { Button, Stack, IconButton, InputBase, Paper } from '@mui/material'

import { Avatar } from '@mui/material';
import filterIcon from '../../assets/img/filter.svg'
import resetIcon from '../../assets/img/Reset.svg'
import sortIcon from '../../assets/img/Sort.svg'
import RelatedNodes from './RelatedNodes';
import RelationshipsSearch from './RelationshipsSearch';
import RelationShipFilterBtns from './RelationShipFilterBtns';



function Relationships() {

    return (
        <>
            <div className='relationShip-searchComp'>
                <RelationshipsSearch searchPlaceholder='Search...' />
                <RelationShipFilterBtns />
                <div className='relatedNodesMain-render'>
                    <RelatedNodes />
                </div>
            </div>
        </>
    )
}

export default Relationships