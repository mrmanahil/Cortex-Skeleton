import React from 'react'

import { Button, Stack , Avatar} from '@mui/material'
import filterIcon from '../../assets/img/filter.svg'
import resetIcon from '../../assets/img/Reset.svg'
import sortIcon from '../../assets/img/Sort.svg'

function RelationShipFilterBtns() {
    return (
        <div className='relFilterBtn'>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Button variant="contained" startIcon={<Avatar src={filterIcon} />} sx={{ p: '0 10px', background: '#133774', width: '110px' }} >
                    Filters
                </Button>
                <Button variant="contained" startIcon={<Avatar src={sortIcon} />} sx={{ p: '0 10px', background: '#133774', width: '110px' }} >
                    Sort
                </Button>
                <Button variant="contained" startIcon={<Avatar src={resetIcon} />} sx={{ p: '0 10px', background: '#133774', width: '110px' }} >
                    Reset
                </Button>
            </Stack>
        </div>
    )
}

export default RelationShipFilterBtns