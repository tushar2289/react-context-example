import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export class Field extends Component {
  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {({ language }) => (language === "english" ? "Name" : "Naan")}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Field;
