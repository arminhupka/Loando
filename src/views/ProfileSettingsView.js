import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import Heading from '../components/Heading/Heading';
import UserDetails from '../components/UserDetails/UserDetails';
import LinkButton from '../components/LinkButton/LinkButton';

const ProfileSettingsView = () => {
  const userDetails = useSelector((state) => state.userReducer.data);

  return (
    <>
      <Helmet>
        <title>Ustawienia | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Ustawienia' />
        {userDetails && <UserDetails data={userDetails} />}
        <LinkButton to='/konto/ustawienia/zmien-haslo'>Zmień hasło</LinkButton>
      </AccountLayout>
    </>
  );
};

export default ProfileSettingsView;
