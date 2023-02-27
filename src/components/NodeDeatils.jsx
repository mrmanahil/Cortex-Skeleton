import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import commmitImg from "../assets/img/Commit.png";
import lockImg from "../assets/img/Lock.png";
import Leaf_trueImg from "../assets/img/Leaf_true.png";
import orphanedImg from "../assets/img/Orphaned.png";
import unionImg from "../assets/img/Union.png";
import nodeLocationImg from "../assets/img/nodeLocation.png";

import HiddenImg from "../assets/img/Hidden.png";
import trashImg from "../assets/img/trash.png";
import PercentageDialImg from "../assets/img/PercentageDial.png";
import NodeHealthImg from "../assets/img/NodeHealth.png";

function NodeDeatils(props) {
  return (
    <div className="nodeDetails-main nodeBox">
      {/* <Container maxWidth="sm" className='bgcolor color-text-blue main-container'></Container> */}
      <Container className="bgcolor color-text-blue main-container">
        <Box class="box-main">
          <Grid container class="comp-container" direction="row" item lg={12}>
            <Grid item lg={12}>
              <p class="component-heading">Node Details</p>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            item
            lg={12}
            sx={{ justifyContent: "space-between" }}
          >
            <Grid item lg={6}>
              <TableContainer>
                <Table style={{ borderBottom: "none" }}>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        className="table-cell"
                        // sx={{
                        //     borderBottom: "none",
                        // }}
                      >
                        Node Type
                      </TableCell>
                      <TableCell className="table-cell">
                        {/* Object */}
                        {props.NodeType}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="table-cell">Node ID</TableCell>
                      <TableCell className="table-cell">
                        {/* 98ED0F */}
                        {props.nodeId}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="table-cell">Version</TableCell>
                      <TableCell className="table-cell">
                        {/* 1001 */}
                        {props.nodeVersion}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="table-cell">Option</TableCell>
                      <TableCell className="table-cell">
                        {/* X */}
                        {props.nodeOption}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="table-cell">GroupID</TableCell>
                      <TableCell className="table-cell">
                        {/* FF */}
                        {props.nodeGroupId}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item lg={6}>
              <div className="nodeDetails-rightBtns nodeDeatils-lg-btn">
                <button className="mb-10">
                  <img src={commmitImg}></img>
                </button>
                <button>
                  <img src={lockImg}></img>
                </button>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            item
            lg={12}
            className="nodeDetails-bt-btns"
          >
            <Grid item lg={6}>
              <div class="bt-left-btns">
                <button class="btnImg">
                  <img src={Leaf_trueImg} alt="" />
                </button>
                <button class="btnImg">
                  <img src={orphanedImg} alt="" />
                </button>
                <button class="btnImg">
                  <img src={unionImg} alt="" />
                  <span>15</span>
                </button>
                <button class="btnImg">
                  <img src={nodeLocationImg} alt="" />
                  <span>7</span>
                </button>
              </div>
            </Grid>
            <Grid item lg={6}>
              <div class="bt-left-btns text-right">
                <button class="btnImg">
                  <img src={HiddenImg} alt="" />
                </button>
                <button class="btnImg">
                  <img src={trashImg} alt="" />
                </button>
                <button class="btnImg">
                  <img src={PercentageDialImg} alt="" />
                </button>
                <button class="btnImg">
                  <img src={NodeHealthImg} alt="" />
                </button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default NodeDeatils;
