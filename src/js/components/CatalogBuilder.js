import React, { Component } from 'react';
import { checkPropTypes } from 'prop-types';

class CatalogBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            URL: "",
            style: "row",
            mode: "true",
            height: "180px",
            width: "100%",
            extract: "<iframe src='http://127.0.0.1:3000/?darkmode=true&direction=row&courseID=' height='500px' width='910px'  sandbox='allow-scripts allow-top-navigation'></iframe>;"
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
        this.updateCatalogExtract();
    }
    rowStyleRadioClick() {
        var rowRad = document.getElementById("rowRad");
        var colRad = document.getElementById("colRad");

        rowRad.checked = true;
        colRad.checked = false;
        this.setState({style: "row"});
        this.setState({height: "500px"});
        this.setState({width: "910px"});

        this.updateCatalogExtract();    
    }
    colStyleRadioClick() {
        var rowRad = document.getElementById("rowRad");
        var colRad = document.getElementById("colRad");
        
        colRad.checked = true;
        rowRad.checked = false;
        this.setState({style: "column"});
        this.setState({height: "490px"});
        this.setState({width: "910px"});

        this.updateCatalogExtract();
    }
    lightModeRadioClick() {
        var lightRad = document.getElementById("lightRad");
        var darkRad = document.getElementById("darkRad");
        
        lightRad.checked = true;
        darkRad.checked = false;
        this.setState({mode: "false"});

        this.updateCatalogExtract();
    }
    darkModeRadioClick() {
        var lightRad = document.getElementById("lightRad");
        var darkRad = document.getElementById("darkRad");
        
        darkRad.checked = true;
        lightRad.checked = false;
        this.setState({mode: "true"});

        this.updateCatalogExtract();
    }
    updateCatalogExtract() {
        var text = `<iframe src='http://127.0.0.1:3006/?darkmode=${this.state.mode}&direction=${this.state.style}&courseID=${this.state.URL}' height='${this.state.height}' width='${this.state.width}'  sandbox='allow-scripts allow-top-navigation'></iframe>;`;
        this.setState({extract: text});
    }
    userUpdatesExtract() {
        var text = document.getElementById("extract").value;
        this.setState({extract: text});
    }
    render() {
        return (
            <div onLoad={() => this.updateCatalogExtract()}>
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
                <textarea id="extract" value={this.state.extract} onChange={() => this.userUpdatesExtract()}></textarea>
            </div>        
        );
    }
}

export default CatalogBuilder;
ReactDOM.render(<CatalogBuilder/>, document.getElementById('root'));