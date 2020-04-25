import React, { Component } from 'react';
import { checkPropTypes } from 'prop-types';

// Builder
class Builder extends Component {
    builderSelected() {
        var selection = document.getElementById("builders").value;
        if (selection == "courseCard") {
            document.getElementById("demo").innerHTML = "<CourseCardBuilder/>" ;
        }
        if (selection == "catalog") {
            document.getElementById("demo").innerHTML = "<CatalogBuilder/>" ;
        }
    }
    render() {
        return (
            <div onload={() => this.updateExtract()}>
                <h1>Builder</h1> 
                <select id="builders" onChange={() => this.builderSelected()}> 
                    <option value="courseCard">Course Card</option> 
                    <option value="catalog">Catalog</option>
                    <div id="demo"></div>
                </select>
            </div>
        );
    }  
}

export default Builder;
ReactDOM.render(<Builder/>, document.getElementById('root'));