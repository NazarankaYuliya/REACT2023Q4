import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <img src="/public/img/Star_Wars_Logo.png" alt="Logo" width={250} />
        <h1 className="header-title">Search App</h1>
      </header>
    );
  }
}

export default Header;
