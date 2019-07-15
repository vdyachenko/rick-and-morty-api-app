import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCharacters } from 'store/actions';
import { getCharacters, isCharactersListLoading, getPaginationTotal } from './CharactersListSelectors';
import { ComponentLoading, Row } from 'components';
import CharacterCard from './components/CharacterCard';
import CharactersListPagination from './components/CharactersListPagination';

const CharactersList = ({ characters, fetchCharacters, isLoading, paginationTotal }) => {
  useEffect(() => {
    fetchCharacters(1);
  }, [fetchCharacters]);

  return(
    <React.Fragment>
      <CharactersListPagination
        paginationTotal={paginationTotal}
        onChange={fetchCharacters}
      />
      <ComponentLoading isLoading={isLoading}>
        <Row>
          {
            characters.map(character => <CharacterCard key={character.id} {...character} />)
          }
        </Row>
      </ComponentLoading>
    </React.Fragment>
  );
};

CharactersList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchCharacters: PropTypes.func.isRequired,
  paginationTotal: PropTypes.number.isRequired,
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  }))
};

export default connect((state) => ({
  characters: getCharacters(state),
  isLoading: isCharactersListLoading(state),
  paginationTotal: getPaginationTotal(state)
}), {
  fetchCharacters
})(CharactersList);