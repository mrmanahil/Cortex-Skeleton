import React from "react";
import { Grid, Button, Tooltip } from "@mui/material";
import { Box, Container } from "@mui/system";
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import world_2_light_Img from "../assets/img/world_2_light.png";
import NodeAttrTooltip from "./NodeAttrTooltip";

function NodeName(props) {
  return (
    <div className="nodeDetails-main nodeBox">
      <Container className="bgcolor color-text-blue main-container">
        <Box class="box-main ptb-3">
          <Grid container class="comp-container" direction="row" item lg={12}>
            <Grid item lg={12}>
              <p class="component-heading"> {props.nodeHeading} </p>
            </Grid>
          </Grid>

          <Grid container direction="row" item lg={12} alignItems="center">
            <Grid item lg={8}>
              <p className="m-0 nodeinnerPara" style={{ padding: "12px 0" }}>
                Perimeter Camera Lens
              </p>
            </Grid>

            {/* <Grid item lg={4}>
                            <div className='nodeDetails-rightBtns nodeAttTooltip-btn'>
                                <Tooltip title={<NodeAttrTooltip machineTransFrom='Čeština' originalText='Obvodový objektiv fotoaparátu' />} placement="bottom-end"

                                    componentsProps={{
                                        tooltip: {
                                            sx: {
                                                color: "#fff",
                                                backgroundColor: "#0C2146",
                                                padding: '10px',
                                                border: '4px solid #2979FF',
                                                marginTop: '0 !important',
                                            }
                                        }
                                    }}

                                >
                                    <Button> <img className='yellowWorldImg' src={world_2_light_Img} ></img> </Button>
                                </Tooltip>
                                
                            </div>
                        </Grid> */}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default NodeName;
