/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

/**
 * Export data section
 */
const About = (props) => {
  const {
    isOpen,
    toggleIsOpen,
  } = props;

  const handleCancel = (event) => {
    event.preventDefault();
    toggleIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        About New Worth Calculator
      </ModalHeader>
      <ModalBody>
        <p>
          Net worth calculator is an easy way to find the net worth of a person online. This tool
          takes the list of all your assets and liabilities and find the difference. You can also
          export your data, import a previously exported data and download or print your data.
        </p>
        <p>
          This tool is based on
          {' '}
          <a href="https://www.schwabmoneywise.com/public/file/P-4038856/Net-Worth-Worksheet.pdf">net worth worksheet from Charles Schwab</a>
          . The source code of this application is open source and is available from
          {' '}
          <a href="https://github.com/tony-joseph/net-worth-calculator-react">Github</a>
          .
        </p>
        <p>
          Net worth calculator is part of
          {' '}
          <a href="https://crimsonhack.com">Crimson Hack&apos;s</a>
          {' '}
          finance tool set. All rights are reserved with
          {' '}
          <a href="https://tonyj.me">Tony Joseph</a>
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleCancel}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

About.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired,
};

export default About;
