
import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import '../App.css';


const Filters = [
    { title: 'Kal Ho Na Ho', year: 1994 },
    { title: 'Kabhi Khushi Kabhi Gham', year: 1972 },
    { title: 'Kaho Na Pyaar Ha', year: 1974 },
    { title: 'Dil Chahta Ha', year: 2008 },
    { title: 'Race', year: 1957 },
    { title: "Race 2", year: 1993 },
    { title: 'Race 3', year: 1994 },
];

const SelectAutocomplete = () => (
    <div className='select-css pt-0 chevron-show'>
        <Stack spacing={4} sx={{ width: "100%" }}>
            <Autocomplete
                id="size-small-filled-multi"
                size="small"
                options={Filters}
                getOptionLabel={(option) => option.title}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            variant="outlined"
                            label={option.title}
                            size="medium"
                            color="primary"
                            {...getTagProps({ index })}
                        />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="filled"
                    />
                )}
            />
        </Stack>
    </div>
);

export default SelectAutocomplete
