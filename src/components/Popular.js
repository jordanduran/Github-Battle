import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';

function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'CSS', 'Java', 'Python'];

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
      selectedLanguage: 'All',
      repos: null,
      error: null
    };
  }

  updateLanguage = selectedLanguage => {
    this.setState({
      selectedLanguage,
      error: null,
      repos: null
    });

    fetchPopularRepos(selectedLanguage)
      .then(repos =>
        this.setState({
          repos,
          error: null
        })
      )
      .catch(() => {
        // console.warn('Error fetching repos: ', error);

        this.setState({
          error: `There was an error fetching the repositories.`
        });
      });
  };

  isLoading = () => {
    return this.state.repos === null && this.state.error === null;
  };

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />

        {this.isLoading() && <p>LOADING</p>}

        {error && <p>{error}</p>}

        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </Fragment>
    );
  }
}

export default Popular;
