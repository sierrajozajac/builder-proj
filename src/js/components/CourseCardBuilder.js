import React, { Component } from 'react';
import { checkPropTypes } from 'prop-types';

class CourseCardBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            URL: "",
            style: "row",
            mode: "false",
            height: "250px",
            width: "100%",
            styling: "border-radius:20px",
            extract: "<iframe src='http://127.0.0.1:3006/build/index.html?darkmode=false&direction=row&courseID='' height='180px' width='100%' style='border-style: ridge'></iframe>;"
        };

        this.URL_Entered = this.URL_Entered.bind(this);
        this.rowStyleRadioClick = this.rowStyleRadioClick.bind(this);
        this.colStyleRadioClick = this.colStyleRadioClick.bind(this);
        this.lightModeRadioClick = this.lightModeRadioClick.bind(this);
        this.darkModeRadioClick = this.darkModeRadioClick.bind(this);  
        this.userUpdatesExtract = this.userUpdatesExtract.bind(this);
    }
    URL_Entered() {
        var val = encodeURIComponent(document.getElementById("text").value);
        this.setState({URL: val});
        this.updateCardExtract();
    }
    rowStyleRadioClick() {
        var rowRad = document.getElementById("rowRad");
        var colRad = document.getElementById("colRad");

        rowRad.checked = true;
        colRad.checked = false;
        this.setState({style: "row"});
        this.setState({height: "250px"});
        this.setState({width: "100%"});
        
        this.updateCardExtract();    
    }
    colStyleRadioClick() {
        var rowRad = document.getElementById("rowRad");
        var colRad = document.getElementById("colRad");
        
        colRad.checked = true;
        rowRad.checked = false;
        this.setState({style: "column"});
        this.setState({height: "255px"});
        this.setState({width: "210px"});
        
        this.updateCardExtract();
    }
    lightModeRadioClick() {
        var lightRad = document.getElementById("lightRad");
        var darkRad = document.getElementById("darkRad");
        
        lightRad.checked = true;
        darkRad.checked = false;
        this.setState({mode: "false"});
        
        this.updateCardExtract();
    }
    darkModeRadioClick() {
        var lightRad = document.getElementById("lightRad");
        var darkRad = document.getElementById("darkRad");
        
        darkRad.checked = true;
        lightRad.checked = false;
        this.setState({mode: "true"});
         
        this.updateCardExtract();
    }
    updateCardExtract() {
        var text = `<iframe src = 'http://127.0.0.1:3006/build/index.html?darkmode=${this.state.mode}&direction=${this.state.style}&courseID=${this.state.URL}' height='${this.state.height}' width='${this.state.width}' style='${this.state.styling}'></iframe>;`;
        this.setState({extract: text});
    }
    userUpdatesExtract() {
        var text = document.getElementById("extract").value;
        this.setState({extract: text});
    }
    render() {
        return (
            <div onload={() => this.updateExtract()}>
                <h1>Course Card Builder</h1>
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
                <textarea id="extract" value={this.state.extract} onChange={() => this.userUpdatesExtract()}></textarea>
            </div>
        );
    }
}

export default CourseCardBuilder;
ReactDOM.render(<CourseCardBuilder/>, document.getElementById('root'));