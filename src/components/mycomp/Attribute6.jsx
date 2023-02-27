import React from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function createData(s_no, att_variable, att_value, att_unit) {
  return { s_no, att_variable, att_value, att_unit };
}
const rows = [
  createData("", "InMult", "99999.99", "unit"),
  createData("A1A1", "Variable A", "99999.99", "unit"),
  createData("B2B2", "Variable B", "99999.99", "unit"),
  createData("", "ResMult", "99999.99", "unit"),
];

function Attribute6() {
  const defaultProps = {
    options: dropdownOpt,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: dropdownOpt.map((option) => option.title),
  };

  const [value, setValue] = React.useState(null);

  let styles = {
    heading: {
      maxWidth: 500,
      marginRight: "auto",
      marginLeft: "auto",
    },
    designBox: {
      backgroundColor: "var(--bgcolor)",
      padding: "16px 8px",
      position: "relative",
    },
    stdForm: {
      color: " #F5F8FF",
      fontSize: "16px",
      confirmOverRide: {
        paddingTtop: "0px",
        marginBottom: "5px",
      },
    },
    img_text: {
      display: "flex",
      color: "#76A9FF",
      alignItems: "center",
      justifyContent: "flex-start",
      fontSize: "14px",
      marginBottom: "2px",
      img: {
        paddingRight: "8px",
      },
    },
    imgFluid: {
      maxWidth: "fit-content",
      width: "100%",
      height: "auto",
    },
    grayClr: {
      label: {
        color: "#282828",
      },
    },
  };
  console.log(styles.grayClr.label);
  return (
    <div>
      <div style={styles.heading}>
        <h2>Inspector - Attributes - Multiplier</h2>
        <h3>No Change</h3>
        <div style={styles.designBox}>
          <div className="std_form confirmoverride" style={styles.stdForm}>
            <div className="row">
              <div className="col-6">
                <FormControl fullWidth variant="standard">
                  <div style={styles.img_text}>
                    <img
                      src={require("../mycomp/settings.png")}
                      alt="image"
                      style={styles.img_text.img}
                    />
                    <span>Input Multiplier</span>
                  </div>
                  <TextField
                    helperText="Inherited from Node FFFFFF"
                    id="name"
                    label="Value Unit"
                    // className="gray-color"
                    variant="standard"
                    style={styles.grayClr.label}
                  />
                </FormControl>
              </div>
              <div className="col-6">
                <FormControl fullWidth variant="standard">
                  <div className="img_text">
                    <img
                      src={require("../mycomp/settings.png")}
                      alt="image"
                      className="img_fluid"
                    />
                    <span className="textcolor">Splitting Ratio</span>
                  </div>
                  <TextField
                    label="Ratio"
                    id="name"
                    className="white-placeholder"
                    variant="standard"
                  />
                </FormControl>
              </div>
            </div>

            <div className="std_tbl">
              <div className="img_text">
                <img
                  src={require("../mycomp/settings.png")}
                  alt="image"
                  className="img_fluid"
                />
                <span className="textcolor">Multiplier Formula Variables</span>
              </div>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Attribute ID</TableCell>
                      <TableCell>Attribute Variable</TableCell>
                      <TableCell>Attribute Value</TableCell>
                      <TableCell>Attribute Unit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>{row.s_no}</TableCell>
                        <TableCell>{row.att_variable}</TableCell>
                        <TableCell>{row.att_value}</TableCell>
                        <TableCell>{row.att_unit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            <div className="row">
              <FormControl fullWidth variant="standard">
                <div className="img_text">
                  <img
                    src={require("../mycomp/man.png")}
                    alt="image"
                    className="img_fluid"
                  />
                  <span className="textcolor">Multiplier Formula</span>
                </div>
                <TextField
                  helperText="Multiplier Transformation Formula"
                  id="name"
                  className="gray-color"
                  variant="standard"
                  label="Formula"
                />
              </FormControl>
            </div>

            <div className="row">
              <div className="col-6">
                <FormControl fullWidth variant="standard">
                  <div className="img_text">
                    <img
                      src={require("../mycomp/settings.png")}
                      alt="image"
                      className="img_fluid"
                    />
                    <span className="textcolor">Multiplier Formula Result</span>
                  </div>
                  <TextField
                    helperText="Result of Formula above"
                    id="name"
                    className="gray-color"
                    variant="standard"
                  />
                </FormControl>

                <FormControl fullWidth variant="standard">
                  <div className="img_text">
                    <img
                      src={require("../mycomp/settings.png")}
                      alt="image"
                      className="img_fluid"
                    />
                    <span className="textcolor">User Multiplier Value</span>
                  </div>
                  <TextField
                    helperText="Overrides all other values"
                    id="name"
                    className="gray-color"
                    variant="standard"
                  />
                </FormControl>
              </div>
              <div className="col-6">
                <FormControl fullWidth variant="standard" className="p-0">
                  <div className="img_text">
                    <img
                      src={require("../mycomp/man.png")}
                      alt="image"
                      className="img_fluid"
                    />
                    <span className="textcolor">
                      Multiplier Formula Result Unit
                    </span>
                  </div>
                  <Stack spacing={1}>
                    <Autocomplete
                      {...defaultProps}
                      id="clear-on-escape"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          helperText="Select a Unit from List"
                          variant="standard"
                        />
                      )}
                    />
                  </Stack>
                </FormControl>

                <FormControl fullWidth variant="standard" className="p-0">
                  <div className="img_text">
                    <img
                      src={require("../mycomp/man.png")}
                      alt="image"
                      className="img_fluid"
                    />
                    <span className="textcolor">User Multiplier Unit</span>
                  </div>
                  <Stack spacing={1}>
                    <Autocomplete
                      {...defaultProps}
                      id="clear-on-escape"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          helperText="Select a Unit from List"
                          variant="standard"
                        />
                      )}
                    />
                  </Stack>
                </FormControl>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <FormControl fullWidth variant="standard">
                  <div className="img_text">
                    <img
                      src={require("../mycomp/settings.png")}
                      alt="image"
                      className="img_fluid"
                    />
                    <span className="textcolor">Output Multiplier</span>
                  </div>
                  <TextField
                    helperText="Value transformed by above forumula and variables"
                    id="name"
                    label="Output Value Output Unit"
                    className="gray-color"
                    variant="standard"
                  />
                </FormControl>
              </div>

              <div className="col-12">
                <div className="img_text">
                  <img
                    src={require("../mycomp/man.png")}
                    alt="image"
                    className="img_fluid"
                  />
                  <span className="textcolor">Comment</span>
                </div>
                <TextareaAutosize aria-label="minimum height" minRows={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const dropdownOpt = [{ title: "Degrees " }, { title: "Degrees" }];

export default Attribute6;
