import React from 'react';
import PropTypes from 'prop-types';

import { Card, Descriptions } from 'antd';

import { withLink } from 'hoc';
import { Image } from 'components';
import Styled from './CharacterCard.style';

const CharacterCard = ({ id, name, status, species, gender, image }) => (
  <Styled>
    <Card
      bordered
      hoverable
      cover={<Image alt="character image" src={image} />}
    >
      <Descriptions title={name} layout="horizontal" column={{ sm: 1 }}>
        <Descriptions.Item label="Status">{status}</Descriptions.Item>
        <Descriptions.Item label="Species">{species}</Descriptions.Item>
        <Descriptions.Item label="Gender">{gender}</Descriptions.Item>
      </Descriptions>
    </Card>
  </Styled>
);

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default withLink(CharacterCard, (props) => `/character/${props.id}`);
