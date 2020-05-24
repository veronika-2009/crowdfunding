import React from "react";
import ReactMde from "react-mde";
import { withRouter } from "react-router-dom";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import styles from "./Markdown.module.css";
import axios from "axios";
import { FormattedMessage } from "react-intl";


function loadSuggestions(text) {
  return new Promise((accept, reject) => {
    setTimeout(() => {
      const suggestions = [
        {
          preview: "Andre",
          value: "@andre"
        },
        {
          preview: "Angela",
          value: "@angela"
        },
        {
          preview: "David",
          value: "@david"
        },
        {
          preview: "Louise",
          value: "@louise"
        }
      ].filter(i => i.preview.toLowerCase().includes(text.toLowerCase()));
      accept(suggestions);
    }, 250);
  });
}
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});
function Markdown(props) {
  const [value, setValue] = React.useState();
  const [selectedTab, setSelectedTab] = React.useState("write");
  const submitDescription = (e) => {
    e.preventDefault()
    const idCompany = props.match.params.id
    axios.post("http://localhost:4000/saveDescription/" + idCompany, { value })
      .then(function (response) {
        if (response) {
          return props.history.push("/myCabinet");
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className={styles.container}>
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        loadSuggestions={loadSuggestions}
        childProps={{
          writeButton: {
            tabIndex: -1
          }
        }}
      />
      <button style={{ marginTop: "20px", padding: "7px" }}
        className="btn btn-danger" onClick={(e) => submitDescription(e)}><FormattedMessage id="navigation.saveAll" /></button>
    </div>
  );
}
export default withRouter(Markdown);



