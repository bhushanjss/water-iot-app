import { Typography } from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import selectors from 'src/modules/device/deviceSelectors';

function DeviceViewItem(props) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id}>
          <MaterialLink
            component={Link}
            to={`/device/${record.id}`}
          >
            {record.label}
          </MaterialLink>
        </div>
      );
    }

    return <div key={record.id}>{record.label}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <div style={{ marginBottom: '16px' }}>
      <Typography variant="subtitle2">
        {props.label}
      </Typography>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </div>
  );
}

DeviceViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default DeviceViewItem;
