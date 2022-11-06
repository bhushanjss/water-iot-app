import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import DeviceViewItem from 'src/view/device/view/DeviceViewItem';
import AddressViewItem from "../../address/view/AddressViewItem";

function WaterReadingView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <UserViewItem
          label={i18n('entities.waterReading.fields.user')}
          value={record.user}
        />

        <DeviceViewItem
          label={i18n('entities.waterReading.fields.device')}
          value={record.device}
        />
        <AddressViewItem
          label={i18n('entities.person.fields.location')}
          value={record.location}
        />
        <TextViewItem
          label={i18n(
            'entities.waterReading.fields.dateTime',
          )}
          value={moment(record.dateTime).format(
            'YYYY-MM-DD HH:mm',
          )}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.type')}
          value={
            record.type &&
            i18n(
              `entities.waterReading.enumerators.type.${record.type}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.source')}
          value={
            record.source &&
            i18n(
              `entities.waterReading.enumerators.source.${record.source}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.remark')}
          value={record.remark}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.temperature')}
          value={record.temperature}
        />

        {record.pH != null && <TextViewItem
          label={i18n('entities.waterReading.fields.pH')}
          value={Number(record.pH).toFixed(7)}
        />}

        <TextViewItem
          label={i18n('entities.waterReading.fields.tds')}
          value={record.tds}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.conductivity')}
          value={record.conductivity}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.alkalinity')}
          value={record.alkalinity}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.hardness')}
          value={record.hardness}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.turbidity')}
          value={record.turbidity}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.oxygen')}
          value={record.oxygen}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.calcium')}
          value={record.calcium}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.magnesium')}
          value={record.magnesium}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.sodium')}
          value={record.sodium}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.potassium')}
          value={record.potassium}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.iron')}
          value={record.iron}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.chlorine')}
          value={record.chlorine}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.carbonate')}
          value={record.carbonate}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.bicarbonate')}
          value={record.bicarbonate}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.chloride')}
          value={record.chloride}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.sulphate')}
          value={record.sulphate}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.manganese')}
          value={record.manganese}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.nitrate')}
          value={record.nitrate}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.fluoride')}
          value={record.fluoride}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.silicate')}
          value={record.silicate}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.phosphate')}
          value={record.phosphate}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.arsenic')}
          value={record.arsenic}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.copper')}
          value={record.copper}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.cadmium')}
          value={record.cadmium}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.selenium')}
          value={record.selenium}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.mercury')}
          value={record.mercury}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.lead')}
          value={record.lead}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.zinc')}
          value={record.zinc}
        />

        <TextViewItem
          label={i18n('entities.waterReading.fields.boron')}
          value={record.boron}
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

export default WaterReadingView;
