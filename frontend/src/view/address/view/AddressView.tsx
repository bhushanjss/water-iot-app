import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

function AddressView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.address.fields.address1')}
          value={record.address1}
        />

        <TextViewItem
          label={i18n('entities.address.fields.address2')}
          value={record.address2}
        />

        <TextViewItem
          label={i18n('entities.address.fields.city')}
          value={record.city}
        />

        <TextViewItem
          label={i18n('entities.address.fields.tehsil')}
          value={record.tehsil}
        />

        <TextViewItem
          label={i18n('entities.address.fields.district')}
          value={record.district}
        />

        <TextViewItem
          label={i18n('entities.address.fields.state')}
          value={record.state}
        />

        <TextViewItem
          label={i18n('entities.address.fields.coords')}
          value={record.coords}
        />

        <TextViewItem
          label={i18n('entities.address.fields.pin')}
          value={record.pin}
        />

        <TextViewItem
          label={i18n('entities.address.fields.label')}
          value={record.label}
        />

        <UserViewItem
          label={i18n('entities.address.fields.user')}
          value={record.user}
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

export default AddressView;
