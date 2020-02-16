import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'CSS', 'Python'];

  return (
    <ul className='flex-center'>
      {languages.map(language => (
        <li key={language}>
          <button
            className='btn-clear nav-link'
            style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
};

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
    const { selectedLanguage } = this.state;
    return (
      <Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
      </Fragment>
    );
  }
}

export default Popular;
