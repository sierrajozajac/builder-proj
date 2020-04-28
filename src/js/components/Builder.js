import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { checkPropTypes } from 'prop-types';

class Builder extends Component {
    builderSelected() {
        var selection = document.getElementById("builders").value;
        if (selection == "courseCard") {
            ReactDOM.render(<CourseCardBuilder/>, document.getElementById('demo'));
        }
        if (selection == "catalog") {
            ReactDOM.render(<CatalogBuilder/>, document.getElementById('demo'));
        }
    }
    render() {
        return (
            <div style={{background: "#960207", padding: "10px", font: "400 15px/1.8 Lato, sans-serif", color: "white"}}>
                <h1 style={{color: "black", "text-decoration": "underline"}}>Builder</h1> 
                <select id="builders" onChange={() => this.builderSelected()}> 
                    <option value="courseCard">Course Card</option> 
                    <option value="catalog">Catalog</option>
                </select>
                <div id="demo" style={{width: "98%", outline: "2px solid black", margin: "20px 0px 0px 0px"}}>
                </div>
            </div>
        );
    }  
}

export default Builder;
ReactDOM.render(<Builder/>, document.getElementById('root'));