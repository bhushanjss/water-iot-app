import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

function DeviceView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.device.fields.label')}
          value={record.label}
        />
          <TextViewItem
              label={i18n('entities.device.fields.id')}
              value={record.id}
          />
        <TextViewItem
          label={i18n('entities.device.fields.deviceId')}
          value={record.deviceId}
        />

        <TextViewItem
          label={i18n('entities.device.fields.serialNumber')}
          value={record.serialNumber}
        />

        <UserViewItem
          label={i18n('entities.device.fields.user')}
          value={record.user}
        />

        <TextViewItem
          label={i18n('entities.device.fields.version')}
          value={record.version}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default DeviceView;
