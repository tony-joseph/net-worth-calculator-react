/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

/**
 * Export data section
 */
const Import = (props) => {
  const {
    isOpen,
    toggleIsOpen,
    setAssets,
    setLiabilities,
  } = props;

  const fileInput = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.readAsBinaryString((fileInput.current.files[0]));
    reader.onloadend = () => {
      try {
        const { assets, liabilities } = JSON.parse(reader.result);
        if (assets) {
          setAssets(assets);
        }
        if (liabilities) {
          setLiabilities(liabilities);
        }
      } catch (e) {
        console.log(e);
        alert('Invalid file');
      }
    };

    toggleIsOpen(false);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    toggleIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        Import Your Data
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <p>
            Please select the file you have previously exported from Net Worth Calculator.
            Note that importing data will overwrite any data you have already entered.
          </p>
          <fieldset className="form-group">
            <input type="file" ref={fileInput} required />
          </fieldset>
          <hr />
          <button type="submit" className="btn btn-danger btn-sm">Import</button>
          {' '}
          <button type="button" className="btn btn-default btn-sm" onClick={handleCancel}>Cancel</button>
        </form>
      </ModalBody>
    </Modal>
  );
};

Import.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired,
  setAssets: PropTypes.func.isRequired,
  setLiabilities: PropTypes.func.isRequired,
};

export default Import;
