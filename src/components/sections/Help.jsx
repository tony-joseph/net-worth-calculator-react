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
const Help = (props) => {
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
        How to Use Net Worth Calculator
      </ModalHeader>
      <ModalBody>
        <p>
          Net worth calculator is an easy way to find the net worth of a person online. This tool
          takes the list of all your assets and liabilities and find the difference. You can also
          export your data, import a previously exported data and download or print your data.
        </p>
        <hr />

        <h6>How to Add a New Asset?</h6>
        <ol>
          <li>
            Click on the ADD NEW ASSET button. A pop up box will open.
          </li>
          <li>
            Select the category and sub-category for your asset.
          </li>
          <li>
            Add a label for your asset and enter the value of asset.
          </li>
          <li>
            Click on the ADD button.
          </li>
        </ol>
        <hr />

        <h6>How to Add a New Liability?</h6>
        <ol>
          <li>
            Click on the ADD NEW LIABILITY button. A pop up box will open.
          </li>
          <li>
            Select the category and sub-category for your liability.
          </li>
          <li>
            Add a label for your liability and enter the value of liability.
          </li>
          <li>
            Click on the ADD button.
          </li>
        </ol>
        <hr />

        <h6>How to Export Your Data?</h6>
        <ol>
          <li>
            Click on the EXPORT DATA button. A pop up box will open.
          </li>
          <li>
            Select the the contents you want to include in your export.
          </li>
          <li>
            Click on the DOWNLOAD button.
          </li>
        </ol>
        <hr />

        <h6>How to Import Your Data?</h6>
        <ol>
          <li>
            Click on the IMPORT DATA button. A pop up box will open.
          </li>
          <li>
            Select the file you want to import.
          </li>
          <li>
            Click on the IMPORT button.
          </li>
        </ol>
        <hr />

        <h6>How to Print or Download Your Data?</h6>
        <p>
          Click on the PRINT/DOWNLOAD button. Your browser&apos;s print dialogue will open.
          This button will not be visible if your browser does not support printing.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleCancel}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

Help.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired,
};

export default Help;
