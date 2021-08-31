import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    const characters = props;
    this.state = {
      message: "",
      characters
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  handleCharacterChange = (event) => {
    this.setState({
characters: event.target.value
    })
  }
  render() {
    let numbofChars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleMessageChange(event)} name="message" id="message" value = {this.state.message} />
        <h5 >{numbofChars}</h5>
      </div>
    );
  }
}

export default TwitterMessage;
