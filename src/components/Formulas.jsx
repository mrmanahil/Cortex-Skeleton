import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  Tooltip,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import w_settingIcon from "../assets/img/w_setting.png";
import formulaIcon from "../assets/img/formula.png";

function Formulas(props) {
//   console.log(props);
  return (
    <div className="nodeAttributes-main nodeBox">
      <Container className="bgcolor color-text-blue main-container">
        <Box class="box-main">
          <Grid container class="comp-container" direction="row" item lg={12}>
            <Grid item lg={12}>
              <p class="nodeAttribute-heading"> {props.nodeHeading} </p>
            </Grid>
          </Grid>

          <Grid container direction="row" item lg={12} alignItems="center">
            <Grid item lg={12}>
              <div className="nodeAttr-list">
                <ul>
                  <li>
                    <img src={formulaIcon} alt="" />
                    <span> Focal Length </span>
                  </li>
                  <li>
                    <img src={w_settingIcon} alt="" />
                    <span> Optimal Focal Length </span>
                  </li>

                  <li className="addNewAttr">
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faPlus} />{" "}
                    </span>
                    <span>Add Formula </span>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Formulas;
