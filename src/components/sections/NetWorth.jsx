/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Table } from 'reactstrap';

/**
 * Find the sum of values of assets and liabilities
 * @param {Array} items Assets or liabilities items
 */
const findSum = (items) => {
  // TODO: Use one map/reduce and array.flat
  const types = items.reduce((acc, section) => [...acc, ...section.types], []);
  const values = types.reduce((acc, type) => [...acc, ...type.values], []);
  const sum = values.reduce((acc, value) => acc + parseFloat(value.value), 0);
  return sum;
};

/**
 * Net worth section
 */
const NetWorth = (props) => {
  const { assets, liabilities } = props;
  const assetsSum = findSum(assets);
  const liabilitiesSum = findSum(liabilities);
  const netWorth = assetsSum - liabilitiesSum;

  return (
    <Card>
      <CardHeader>
        <h3 className="text-center">Your Net Worth</h3>
      </CardHeader>
      <Table bordered hover>
        <tbody>
          <tr className="table-success">
            <th>Assets</th>
            <th>
              &#8377;
              {assetsSum}
            </th>
          </tr>
          <tr className="table-danger">
            <th>Liabilities</th>
            <th>
              &#8377;
              {liabilitiesSum}
            </th>
          </tr>
          <tr className="table-primary">
            <th>Total Net Worth</th>
            <th>
              &#8377;
              {netWorth}
            </th>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

NetWorth.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.object).isRequired,
  liabilities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NetWorth;
