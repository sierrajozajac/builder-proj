import React, { Component } from 'react';
import { checkPropTypes } from 'prop-types';

// HTML Elements
class Title extends Component {
    render() {
        return <h1>{props.name}</h1>;
    }
}
export default Title;

export class Label extends Component {
    render() {
        return <label>{props.name}</label>;
    }
}

export class Header extends Component {
    render() {
        return <h3>{props.name}</h3>;
    }
}

export class Extract extends Component {
    render() {
        return <textarea id="extract" style="width: 95%">{props.name}</textarea>;
    }
}

export class CatalogTextInput extends Component {
    render() {
        return <input type="text" name={props.name} onChange={catalogURL_Entered(this.value)}/>;
    }
}

export class CatalogStyleRadioButton extends Component {
    render() {
        return <input type="radio" value={props.name} id={props.id} onChange={catalogStyleRadioClick(this)}/>;
    }
}

export class CatalogModeRadioButton extends Component {
    render() {
        return <input type="radio" value={props.name} id={props.id} onChange={catalogModeRadioClick(this)}/>;
    }
}

export class CardTextInput extends Component {
    render() {
        return <input type="text" name={props.name} onChange={courseURL_Entered(this.value)}/>;
    }
}

export class CardStyleRadioButton extends Component {
    render() {
        return <input type="radio" value={props.name} id={props.id} onChange={cardStyleRadioClick(this)}/>;
    }
}

export class CardModeRadioButton extends Component {
    render() {
        return <input type="radio" value={props.name} id={props.id} onChange={cardModeRadioClick(this)}/>;
    }
}

export class BuilderSelect extends Component {
    render() {
        return <select id="builders" onChange={builderSelected(this)}> <option value="courseCard">Course Card</option> <option value="catalog">Catalog</option></select>;
    }
}

export class VisiblePane extends Component {
    render() {
        return <div id="demo"></div>;
    }
}

// Catalog Builder
export class CatalogBuilder extends Component {
    constructor() {
        this.URL = "";
        this.style = "row";
        this.mode = "true";
        this.height = "180px";
        this.width = "100%";
    }
    catalogURL_Entered(val) {
        this.URL = encodeURIComponent(val);
        updateCatalogExtract();
    }
    catalogStyleRadioClick(sourceRad) {
        var rowRad = document.getElementById("rowRad");
        var colRad = document.getElementById("colRad");

        if (sourceRad == rowRad) {
            if (rowRad.checked == true) {
                colRad.checked = false;
                this.style="row";
                this.height="500px";
                this.width="910px";
            }
            else {
                colRad.checked = true;
                this.style="column";
                this.height="490px";
                this.width="910px";
            }
        }
        else {
            if (colRad.checked == true) {
                rowRad.checked = false;
                this.style = "column";
                this.height="490px";
                this.width="910px";
            }
            else {
                rowRad.checked = true;
                this.style = "row";
                this.height="500px";
                this.width="910px";
            }
        }
        updateCatalogExtract();
    }
    catalogModeRadioClick(sourceRad) {
        var lightRad = document.getElementById("lightRad");
        var darkRad = document.getElementById("darkRad");

        if (sourceRad == lightRad) {
            if (lightRad.checked == true) {
                darkRad.checked = false;
                this.mode="false";
            }
            else {
                darkRad.checked = true;
                this.mode="true";
            }
        }
        else {
            if (darkRad.checked == true) {
                lightRad.checked = false;
                this.mode = "true";
            }
            else {
                lightRad.checked = true;
                this.mode = "false";
            }
        }
        updateCatalogExtract();
    }
    updateCatalogExtract() {
        var extract = document.getElementById("extract");
        var text = `&lt;iFrame src='http://127.0.0.1:3006/?darkmode=${catalog_mode}&direction=${catalog_style}&courseID=${catalog_courseURL}' height='${catalog_height}' width='${catalog_}'  sandbox='allow-scripts allow-top-navigation'/&gt;`;
            
        extract.innerHTML = text;
    }
    render() {
        return (
            <div onload="updateExtract()" style="font-family: Helvetica, 'sans-serif'; background-color: #e8ffef; background-blend-mode: lighten; padding: 10px; margin: 10px; width: 60%; min-width: 715px; display: block; margin-left: auto; margin-right: auto; box-shadow: 10px 10px 8px grey;">
                <Title name="Catalog Builder"/>
                <Header name="URL"/>
                <CatalogTextInput name="URL"/>
                <Header name="Style"/>
                <CatalogStyleRadioButton name="row" id="rowRad"/>
                <Label name="List"/>
                <CatalogStyleRadioButton name="col" id="colRad"/>
                <Label name="Grid"/>
                <Header name="Mode"/>
                <CatalogModeRadioButton name="light" id="lightRad"/>
                <Label name="Light"/>
                <CatalogModeRadioButton name="dark" id="darkRad"/>
                <Label name="Dark"/>
                <Header name="Copy the text below into your page. ..."/>
                <Extract name="&lt;iFrame src='http://127.0.0.1:3000/?darkmode=true&direction=row&courseID=' height='500px' width='910px'  sandbox='allow-scripts allow-top-navigation'/&gt;"/>
            </div>        
        );
    }
}

