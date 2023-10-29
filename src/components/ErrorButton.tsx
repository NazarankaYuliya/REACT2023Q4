import { Component } from 'react';

class ErrorButton extends Component {
  handleClick = () => {
    throw new Error('This is an error');
  };

  render() {
    return (
      <button className="error-button" onClick={this.handleClick}>
        Trigger Error
      </button>
    );
  }
}

export default ErrorButton;
