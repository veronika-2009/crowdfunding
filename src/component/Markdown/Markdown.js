import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import db from '../firebase';
import ReactMarkdown from 'react-markdown';

class Markdown extends Component {
  constructor(props) {
    super(props);

    this.titleRef = React.createRef();
    this.bodyRef = React.createRef();
    // this.postFBRef = db.ref(`posts/${this.props.match.params.postId}`);
    this.state = {
      mdBody: ''
    };
  }

  componentDidMount() {
    // this.postFBRef.on('value', (snapshot) => {
    //   if (!snapshot.val()) return;
    //   this.titleRef.current &&
    //     (this.titleRef.current.value = snapshot.val().title);
    //   this.bodyRef.current &&
    //     (this.bodyRef.current.value = snapshot.val().body);
    //   this.setState({
    //     mdBody: snapshot.val().body
    //   });
    // });
  }
//   onChange = () => {
//     this.postFBRef
//       .set({
//         title: this.titleRef.current.value,
//         body: this.bodyRef.current.value
//       })
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col col-sm-12">
            <textarea
              className="form-control"
              placeholder="Description"
              ref={this.bodyRef}
              type="text"
              onChange={this.onChange}
              rows={5}
            />
          </div>
          <div className="col col-sm-6">
            <ReactMarkdown
              source={this.state.mdBody}
              className="markdown-preview"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Markdown;



