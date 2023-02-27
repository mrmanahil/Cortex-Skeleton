import React from "react";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css";

const Filters = [
  { title: "Kal Ho Na Ho", year: 1994 },
  { title: "Kabhi Khushi Kabhi Gham", year: 1972 },
  { title: "Kaho Na Pyaar Ha", year: 1974 },
  { title: "Dil Chahta Ha", year: 2008 },
  { title: "Race", year: 1957 },
  { title: "Race 2", year: 1993 },
  { title: "Race 3", year: 1994 },
];

const LightBlueButton = styled(Button)({
  backgroundColor: "var(--textcolor)",
  borderRadius: 8,
  textTransform: "capitalize",
  minWidth: "150px",
  color: "var(--bgcolor)",
  fontSize: "16px",
  padding: "5px 8px",
  lineHeight: "19px",
  "&:hover": {
    backgroundColor: "#fff",
  },
});

const TransparentButton = styled(Button)({
  backgroundColor: "transparent",
  minWidth: "fit-content",
  color: "#fff",
  padding: "0px",
  position: "absolute",
  right: "8px",
  top: "8px",
  zIndex: "1",
  "&:hover": {
    backgroundColor: "#fff",
    color: "var(--bgcolor)",
  },
});

const Attribute = () => (
  <div className="attribute">
    <div className="max-width-516">
      <div className="design-box position-relative">
        <TransparentButton>
          <CloseIcon />
        </TransparentButton>
        <div className="select-css mb-20">
          <Stack spacing={4} sx={{ width: "100%" }}>
            <Autocomplete
              multiple
              id="size-small-filled-multi"
              size="small"
              options={Filters}
              InputLabelProps={{ shrink: true }}
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
                  label="Select Filters (Category, OEM, Technology)"
                  placeholder="Filters"
                />
              )}
            />
          </Stack>
        </div>
        <div className="select-css">
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
                  label="Full Text Search List"
                  placeholder="Filters"
                />
              )}
            />
          </Stack>
          <label className="text-gray">Select an option from the above</label>
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "35px",
            gap: "25px",
            flexFlow: "wrap",
          }}
        >
          <LightBlueButton>Insert</LightBlueButton>
          <LightBlueButton>Modify</LightBlueButton>
        </Box>
      </div>
    </div>
  </div>
);

export default Attribute;
