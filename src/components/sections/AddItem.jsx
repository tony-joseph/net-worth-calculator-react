/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import uuid from 'uuid';

/**
 * Generates initial state data for assets and liabilities
 * @param {Array} model Model array for assets or liabilities
 */
const getInitialData = model => ({
  section: model[0].slug || '',
  type: model[0].types[0].slug || '',
  label: '',
  value: '',
});

/**
 * Add new asset or liability section
 */
const AddItem = (props) => {
  const {
    handleAddItem,
    model,
    title,
    isOpen,
    toggleIsOpen,
  } = props;

  const [asset, setAsset] = useState(getInitialData(model));

  const handleOnSectionChange = (event) => {
    const section = model.filter(assetSection => assetSection.slug === event.target.value)[0];
    const assetData = { ...asset, section: event.target.value, type: section.types[0].slug };
    setAsset(assetData);
  };

  const handleOnChange = (event) => {
    const assetData = { ...asset, [event.target.name]: event.target.value };
    setAsset(assetData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItem({ ...asset, id: uuid.v4() });
    setAsset(getInitialData(model));
  };

  const handleCancel = (event) => {
    event.preventDefault();
    toggleIsOpen(false);
    setAsset(getInitialData(model));
  };

  const sectionInput = model.map(
    section => <option key={section.slug} value={section.slug}>{section.title}</option>,
  );
  const { types } = model.filter(section => section.slug === asset.section)[0];
  const typesInput = types.map(
    type => <option key={type.slug} value={type.slug}>{type.title}</option>,
  );

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        {title}
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <fieldset className="form-group">
            <select className="form-control" value={asset.section} required="required" name="section" onChange={handleOnSectionChange}>
              {sectionInput}
            </select>
          </fieldset>
          <fieldset className="form-group">
            <select className="form-control" name="type" onChange={handleOnChange} value={asset.type} required="required">
              {typesInput}
            </select>
          </fieldset>
          <fieldset className="form-group">
            <input type="text" name="label" className="form-control" onChange={handleOnChange} placeholder="Label" value={asset.label} required="required" />
          </fieldset>
          <fieldset className="form-group">
            <input type="number" name="value" className="form-control" onChange={handleOnChange} placeholder="Value" value={asset.value} required="required" />
          </fieldset>
          <button type="submit" className="btn btn-danger">Add</button>
          {' '}
          <button type="button" className="btn btn-default" onClick={handleCancel}>Cancel</button>
        </form>
      </ModalBody>
    </Modal>
  );
};

AddItem.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  model: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  toggleIsOpen: PropTypes.func.isRequired,
};

export default AddItem;
