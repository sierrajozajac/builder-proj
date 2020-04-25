import React, { Component } from 'react';
import { checkPropTypes } from 'prop-types';


// Catalog Builder
class CatalogBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            URL: "",
            style: "row",
            mode: "true",
            height: "180px",
            width: "100%"
        };
        
        this.URL_Entered = this.URL_Entered.bind(this);
        this.rowStyleRadioClick = this.rowStyleRadioClick.bind(this);
        this.colStyleRadioClick = this.colStyleRadioClick.bind(this);
        this.lightModeRadioClick = this.lightModeRadioClick.bind(this);
        this.darkModeRadioClick = this.darkModeRadioClick.bind(this);  
    }
    URL_Entered() {
        var val = encodeURIComponent(document.getElementById("text").value);
        this.setState({URL: val});
        this.updateCatalogExtract();
    }
    rowStyleRadioClick() {
        var rowRad = document.getElementById("rowRad");
        var colRad = document.getElementById("colRad");

        if (rowRad.checked == true) {
            colRad.checked = false;
            this.setState({style: "row"});
            this.setState({height: "500px"});
            this.setState({width: "910px"});
        }
        else {
            colRad.checked = true;
            this.setState({style: "column"});
            this.setState({height: "490px"});
            this.setState({width: "910px"});
        }
        this.updateCatalogExtract();    
    }
    colStyleRadioClick() {
        var rowRad = document.getElementById("rowRad");
        var colRad = document.getElementById("colRad");
        
        if (colRad.checked == true) {
            rowRad.checked = false;
            this.setState({style: "column"});
            this.setState({height: "490px"});
            this.setState({width: "910px"});
        }
        else {
            rowRad.checked = true;
            this.setState({style: "row"});
            this.setState({height: "500px"});
            this.setState({width: "910px"});
        }
        this.updateCatalogExtract();
    }
    lightModeRadioClick() {
        var lightRad = document.getElementById("lightRad");
        var darkRad = document.getElementById("darkRad");
        
        if (lightRad.checked == true) {
            darkRad.checked = false;
            this.setState({mode: "false"});
        }
        else {
            darkRad.checked = true;
            this.setState({mode: "true"});
        }
        this.updateCatalogExtract();
    }
    darkModeRadioClick() {
        var lightRad = document.getElementById("lightRad");
        var darkRad = document.getElementById("darkRad");
        
        if (darkRad.checked == true) {
            lightRad.checked = false;
            this.setState({mode: "true"});
        }
        else {
            lightRad.checked = true;
            this.setState({mode: "false"});
        }
        this.updateCatalogExtract();
    }
    updateCatalogExtract() {
        var extract = document.getElementById("extract");
        var text = `&lt;iFrame src='http://127.0.0.1:3006/?darkmode=${this.state.mode}&direction=${this.state.style}&courseID=${this.state.URL}' height='${this.state.height}' width='${this.state.width}'  sandbox='allow-scripts allow-top-navigation'/&gt;`;
            
        extract.innerHTML = text;
    }
    render() {
        return (
            <div onLoad={() => this.updateCatalogExtract()} style="font-family: Helvetica, 'sans-serif'; background-color: #e8ffef; background-blend-mode: lighten; padding: 10px; margin: 10px; width: 60%; min-width: 715px; display: block; margin-left: auto; margin-right: auto; box-shadow: 10px 10px 8px grey;">
                <h1>Catalog Builder</h1>
                <h3>URL</h3>
                <input type="text" name="URL" onChange={() => this.URL_Entered()}/>
                <h3>Style</h3>
                <input type="radio" value="row" id="rowRad" onChange={() => this.rowStyleRadioClick()}/>
                <label>List</label>
                <input type="radio" value="col" id="colRad" onChange={() => this.colStyleRadioClick()}/>
                <label>Grid</label>
                <h3>Mode</h3>
                <input type="radio" value="light" id="lightRad" onChange={() => this.lightModeRadioClick()}/>
                <label>Light</label>
                <input type="radio" value="dark" id="darkRad" onChange={() => this.darkModeRadioClick()}/>
                <h3>Copy the text below into your page. ...</h3>
                <textarea id="extract" style="width: 95%">&lt;iFrame src='http://127.0.0.1:3000/?darkmode=true&direction=row&courseID=' height='500px' width='910px'  sandbox='allow-scripts allow-top-navigation'/&gt;</textarea>
            </div>        
        );
    }
}
export class CatalogBuilder;

