import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export class LanguageSelector extends Component {
  static contextType = LanguageContext;

  onLanguageChange = (language) => {
    this.context.onLanguageChange(language);
  };

  render() {
    return (
      <div>
        <div>Select language</div>
        <i
          className="nl flag"
          onClick={() => this.onLanguageChange("dutch")}
        ></i>
        <i
          className="us flag"
          onClick={() => this.onLanguageChange("english")}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
