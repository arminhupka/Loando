import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

// Utils
import useModalState from '../hooks/useModalState';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import { Row, Col } from '../styles/GlobalStyle';
import Heading from '../components/Heading/Heading';
import UserDetails from '../components/UserDetails/UserDetails';
import ChangePasswordModal from '../components/ChangePasswordModal/ChangePasswordModal';
import ChangeAccountModal from '../components/ChangeAccountModal/ChangeAccountModal';
import Button from '../components/Button/Button';

const ProfileSettingsView = () => {
  const userDetails = useSelector((state) => state.userReducer.data);

  const { isVisible, onOpen, onClose } = useModalState();
  const { isVisible: isAccountModalVisible, onOpen: onOpenAccountModal, onClose: onCloseAcctounModal } = useModalState();

  const handleOpenModal = () => onOpen();

  const handleCloseModal = () => onClose();

  const handleChangeAccountModalClose = () => onCloseAcctounModal();
  const handleChangeAccountModalOpen = () => onOpenAccountModal();

  return (
    <>
      <Helmet>
        <title>Ustawienia | Loando</title>
      </Helmet>
      <AccountLayout>
        {isAccountModalVisible && <ChangeAccountModal onClose={handleChangeAccountModalClose} />}
        {isVisible && <ChangePasswordModal onClose={handleCloseModal} />}
        <Heading title='Ustawienia' />
        {userDetails && <UserDetails data={userDetails} />}
        <Row>
          <Col>
            <Button onClick={handleOpenModal}>Zmień hasło</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button outline onClick={handleChangeAccountModalOpen}>
              Zmień numer rachunku
            </Button>
          </Col>
        </Row>
      </AccountLayout>
    </>
  );
};

export default ProfileSettingsView;
