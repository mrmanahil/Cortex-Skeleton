import React from "react";
import { Grid } from "@mui/material";
import '../externalSource.css';
function V1() {
    return (
        <>
            <Grid container className="bgcolor add_attribute">
                <Grid item xs="12" lg="12">
                    <item>
                        <div className="geariconHeading">
                            <div className="attribut-head">
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
                                    </path>
                                </svg>

                                <label for="name" class="block mx-8 font-medium color-text-blue">Attribute Name</label>
                            </div>
                            <input type="text" id="attribute"
                                class="bg-transparent block color-text-blue"
                                placeholder="Name" required="" />
                            <span class="ref-text">A reference to the Attribute</span>
                        </div>
                        <div className="geariconHeading">
                            <div className="attribut-head">
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
                                    </path>
                                </svg>

                                <label for="name" class="block mx-8 font-medium color-text-blue">Variable Name</label>
                            </div>
                            <input type="text" id="attribute"
                                class="bg-transparent block color-text-blue"
                                placeholder="Value" required="" />
                            <span class="ref-text">A reference to the Attribute that is used in Formulas and Multipliers </span>
                        </div>
                    </item>
                </Grid>
                <Grid item xs="6" lg="6">
                    <item>
                        <div className="geariconHeading">
                            <div className="attribut-head">
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
                                    </path>
                                </svg>

                                <label for="value" class="block mx-8 font-medium color-text-blue">Min Value</label>
                            </div>
                            <input type="text" id="value"
                                class="bg-transparent block color-text-blue"
                                placeholder="Value" required="" />
                            <span class="ref-text ">Helper Message </span>
                        </div>


                    </item>
                </Grid>
                <Grid item xs="6" lg="6">
                    <item>
                        <div className="geariconHeading">
                            <div className="attribut-head">
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
                                    </path>
                                </svg>

                                <label for="text" class="block mx-8 font-medium color-text-blue">Unit</label>
                            </div>
                            <select id="underline_select"
                                class="bg-transparent block  color-text-blue ">
                                <option selected>Unit</option>
                                <option value="US">Pixels</option>
                                <option value="CA">CM</option>
                                <option value="FR">Meter</option>
                            </select>
                            <span class="ref-text">Helper Message</span>
                        </div>


                    </item>
                </Grid>
                <Grid item xs="6" lg="6">
                    <item>
                        <div className="geariconHeading">
                            <div className="attribut-head">
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
                                    </path>
                                </svg>

                                <label for="value" class="block mx-8 font-medium color-text-blue">System Value</label>
                            </div>
                            <input type="text" id="value"
                                class="bg-transparent block color-text-blue"
                                placeholder="Value" required="" />
                            <span class="ref-text ">Helper Message </span>
                        </div>


                    </item>
                </Grid>
                <Grid item xs="6" lg="6">
                    <item>
                        <div className="geariconHeading">
                            <div className="attribut-head">
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
                                    </path>
                                </svg>

                                <label for="value" class="block mx-8 font-medium color-text-blue">User Value</label>
                            </div>
                            <input type="text" id="value"
                                class="bg-transparent block color-text-blue"
                                placeholder="Value" required="" />
                            <span class="ref-text ">Overrides other values</span>
                        </div>


                    </item>
                </Grid>
                <Grid item xs="6" lg="6">
                    <item>
                        <div className="geariconHeading">
                            <div className="attribut-head">
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
                                    </path>
                                </svg>

                                <label for="value" class="block mx-8 font-medium color-text-blue">Max Value</label>
                            </div>
                            <input type="text" id="value"
                                class="bg-transparent block color-text-blue"
                                placeholder="Value" required="" />
                            <span class="ref-text">Helper Message</span>
                        </div>
                        <Grid item xs="2" lg="2">
                            <img src={require('../ValuAttr/delete.png')} className="delete-image" />
                        </Grid>
                    </item>

                </Grid>
                <Grid item xs="6" lg="6">
        <item>
        <div class="checkbox-new">
          <input id="Multiplier" type="checkbox" value="" class="d-none border border-color-blue rounded h-8 w-8" required="" />
          <label for="Multiplier" class="custom-checkbox color-text-blue font-medium text-xxl">Use in Multiplier</label>
        </div>

        <div class="checkbox-new">
          <input id="Aggregators" type="checkbox" value="" class="d-none border border-color-blue rounded h-8 w-8" required="" />
          <label for="Aggregators" class="custom-checkbox color-text-blue font-medium text-xxl">Use in Aggregators</label>
        </div>

        <div class="checkbox-new">
          <input id="Formulas" type="checkbox" value="" class="d-none border border-color-blue rounded h-8 w-8" required="" />
          <label for="Formulas" class="custom-checkbox color-text-blue font-medium text-xxl">Use in Formulas</label>
        </div>
        </item>
    </Grid>

            </Grid>
        </>
    )
}
export default V1;