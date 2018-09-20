import React from "react";
import "./container.css";
import Grid from "../grid/index";
import ContentBox from "../contentBox/index";
import Navbar from "../navbar/index";


class Container extends React.Component {

    render() {
        return (
        <div>
        <Navbar />
        <div className="container">
            <Grid>
              
            </Grid>
            <ContentBox />
        </div>
        </div>
        )
    }
};

export default Container;