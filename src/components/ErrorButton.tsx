import { Component } from 'react';

class ErrorButton extends Component {
  state = {
    hasError: false,
  };

  handleClick = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Error from button');
    }

    return (
      <button className="error-button" onClick={this.handleClick}>
        Trigger Error
      </button>
    );
  }
}

export default ErrorButton;
