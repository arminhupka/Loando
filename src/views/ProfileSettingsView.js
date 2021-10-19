import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

// Utils
import useModalState from '../hooks/useModalState';

// Layout
import AccountLayout from '../layouts/AccountLayout';
import Button from '../components/Button/Button';

// Components
import Heading from '../components/Heading/Heading';
import UserDetails from '../components/UserDetails/UserDetails';
import ChangePasswordModal from '../components/ChangePasswordModal/ChangePasswordModal';

const ProfileSettingsView = () => {
  const userDetails = useSelector((state) => state.userReducer.data);

  const { isVisible, onOpen, onClose } = useModalState();

  const handleOpenModal = () => onOpen();

  const handleCloseModal = () => onClose();

  return (
    <>
      <Helmet>
        <title>Ustawienia | Loando</title>
      </Helmet>
      <AccountLayout>
        {isVisible && <ChangePasswordModal onClose={handleCloseModal} />}
        <Heading title='Ustawienia' />
        {userDetails && <UserDetails data={userDetails} />}
        <Button onClick={handleOpenModal}>Zmień hasło</Button>
      </AccountLayout>
    </>
  );
};

export default ProfileSettingsView;
