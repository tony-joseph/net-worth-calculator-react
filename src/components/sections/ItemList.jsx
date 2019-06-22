/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import ItemSection from './ItemSection';

/**
 * Section to show list of assets and liabilities
 */
const ItemList = (props) => {
  const { items, handleRemoveItem } = props;
  const valuedItems = items.filter((asset) => {
    const valuesList = asset.types.map(
      type => type.values,
    );
    return valuesList.some(list => list.length);
  });

  const rows = valuedItems.map(section => (
    <React.Fragment key={section.slug}>
      <tr className="table-danger">
        <th colSpan="3" className="text-center">{section.title}</th>
      </tr>
      <ItemSection types={section.types} handleRemoveItem={handleRemoveItem} />
    </React.Fragment>
  ));

  return (
    <Table bordered>
      <tbody>
        {rows}
      </tbody>
    </Table>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default ItemList;
