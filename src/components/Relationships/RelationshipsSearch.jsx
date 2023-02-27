import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import { IconButton, InputBase, Paper } from "@mui/material";

function RelationshipsSearch(props) {
  return (
    <div class="relationShip-searchComp">
      <div className="relationShip-topNav">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            background: "none",
            color: "#ffff",
          }}
        >
          <InputBase
            className="searchFIled"
            sx={{
              ml: 0,
              flex: 1,
              color: "#fff",
              "&::placeholder": {
                color: "gray",
              },
            }}
            // Search...
            placeholder={props.searchPlaceholder}
          />
          <IconButton
            type="submit"
            sx={{ p: "0", color: "#fff", borderColor: "#fff" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        {/* <div className='relFilterBtn'>
                    <Stack direction="row" spacing={2} sx={{justifyContent:'space-between'}}>
                        <Button variant="contained" startIcon={<Avatar src={filterIcon} />} sx={{ p: '0 10px', background: '#133774' , width:'110px' }} >
                            Filters
                        </Button>
                        <Button variant="contained" startIcon={<Avatar src={sortIcon} />} sx={{ p: '0 10px', background: '#133774' , width:'110px' }} >
                            Sort
                        </Button>
                        <Button variant="contained" startIcon={<Avatar src={resetIcon} />} sx={{ p: '0 10px', background: '#133774' , width:'110px' }} >
                            Reset
                        </Button>
                    </Stack>
                </div> */}
      </div>
    </div>
  );
}

export default RelationshipsSearch;