// Course Card Builder
export class CourseCardBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            URL: "",
            style: "row",
            mode: "false",
            height: "180px",
            width: "100%",
            styling: "border-style: ridge"
        };

        this.URL_Entered = this.URL_Entered.bind(this);
        this.rowStyleRadioClick = this.rowStyleRadioClick.bind(this);
        this.colStyleRadioClick = this.colStyleRadioClick.bind(this);
        this.lightModeRadioClick = this.lightModeRadioClick.bind(this);
        this.darkModeRadioClick = this.darkModeRadioClick.bind(this);   
    }
    URL_Entered() {
        var val = encodeURIComponent(document.getElementById("text").value);
        this.setState({URL: val});
        this.updateCardExtract();
    }
    rowStyleRadioClick() {
        var rowRad = document.getElementById("rowRad");
        var colRad = document.getElementById("colRad");

        if (rowRad.checked == true) {
            colRad.checked = false;
            this.setState({style: "row"});
            this.setState({height: "500px"});
            this.setState({width: "910px"});
        }
        else {
            colRad.checked = true;
            this.setState({style: "column"});
            this.setState({height: "490px"});
            this.setState({width: "910px"});
        }
        this.updateCardExtract();    
    }
    colStyleRadioClick() {
        var rowRad = document.getElementById("rowRad");
        var colRad = document.getElementById("colRad");
        
        if (colRad.checked == true) {
            rowRad.checked = false;
            this.setState({style: "column"});
            this.setState({height: "490px"});
            this.setState({width: "910px"});
        }
        else {
            rowRad.checked = true;
            this.setState({style: "row"});
            this.setState({height: "500px"});
            this.setState({width: "910px"});
        }
        this.updateCardExtract();
    }
    lightModeRadioClick() {
        var lightRad = document.getElementById("lightRad");
        var darkRad = document.getElementById("darkRad");
        
        if (lightRad.checked == true) {
            darkRad.checked = false;
            this.setState({mode: "false"});
        }
        else {
            darkRad.checked = true;
            this.setState({mode: "true"});
        }
        this.updateCardExtract();
    }
    darkModeRadioClick() {
        var lightRad = document.getElementById("lightRad");
        var darkRad = document.getElementById("darkRad");
        
        if (darkRad.checked == true) {
            lightRad.checked = false;
            this.setState({mode: "true"});
        }
        else {
            lightRad.checked = true;
            this.setState({mode: "false"});
        }
        this.updateCardExtract();
    }
    updateCardExtract() {
        var extract = document.getElementById("extract");
        var text = `&lt;iframe src = 'http://127.0.0.1:3006/build/index.html?darkmode=${this.state.mode}&direction=${this.state.style}&courseID=${this.state.URL}' height='${this.state.height}' width='${this.state.width}' style='${this.state.styling}' &gt; &lt;/iframe&gt`;
            
        extract.innerHTML = text;
    }
    render() {
        return (
            <div onload={() => this.updateExtract()} style="font-family: Helvetica, 'sans-serif'; background-color: #e8ffef; background-blend-mode: lighten; padding: 10px; margin: 10px; width: 60%; min-width: 715px; display: block; margin-left: auto; margin-right: auto; box-shadow: 10px 10px 8px grey;">
                <h1?Course Card Builder</h1>
                <h3>Course URL</h3>
                <input type="text" name="URL" onChange={() => this.URL_Entered()}/>
                <h3>Style</h3>
                <input type="radio" value="row" id="rowRad" onChange={() => this.rowStyleRadioClick()}/>
                <label>Row</label>
                <input type="radio" value="col" id="colRad" onChange={() => this.colStyleRadioClick()}/>
                <label>Column</label>
                <h3>Mode</h3>
                <input type="radio" value="light" id="lightRad" onChange={() => this.lightModeRadioClick()}/>
                <label>Light</label>
                <input type="radio" value="dark" id="darkRad" onChange={() => this.darkModeRadioClick()}/>
                <label>Dark</label>
                <h3>Copy the text below into your page. ...</h3>
                <Extract name="&lt;iFrame src='http://127.0.0.1:3006/build/index.html?darkmode=false&direction=row&courseID=' height='180px' width='100%' style='border-style: ridge'/&gt;"/>
            </div>
        );
    }
}

// Builder
export class Builder extends Component {
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

ReactDOM.render(<Builder/>, document.getElementById('root'));