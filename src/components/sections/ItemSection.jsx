/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import ItemDetail from './ItemDetail';

/**
 * Section to show a section data inside assets or liabilities
 */
const ItemSection = (props) => {
  const { types, handleRemoveItem } = props;
  const valuedTypes = types.filter(type => type.values.length);

  const rows = valuedTypes.map(type => (
    <React.Fragment key={type.slug}>
      <tr className="table-warning">
        <th colSpan="3">{type.title}</th>
      </tr>
      <ItemDetail values={type.values} handleRemoveItem={handleRemoveItem} />
    </React.Fragment>
  ));

  return (
    <>
      {rows}
    </>
  );
};

ItemSection.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default ItemSection;
