import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import NodeAttributes from "./NodeAttributes";
import { Box, Container } from "@mui/system";
import NodeProperties from "./NodeProperties";
import Relationships from "./Relationships/Relationships";
import LogsMain from "./Logs/LogsMain";
import Resources from "./Resources/Resources";
import Description from "./Description/Description";
// import './style.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NodePropertiesTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="nodeBox nodeBoxTabs">
      <Container className="bgcolor color-text-blue main-container">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <div className="nodePropTabs-btns">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Attributes" {...a11yProps(0)} />
                <Tab label="Relationships" {...a11yProps(1)} />
                <Tab label="Logs" {...a11yProps(2)} />
                <Tab label="Resources" {...a11yProps(3)} />
                <Tab label="Description" {...a11yProps(4)} />
              </Tabs>
            </div>
          </Box>
          <TabPanel value={value} index={0} class="tabCont">
            <NodeProperties />
          </TabPanel>
          <TabPanel value={value} index={1} sx={{ p: "0px" }}>
            <Relationships />
          </TabPanel>
          <TabPanel value={value} index={2}>
            {/* <NodeProperties /> */}
            <LogsMain />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Resources />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Description />
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
}
