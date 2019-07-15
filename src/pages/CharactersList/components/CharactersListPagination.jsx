import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Pagination } from 'antd';

import Row from 'components/Row/Row';

const CharactersListPagination = ({ paginationTotal, onChange }) => {
  const [ currentPage, setCurrentPage ] = useState(1);

  if (!paginationTotal) {
    return null;
  }
  const onChangePage = (page) => {
    setCurrentPage(page);
    onChange(page);
  };

  return(
    <Row>
      <Pagination
        simple
        defaultPageSize={20}
        defaultCurrent={currentPage}
        total={paginationTotal}
        onChange={onChangePage}
        current={currentPage}
      />
    </Row>
  );
};

CharactersListPagination.propTypes = {
  paginationTotal: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(CharactersListPagination);