import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const PaginationWrapper = styled.div``;

const NavButton = styled.button``;

const NavList = styled.ul``;

const Number = styled.li``;

const Pagination = ({ itemsPerPage, dataLength, currentPage, changePageFn }) => {
  const pageNumbers = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(dataLength / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const testFn = () => {
    changePageFn(currentPage + 1);
  };

  return (
    <PaginationWrapper>
      <NavButton type='button' onClick={testFn}>
        Prev
      </NavButton>
      <NavList>
        {pageNumbers.map((page) => (
          <Number key={page}>
            <Link to={`/panel/pozyczki?page=${page}`}>{page}</Link>
          </Number>
        ))}
      </NavList>
      <NavButton type='button' onClick={testFn}>
        Next
      </NavButton>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  dataLength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  changePageFn: PropTypes.func.isRequired,
};

export default Pagination;
