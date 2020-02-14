import React, { Component } from 'react';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };
  }

  updateLanguage = selectedLanguage => {
    this.setState({
      selectedLanguage
    });
  };

  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'CSS', 'Python'];

    return (
      <ul className='flex-center'>
        {languages.map(language => (
          <li key={language}>
            <button
              className='btn-clear nav-link'
              style={
                language === this.state.selectedLanguage
                  ? { color: 'rgb(187, 46, 31)' }
                  : null
              }
              onClick={() => this.updateLanguage(language)}
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Popular;