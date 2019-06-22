/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

/**
 * Export data section
 */
const Export = (props) => {
  const {
    assets,
    liabilities,
    isOpen,
    toggleIsOpen,
  } = props;

  const [exportConfig, setExportConfig] = useState({
    includeAssets: true,
    includeLiabilities: true,
  });

  const handleOnChange = (event) => {
    const config = { ...exportConfig, [event.target.name]: event.target.checked };
    setExportConfig(config);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      assets: exportConfig.includeAssets ? assets : [],
      liabilities: exportConfig.includeLiabilities ? liabilities : [],
    };
    const fileName = 'net-worth-export.json';
    const content = JSON.stringify(data, null, 2);
    const contentType = 'application/json;charset=utf-8,';

    // Create a hidden anchor element and trigger file download
    const element = document.createElement('a');
    element.setAttribute('href', `data:${contentType}${encodeURIComponent(content)}`);
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    toggleIsOpen(false);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    toggleIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        Export Your Data
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <p>Select the data you want to include in export.</p>
          <fieldset className="form-group">
            <input type="checkbox" name="includeAssets" value={exportConfig.includeAssets} defaultChecked={exportConfig.includeAssets} onChange={handleOnChange} />
            {' '}
            Include assets data
          </fieldset>
          <fieldset className="form-group">
            <input type="checkbox" name="includeLiabilities" value={exportConfig.includeLiabilities} defaultChecked={exportConfig.includeLiabilities} onChange={handleOnChange} />
            {' '}
            Include liabilities data
          </fieldset>
          <button type="submit" className="btn btn-danger">Download</button>
          {' '}
          <button type="button" className="btn btn-default" onClick={handleCancel}>Cancel</button>
        </form>
      </ModalBody>
    </Modal>
  );
};

Export.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired,
  assets: PropTypes.arrayOf(PropTypes.object).isRequired,
  liabilities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Export;
