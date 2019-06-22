/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

/**
 * Section to show values in an asset or liability type
 */
const ItemDetail = (props) => {
  const { values, handleRemoveItem } = props;

  const rows = values.map(item => (
    <tr key={item.id}>
      <td>{item.label}</td>
      <td>
        &#8377;
        {item.value}
      </td>
      <td className="no-print">
        <Button color="danger" size="sm" onClick={() => handleRemoveItem(item)}>Remove</Button>
      </td>
    </tr>
  ));

  return (
    <>
      {rows}
    </>
  );
};

ItemDetail.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default ItemDetail;
