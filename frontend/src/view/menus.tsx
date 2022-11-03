import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardIcon />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlinedIcon />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <PersonIcon />,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/address',
    permissionRequired: permissions.addressRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.address.menu'),
  },

  {
    path: '/person',
    permissionRequired: permissions.personRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.person.menu'),
  },

  {
    path: '/water-reading',
    permissionRequired: permissions.waterReadingRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.waterReading.menu'),
  },

  {
    path: '/device',
    permissionRequired: permissions.deviceRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.device.menu'),
  },
].filter(Boolean);
