// app/components/PaymentSuccessModal.jsx

import React from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PaymentSuccessModal = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen} centered={true}>
      <ModalHeader className="bg-warning text-white" style={{ border: 'none',padding:"25px" }}>
        <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Mail send successfully, you will contact you soon
      </ModalHeader>
    </Modal>
  );
};

export default PaymentSuccessModal;
