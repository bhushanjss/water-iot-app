import { Box } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import waterReadingSelectors from 'src/modules/waterReading/waterReadingSelectors';
import destroyActions from 'src/modules/waterReading/destroy/waterReadingDestroyActions';
import destroySelectors from 'src/modules/waterReading/destroy/waterReadingDestroySelectors';
import actions from 'src/modules/waterReading/list/waterReadingListActions';
import selectors from 'src/modules/waterReading/list/waterReadingListSelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import TableCellCustom from 'src/view/shared/table/TableCellCustom';
import UserListItem from 'src/view/user/list/UserListItem';
import moment from 'moment';
import DeviceListItem from 'src/view/device/list/DeviceListItem';
import AddressListItem from "../../address/list/AddressListItem";

function WaterReadingListTable(props) {
  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    waterReadingSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    waterReadingSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'asc'
        ? 'desc'
        : 'asc';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <>
      <Box
        style={{
          display: 'block',
          width: '100%',
          overflowX: 'auto',
        }}
      >
        <Table
          style={{
            borderRadius: '5px',
            border: '1px solid rgb(224, 224, 224)',
            borderCollapse: 'initial',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCellCustom padding="checkbox">
                {hasRows && (
                  <Checkbox
                    checked={Boolean(isAllSelected)}
                    onChange={() => doToggleAllSelected()}
                    size="small"
                  />
                )}
              </TableCellCustom>
              <TableCellCustom
                label={i18n(
                  'entities.waterReading.fields.user',
                )}
              />
              <TableCellCustom
                label={i18n(
                  'entities.waterReading.fields.device',
                )}
              />
              <TableCellCustom
                  label={i18n(
                      'entities.waterReading.fields.location',
                  )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'dateTime'}
                label={i18n(
                  'entities.waterReading.fields.dateTime',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'type'}
                label={i18n(
                  'entities.waterReading.fields.type',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'source'}
                label={i18n(
                  'entities.waterReading.fields.source',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'remark'}
                label={i18n(
                  'entities.waterReading.fields.remark',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'temperature'}
                label={i18n(
                  'entities.waterReading.fields.temperature',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'pH'}
                label={i18n(
                  'entities.waterReading.fields.pH',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'tds'}
                label={i18n(
                  'entities.waterReading.fields.tds',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'conductivity'}
                label={i18n(
                  'entities.waterReading.fields.conductivity',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'alkalinity'}
                label={i18n(
                  'entities.waterReading.fields.alkalinity',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'hardness'}
                label={i18n(
                  'entities.waterReading.fields.hardness',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'turbidity'}
                label={i18n(
                  'entities.waterReading.fields.turbidity',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'oxygen'}
                label={i18n(
                  'entities.waterReading.fields.oxygen',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'calcium'}
                label={i18n(
                  'entities.waterReading.fields.calcium',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'magnesium'}
                label={i18n(
                  'entities.waterReading.fields.magnesium',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'sodium'}
                label={i18n(
                  'entities.waterReading.fields.sodium',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'potassium'}
                label={i18n(
                  'entities.waterReading.fields.potassium',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'iron'}
                label={i18n(
                  'entities.waterReading.fields.iron',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'chlorine'}
                label={i18n(
                  'entities.waterReading.fields.chlorine',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'carbonate'}
                label={i18n(
                  'entities.waterReading.fields.carbonate',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'bicarbonate'}
                label={i18n(
                  'entities.waterReading.fields.bicarbonate',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'chloride'}
                label={i18n(
                  'entities.waterReading.fields.chloride',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'sulphate'}
                label={i18n(
                  'entities.waterReading.fields.sulphate',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'manganese'}
                label={i18n(
                  'entities.waterReading.fields.manganese',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'nitrate'}
                label={i18n(
                  'entities.waterReading.fields.nitrate',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'fluoride'}
                label={i18n(
                  'entities.waterReading.fields.fluoride',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'silicate'}
                label={i18n(
                  'entities.waterReading.fields.silicate',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'phosphate'}
                label={i18n(
                  'entities.waterReading.fields.phosphate',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'arsenic'}
                label={i18n(
                  'entities.waterReading.fields.arsenic',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'copper'}
                label={i18n(
                  'entities.waterReading.fields.copper',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'cadmium'}
                label={i18n(
                  'entities.waterReading.fields.cadmium',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'selenium'}
                label={i18n(
                  'entities.waterReading.fields.selenium',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'mercury'}
                label={i18n(
                  'entities.waterReading.fields.mercury',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'lead'}
                label={i18n(
                  'entities.waterReading.fields.lead',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'zinc'}
                label={i18n(
                  'entities.waterReading.fields.zinc',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'boron'}
                label={i18n(
                  'entities.waterReading.fields.boron',
                )}
                align="right"
              />              
              <TableCellCustom size="md" />
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <TableRow>
                <TableCell colSpan={100}>
                  <Spinner />
                </TableCell>
              </TableRow>
            )}
            {!loading && !hasRows && (
              <TableRow>
                <TableCell colSpan={100}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {i18n('table.noData')}
                  </div>
                </TableCell>
              </TableRow>
            )}
            {!loading &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedKeys.includes(
                        row.id,
                      )}
                      onChange={() =>
                        doToggleOneSelected(row.id)
                      }
                      size="small"
                    />
                  </TableCell>
                <TableCell>
                  <UserListItem value={row.user} />
                </TableCell>
                <TableCell>
                  <DeviceListItem value={row.device} />
                </TableCell>
                <TableCell>
                  <AddressListItem value={row.location} />
                </TableCell>
                <TableCell>
                  {row.dateTime
                    ? moment(row.dateTime).format(
                        'YYYY-MM-DD HH:mm',
                      )
                    : null}
                </TableCell>
                <TableCell>
                  {row.type
                    ? i18n(
                        `entities.waterReading.enumerators.type.${row.type}`,
                      )
                    : null}
                </TableCell>
                <TableCell>
                  {row.source
                    ? i18n(
                        `entities.waterReading.enumerators.source.${row.source}`,
                      )
                    : null}
                </TableCell>
                <TableCell>{row.remark}</TableCell>
                <TableCell align="right">{row.temperature}</TableCell>
                <TableCell align="right">{row.pH}</TableCell>
                <TableCell align="right">{row.tds}</TableCell>
                <TableCell align="right">{row.conductivity}</TableCell>
                <TableCell align="right">{row.alkalinity}</TableCell>
                <TableCell align="right">{row.hardness}</TableCell>
                <TableCell align="right">{row.turbidity}</TableCell>
                <TableCell align="right">{row.oxygen}</TableCell>
                <TableCell align="right">{row.calcium}</TableCell>
                <TableCell align="right">{row.magnesium}</TableCell>
                <TableCell align="right">{row.sodium}</TableCell>
                <TableCell align="right">{row.potassium}</TableCell>
                <TableCell align="right">{row.iron}</TableCell>
                <TableCell align="right">{row.chlorine}</TableCell>
                <TableCell align="right">{row.carbonate}</TableCell>
                <TableCell align="right">{row.bicarbonate}</TableCell>
                <TableCell align="right">{row.chloride}</TableCell>
                <TableCell align="right">{row.sulphate}</TableCell>
                <TableCell align="right">{row.manganese}</TableCell>
                <TableCell align="right">{row.nitrate}</TableCell>
                <TableCell align="right">{row.fluoride}</TableCell>
                <TableCell align="right">{row.silicate}</TableCell>
                <TableCell align="right">{row.phosphate}</TableCell>
                <TableCell align="right">{row.arsenic}</TableCell>
                <TableCell align="right">{row.copper}</TableCell>
                <TableCell align="right">{row.cadmium}</TableCell>
                <TableCell align="right">{row.selenium}</TableCell>
                <TableCell align="right">{row.mercury}</TableCell>
                <TableCell align="right">{row.lead}</TableCell>
                <TableCell align="right">{row.zinc}</TableCell>
                <TableCell align="right">{row.boron}</TableCell>                  
                  <TableCell>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                    >
                      <Tooltip title={i18n('common.view')}>
                        <IconButton
                          component={Link}
                          color="primary"
                          to={`/water-reading/${row.id}`}
                        >
                          <SearchIcon />
                        </IconButton>
                      </Tooltip>
                      {hasPermissionToEdit && (
                        <Tooltip
                          title={i18n('common.edit')}
                        >
                          <IconButton
                            color="primary"
                            component={Link}
                            to={`/water-reading/${row.id}/edit`}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                      {hasPermissionToDestroy && (
                        <Tooltip
                          title={i18n('common.destroy')}
                        >
                          <IconButton
                            color="primary"
                            onClick={() =>
                              doOpenDestroyConfirmModal(
                                row.id,
                              )
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>

      <Pagination
        onChange={doChangePagination}
        pagination={pagination}
      />

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </>
  );
}

export default WaterReadingListTable;
