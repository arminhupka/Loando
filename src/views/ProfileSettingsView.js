import React from 'react';
import { Helmet } from 'react-helmet';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import LabeledInput from '../components/LabeledInput/LabeledInput';
import Heading from '../components/Heading/Heading';

const ProfileSettingsView = () => {
  return (
    <>
      <Helmet>
        <title>Ustawienia | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Ustawienia' />
        <LabeledInput title='First Name' />
      </AccountLayout>
    </>
  );
};

export default ProfileSettingsView;
