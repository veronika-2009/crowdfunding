import  React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import styles from "./Markdown.module.css";
import { connect } from "react-redux";
import { setMarkdown } from "../../Redux/companyReducer";


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
const EditMarkdown =(props) => {
    
const [value, setValue] = React.useState(props.startEdit);
const [selectedTab, setSelectedTab] = React.useState("write");
  const id = props.id;
          props.setMarkdownCreator({ id:id, value: value })
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
    </div>
  );
}
let mapDispatchToProps = (dispatch) => {
    return {
        setMarkdownCreator: (textMarkdown) => {
            dispatch(setMarkdown(textMarkdown))
        }
    }
}
export default connect(null, mapDispatchToProps)(EditMarkdown);
