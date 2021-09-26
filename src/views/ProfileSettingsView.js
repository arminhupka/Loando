import React from 'react';
import { Helmet } from 'react-helmet';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components

const ProfileSettingsView = () => {
  return (
    <>
      <Helmet>
        <title>Ustawienia | Loando</title>
      </Helmet>
      <AccountLayout>
        <h1>Settings View</h1>
      </AccountLayout>
    </>
  );
};

export default ProfileSettingsView;
