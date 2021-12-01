import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Utils
import devices from '../../utils/devices';

// Styled Componetns
const ListWrapper = styled.div``;

const UserList = styled.ul``;

const UserItem = styled.li`
  margin-bottom: 1rem;
  border: 0.2rem solid ${({ theme }) => theme.gray[300]};
  border-radius: ${({ theme }) => theme.radius.regular};
  overflow: hidden;

  @media screen and ${devices.lg} {
    display: flex;
  }
`;

const LabelWrapper = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.gray[100]};

  span {
    font-weight: 500;
  }

  @media screen and ${devices.lg} {
    flex: 1;
    text-align: left;
    background: #fff;
  }
`;

const DataWrapper = styled.div`
  text-align: center;

  @media screen and ${devices.lg} {
    flex: 2;
    text-align: left;
  }
`;

const Data = styled.span`
  padding: 1.5rem 2rem;
  display: block;
`;

const UserDetails = ({ data }) => {
  return (
    <ListWrapper>
      <UserList>
        <UserItem>
          <LabelWrapper>
            <Data>Imię i Nazwisko</Data>
          </LabelWrapper>
          <DataWrapper>
            <Data>{`${data.firstName} ${data.lastName}`}</Data>
          </DataWrapper>
        </UserItem>
        <UserItem>
          <LabelWrapper>
            <Data>PESEL</Data>
          </LabelWrapper>
          <DataWrapper>
            <Data>{data.pesel}</Data>
          </DataWrapper>
        </UserItem>
        <UserItem>
          <LabelWrapper>
            <Data>Numer dowodu osobistego</Data>
          </LabelWrapper>
          <DataWrapper>
            <Data>{data.id}</Data>
          </DataWrapper>
        </UserItem>
        <UserItem>
          <LabelWrapper>
            <Data>Numer rachunku bankowego</Data>
          </LabelWrapper>
          <DataWrapper>
            <Data>{!data.accountNumber ? <span>Nie wprowadzono</span> : data.accountNumber}</Data>
          </DataWrapper>
        </UserItem>
        <UserItem>
          <LabelWrapper>
            <Data>Adres</Data>
          </LabelWrapper>
          <DataWrapper>
            <Data>{`${data.street} ${data.houseNumber} ${data.flatNumber && `m. ${data.flatNumber}`}, ${data.postalCode
              .toString()
              .substr(0, 2)}-${data.postalCode.toString().substr(2)} ${data.city}`}</Data>
          </DataWrapper>
        </UserItem>
        <UserItem>
          <LabelWrapper>
            <Data>Numer telefonu</Data>
          </LabelWrapper>
          <DataWrapper>
            <Data>{data.phone}</Data>
          </DataWrapper>
        </UserItem>
        <UserItem>
          <LabelWrapper>
            <Data>Email</Data>
          </LabelWrapper>
          <DataWrapper>
            <Data>{data.email}</Data>
          </DataWrapper>
        </UserItem>
      </UserList>
    </ListWrapper>
  );
};

UserDetails.propTypes = {
  data: PropTypes.objectOf(Object).isRequired,
};

export default UserDetails;
