import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';
import { isEmpty } from 'lodash-es';

import { Descriptions, Typography, Collapse } from 'antd';

import { fetchCharacter } from 'store/actions';
import { getCharacterInfo, isCharacterInfoLoading } from './CharacterInfoSelectors';
import { Row, GoBackButton, ComponentLoading, Image } from 'components';
import * as Styled from './CharacterInfo.style';

const { Paragraph } = Typography;
const { Panel } = Collapse;

const CharacterInfoDescription = ({ characterInfo }) => (
  <Styled.CharacterInfoDescription>
    <Descriptions title="Character Info" layout="horizontal" bordered column={{ xs: 1, lg: 1, md: 1, sm: 1 }}>
      <Descriptions.Item label="Name">{characterInfo.name}</Descriptions.Item>
      <Descriptions.Item label="Status">{characterInfo.status}</Descriptions.Item>
      <Descriptions.Item label="Species">{characterInfo.species}</Descriptions.Item>
      <Descriptions.Item label="Type">{characterInfo.type}</Descriptions.Item>
      <Descriptions.Item label="gender">{characterInfo.gender}</Descriptions.Item>
      <Descriptions.Item label="Origin">{characterInfo.origin.name}</Descriptions.Item>
      <Descriptions.Item label="Location">{characterInfo.location.name}</Descriptions.Item>
      <Descriptions.Item label="Episodes">
        <Collapse>
          <Panel header="List of episodes" key="1">
            {characterInfo.episode.map(ep => <Paragraph key={ep.id}>{ep.name}</Paragraph>)}
          </Panel>
        </Collapse>
      </Descriptions.Item>
    </Descriptions>
  </Styled.CharacterInfoDescription>
);

const CharacterInfo = (props) => {
  useEffect(() => {
    const { fetchCharacter, match: { params: { characterId } } } = props;
    fetchCharacter(characterId);
  }, [fetchCharacter, props.match.params.characterId]);
  const { isLoading, characterInfo } = props;

  return(
    <ComponentLoading isLoading={isLoading || isEmpty(characterInfo)}>
      <Styled.CharacterInfo>
        <GoBackButton />
        <Row>
          <Image alt="Character image" src={characterInfo.image}/>
        </Row>
        <Row>
         <CharacterInfoDescription characterInfo={characterInfo}/>
        </Row>
      </Styled.CharacterInfo>
    </ComponentLoading>
  );
};

CharacterInfo.propTypes = {
  match: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  characterInfo: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    type: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    }),
    location: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    }),
    episode: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      airDate: PropTypes.string
    }))
  })
};

export default connect((state) => ({
  isLoading: isCharacterInfoLoading(state),
  characterInfo: getCharacterInfo(state)
}), {
  fetchCharacter
})(CharacterInfo);