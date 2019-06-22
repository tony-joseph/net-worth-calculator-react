/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';

import AddItem from '../components/sections/AddItem';
import Export from '../components/sections/Export';
import Import from '../components/sections/Import';
import ItemList from '../components/sections/ItemList';
import NetWorth from '../components/sections/NetWorth';
import { ASSETS, LIABILITIES } from '../models';


/**
 * Generates initial data for a model
 * @param {array} model Model of the data to be generated.
 * @return {Array} Array with model data modified with initial values
 */
const generateInitialData = model => model.map(
  section => ({
    ...section,
    types: section.types.map(
      type => ({ ...type, values: [] }),
    ),
  }),
);

/**
 * Calculate net worth page
 */
const Calculate = () => {
  const [assets, setAssets] = useState(generateInitialData(ASSETS));
  const [liabilities, setLiabilities] = useState(generateInitialData(LIABILITIES));

  // State to handle modals for adding items
  const [isAddAssetOpen, setAddAssetOpen] = useState(false);
  const [isAddLiabilityOpen, setAddLiabilityOpen] = useState(false);

  // States to handle import and export
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);

  /**
   * Function to insert a new asset to state
   * @param {Object} assetDetail Details of new asset
   */
  const addAsset = (assetDetail) => {
    const assetList = assets.map(section => ({
      ...section,
      types: section.types.map((type) => {
        const typeObj = { ...type };
        if (type.slug === assetDetail.type && section.slug === assetDetail.section) {
          typeObj.values = [
            ...type.values,
            { label: assetDetail.label, value: assetDetail.value, id: assetDetail.id },
          ];
        }
        return typeObj;
      }),
    }));
    setAssets(assetList);
    setAddAssetOpen(false);
  };

  /**
   * Function to insert a new liability into state
   * @param {Object} liabilityDetail Details of new liability
   */
  const addLiability = (liabilityDetail) => {
    const liabilityList = liabilities.map(section => ({
      ...section,
      types: section.types.map((type) => {
        const typeObj = { ...type };
        if (type.slug === liabilityDetail.type && section.slug === liabilityDetail.section) {
          typeObj.values = [
            ...type.values,
            { label: liabilityDetail.label, value: liabilityDetail.value, id: liabilityDetail.id },
          ];
        }
        return typeObj;
      }),
    }));
    setLiabilities(liabilityList);
    setAddLiabilityOpen(false);
  };

  /**
   * Removes an asset from state
   * @param {Object} assetDetail The asset to be deleted
   */
  const removeAsset = (assetDetail) => {
    const assetList = assets.map(section => ({
      ...section,
      types: section.types.map((type) => {
        const typeObj = { ...type };
        typeObj.values = typeObj.values.filter(value => value.id !== assetDetail.id);
        return typeObj;
      }),
    }));
    setAssets(assetList);
  };

  /**
   * Removes a liability from state
   * @param {Object} liabilityDetail The liability to be deleted
   */
  const removeLiability = (liabilityDetail) => {
    const liabilityList = liabilities.map(section => ({
      ...section,
      types: section.types.map((type) => {
        const typeObj = { ...type };
        typeObj.values = typeObj.values.filter(value => value.id !== liabilityDetail.id);
        return typeObj;
      }),
    }));
    setLiabilities(liabilityList);
  };

  return (
    <>
      <NetWorth assets={assets} liabilities={liabilities} />
      <p>&nbsp;</p>
      <Button color="success" className="no-print" onClick={() => setAddAssetOpen(true)}>Add New Asset</Button>
      {' '}
      <Button color="danger" className="no-print" onClick={() => setAddLiabilityOpen(true)}>Add New Liability</Button>
      {' '}
      <Button color="default" className="no-print" onClick={() => setIsExportOpen(true)}>Export Data</Button>
      {' '}
      <Button color="default" className="no-print" onClick={() => setIsImportOpen(true)}>Import Data</Button>
      {' '}
      { window.print ? <Button color="primary" className="no-print" onClick={() => window.print()}>Print/Download</Button> : '' }
      <p>&nbsp;</p>
      <Row>
        <Col md="6">
          <h4 className="text-center">Your Assets</h4>
          <hr />
          <ItemList items={assets} handleRemoveItem={removeAsset} />
        </Col>
        <Col md="6">
          <h4 className="text-center">Your Liabilities</h4>
          <hr />
          <ItemList items={liabilities} handleRemoveItem={removeLiability} />
        </Col>
      </Row>
      <Export
        assets={assets}
        liabilities={liabilities}
        isOpen={isExportOpen}
        toggleIsOpen={setIsExportOpen}
      />
      <Import
        isOpen={isImportOpen}
        toggleIsOpen={setIsImportOpen}
        setAssets={setAssets}
        setLiabilities={setLiabilities}
      />
      <AddItem handleAddItem={addAsset} model={ASSETS} isOpen={isAddAssetOpen} toggleIsOpen={setAddAssetOpen} title="Add New Asset" />
      <AddItem handleAddItem={addLiability} model={LIABILITIES} isOpen={isAddLiabilityOpen} toggleIsOpen={setAddLiabilityOpen} title="Add New Liability" />
    </>
  );
};

export default Calculate;