// Course Card Builder
export class CourseCardBuilder extends Component {
    constructor() {
        this.URL = "";
        this.style = "row";
        this.mode = "false";
        this.height = "180px";
        this.width = "100%";
        this.styling = "border-style: ridge";
    }
    courseURL_Entered(val) {
        this.URL = encodeURIComponent(val);
        updateCardExtract();
    }
    cardStyleRadioClick(sourceRad) {
        var rowRad = document.getElementById("rowRad");
        var colRad = document.getElementById("colRad");
        
        if (sourceRad == rowRad) {
            if (rowRad.checked == true) {
                colRad.checked = false;
                this.style="row";
                this.height="180px";
                this.width="100%";
            }
            else {
                colRad.checked = true;
                this.style="col";
                this.height="245px";
                this.width="210px";
            }
        }
        else {
            if (colRad.checked == true) {
                rowRad.checked = false;
                this.style = "col";
                this.height="245px";
                this.width="210px";
            }
            else {
                rowRad.checked = true;
                this.style = "row";
                this.height="180px";
                this.width="100%";
            }
        }
        updateCardExtract();
    }
    cardModeRadioClick(sourceRad) {
        var lightRad = document.getElementById("lightRad");
        var darkRad = document.getElementById("darkRad");
        
        if (sourceRad == lightRad) {
            if (lightRad.checked == true) {
                darkRad.checked = false;
                this.mode="false";
                this.styling="border-style: ridge";
            }
            else {
                darkRad.checked = true;
                this.mode="true";
                this.styling="border-style: none";
            }
        }
        else {
            if (darkRad.checked == true) {
                lightRad.checked = false;
                this.mode = "true";
                this.styling="border-style: none";
            }
            else {
                lightRad.checked = true;
                this.mode = "false";
                this.styling="border-style: ridge";
            }
        }
        updateCardExtract();
    }
    updateCardExtract() {
        var extract = document.getElementById("extract");
        var text = `&lt;iframe src = 'http://127.0.0.1:3006/build/index.html?darkmode=${card_mode}&direction=${card_style}&courseID=${courseURL}' height='${card_height}' width='${card_width}' style='${card_styling}' &gt; &lt;/iframe&gt`
            
        extract.innerHTML = text;
    }
    render() {
        return (
            <div onload="updateExtract()" style="font-family: Helvetica, 'sans-serif'; background-color: #e8ffef; background-blend-mode: lighten; padding: 10px; margin: 10px; width: 60%; min-width: 715px; display: block; margin-left: auto; margin-right: auto; box-shadow: 10px 10px 8px grey;">
                <Title name="Course Card Builder"/>
                <Header name="Course URL"/>
                <CardTextInput name="CourseURL"/>
                <Header name="Style"/>
                <CardStyleRadioButton name="row" id="rowRad"/>
                <Label name="Row"/>
                <CardStyleRadioButton name="col" id="colRad"/>
                <Label name="Column"/>
                <Header name="Mode"/>
                <CardModeRadioButton name="light" id="lightRad"/>
                <Label name="Light"/>
                <CardModeRadioButton name="dark" id="darkRad"/>
                <Label name="Dark"/>
                <Header name="Copy the text below into your page. ..."/>
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
            //document.getElementById("demo").innerHTML = "<CourseCardBuilder/>" ;
        }
        if (selection == "catalog") {
            //document.getElementById("demo").innerHTML = "<CatalogBuilder/>" ;
        }
    }
    render() {
        return (
            <div onload="updateExtract()">
                <Title name="Builder"/> 

            </div>
        );
    }  
}

ReactDOM.render(<Builder/>, document.getElementById('root'));