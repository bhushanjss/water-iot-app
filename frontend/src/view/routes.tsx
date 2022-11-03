import Permissions from 'src/security/permissions';
import config from 'src/config';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },
  
  {
    path: '/address',
    loader: () =>
      import('src/view/address/list/AddressListPage'),
    permissionRequired: permissions.addressRead,
    exact: true,
  },
  {
    path: '/address/new',
    loader: () =>
      import('src/view/address/form/AddressFormPage'),
    permissionRequired: permissions.addressCreate,
    exact: true,
  },
  {
    path: '/address/importer',
    loader: () =>
      import(
        'src/view/address/importer/AddressImporterPage'
      ),
    permissionRequired: permissions.addressImport,
    exact: true,
  },
  {
    path: '/address/:id/edit',
    loader: () =>
      import('src/view/address/form/AddressFormPage'),
    permissionRequired: permissions.addressEdit,
    exact: true,
  },
  {
    path: '/address/:id',
    loader: () =>
      import('src/view/address/view/AddressViewPage'),
    permissionRequired: permissions.addressRead,
    exact: true,
  },

  {
    path: '/person',
    loader: () =>
      import('src/view/person/list/PersonListPage'),
    permissionRequired: permissions.personRead,
    exact: true,
  },
  {
    path: '/person/new',
    loader: () =>
      import('src/view/person/form/PersonFormPage'),
    permissionRequired: permissions.personCreate,
    exact: true,
  },
  {
    path: '/person/importer',
    loader: () =>
      import(
        'src/view/person/importer/PersonImporterPage'
      ),
    permissionRequired: permissions.personImport,
    exact: true,
  },
  {
    path: '/person/:id/edit',
    loader: () =>
      import('src/view/person/form/PersonFormPage'),
    permissionRequired: permissions.personEdit,
    exact: true,
  },
  {
    path: '/person/:id',
    loader: () =>
      import('src/view/person/view/PersonViewPage'),
    permissionRequired: permissions.personRead,
    exact: true,
  },

  {
    path: '/water-reading',
    loader: () =>
      import('src/view/waterReading/list/WaterReadingListPage'),
    permissionRequired: permissions.waterReadingRead,
    exact: true,
  },
  {
    path: '/water-reading/new',
    loader: () =>
      import('src/view/waterReading/form/WaterReadingFormPage'),
    permissionRequired: permissions.waterReadingCreate,
    exact: true,
  },
  {
    path: '/water-reading/importer',
    loader: () =>
      import(
        'src/view/waterReading/importer/WaterReadingImporterPage'
      ),
    permissionRequired: permissions.waterReadingImport,
    exact: true,
  },
  {
    path: '/water-reading/:id/edit',
    loader: () =>
      import('src/view/waterReading/form/WaterReadingFormPage'),
    permissionRequired: permissions.waterReadingEdit,
    exact: true,
  },
  {
    path: '/water-reading/:id',
    loader: () =>
      import('src/view/waterReading/view/WaterReadingViewPage'),
    permissionRequired: permissions.waterReadingRead,
    exact: true,
  },

  {
    path: '/device',
    loader: () =>
      import('src/view/device/list/DeviceListPage'),
    permissionRequired: permissions.deviceRead,
    exact: true,
  },
  {
    path: '/device/new',
    loader: () =>
      import('src/view/device/form/DeviceFormPage'),
    permissionRequired: permissions.deviceCreate,
    exact: true,
  },
  {
    path: '/device/importer',
    loader: () =>
      import(
        'src/view/device/importer/DeviceImporterPage'
      ),
    permissionRequired: permissions.deviceImport,
    exact: true,
  },
  {
    path: '/device/:id/edit',
    loader: () =>
      import('src/view/device/form/DeviceFormPage'),
    permissionRequired: permissions.deviceEdit,
    exact: true,
  },
  {
    path: '/device/:id',
    loader: () =>
      import('src/view/device/view/DeviceViewPage'),
    permissionRequired: permissions.deviceRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
