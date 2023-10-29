import React from 'react';
import '../styles/InputField.css';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="input-field">
        <label>
          {this.props.label}:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default InputField;