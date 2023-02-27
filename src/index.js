import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Attribute from "./components/Attribute";
import AttributeForm from "./components/AttributeForm";
import GraphNode from "./components/GraphNode";
import State from "./components/State";
import AttributeUsman from "./components/Attribute";
import Addformula from "./components/Add_attributes/Addformula";
import C1 from "./components/Add_attributes/C1";
import C2 from "./components/Add_attributes/C2";
import C3 from "./components/Add_attributes/C3";
import C4 from "./components/Add_attributes/C4";
import V1 from "./components/ValuAttr/V1";
import V2 from "./components/ValuAttr/V2";
import V3 from "./components/ValuAttr/V3";
import Attribute_form from "./components/mycomp/Attribute_form";
import ConfirmOverride from "./components/mycomp/ConfirmOverride";
import Attribute3 from "./components/mycomp/Attribute3";
import Attribute4 from "./components/mycomp/Attribute4";
import Attribute5 from "./components/mycomp/Attribute5";
import Attribute6 from "./components/mycomp/Attribute6";
import Attribute7 from "./components/mycomp/Attribute7";
import NodePropertiesTabs from "./components/NodePropertiesTabs";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Categories" />
    <Attribute />
    <AttributeForm />
    <App name="ToolBar" />
    <GraphNode />
    {/* <State /> */}

    <NodePropertiesTabs />
    <br />
    <Attribute_form />
    <br />
    <ConfirmOverride />
    <br />
    <Attribute3 />
    <br />
    <Attribute4 />
    <br />
    <Attribute5 />
    <br />
    <Attribute6 />
    <br />
    <Attribute7 />
    <br />
    <AttributeUsman />
    <Addformula />
    <br />
    <C1 />
    <br />
    <C2 />
    <br />
    <C3 />
    <br />
    <C4 />
    <br />
    <V1 />
    <br />
    <V2 />
    <br />
    <V3 />
  </React.StrictMode>
);
