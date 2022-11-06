const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    address: {
        name: 'address',
        label: 'Addresses',
        menu: 'Addresses',
        exporterFileName: 'address_export',
        list: {
          menu: 'Addresses',
          title: 'Addresses',
        },
        create: {
          success: 'Address successfully saved',
        },
        update: {
          success: 'Address successfully saved',
        },
        destroy: {
          success: 'Address successfully deleted',
        },
        destroyAll: {
          success: 'Address(s) successfully deleted',
        },
        edit: {
          title: 'Edit Address',
        },
        fields: {
          id: 'Id',
          'address1': 'Address1',
          'address2': 'Address2',
          'city': 'City/Village',
          'tehsil': 'Tehsil',
          'district': 'District',
          'state': 'State',
          'coords': 'Coords',
          'pinRange': 'Pin',
          'pin': 'Pin',
          'label': 'Label',
          'user': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'pin': 'PIN Code',
        },
        new: {
          title: 'New Address',
        },
        view: {
          title: 'View Address',
        },
        importer: {
          title: 'Import Addresses',
          fileName: 'address_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    person: {
        name: 'person',
        label: 'People',
        menu: 'People',
        exporterFileName: 'person_export',
        list: {
          menu: 'People',
          title: 'People',
        },
        create: {
          success: 'Person successfully saved',
        },
        update: {
          success: 'Person successfully saved',
        },
        destroy: {
          success: 'Person successfully deleted',
        },
        destroyAll: {
          success: 'Person(s) successfully deleted',
        },
        edit: {
          title: 'Edit Person',
        },
        fields: {
          id: 'Id',
          'firstName': 'FirstName',
          'lastName': 'LastName',
          'gender': 'Gender',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'phoneNumber': 'PhoneNumber',
          'location': 'Location',
          'email': 'Email',
          'label': 'Label',
          'user': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'gender': {
            'male': 'Male',
            'female': 'Female',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Person',
        },
        view: {
          title: 'View Person',
        },
        importer: {
          title: 'Import People',
          fileName: 'person_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    waterReading: {
        name: 'waterReading',
        label: 'Water Readings',
        menu: 'Water Readings',
        exporterFileName: 'waterReading_export',
        list: {
          menu: 'Water Readings',
          title: 'Water Readings',
        },
        create: {
          success: 'Water Reading successfully saved',
        },
        update: {
          success: 'Water Reading successfully saved',
        },
        destroy: {
          success: 'Water Reading successfully deleted',
        },
        destroyAll: {
          success: 'Water Reading(s) successfully deleted',
        },
        edit: {
          title: 'Edit Water Reading',
        },
        fields: {
          id: 'Id',
          'user': 'User',
          'device': 'Device',
          'location': 'Location',
          'dateTimeRange': 'DateTime',
          'dateTime': 'DateTime',
          'type': 'Type',
          'source': 'Source',
          'remark': 'Remark',
          'temperatureRange': 'Temperature',
          'temperature': 'Temperature',
          'pHRange': 'pH',
          'pH': 'pH',
          'tdsRange': 'TDS',
          'tds': 'TDS',
          'conductivityRange': 'Electrical Conductivity',
          'conductivity': 'Electrical Conductivity',
          'alkalinityRange': 'Total Alkalinity',
          'alkalinity': 'Total Alkalinity',
          'hardnessRange': 'Total Hardness',
          'hardness': 'Total Hardness',
          'turbidityRange': 'Turbidity',
          'turbidity': 'Turbidity',
          'oxygenRange': 'Dissolved Oxygen',
          'oxygen': 'Dissolved Oxygen',
          'calciumRange': 'Calcium',
          'calcium': 'Calcium',
          'magnesiumRange': 'Magnesium',
          'magnesium': 'Magnesium',
          'sodiumRange': 'Sodium',
          'sodium': 'Sodium',
          'potassiumRange': 'Potassium',
          'potassium': 'Potassium',
          'ironRange': 'Iron',
          'iron': 'Iron',
          'chlorineRange': 'Chlorine',
          'chlorine': 'Chlorine',
          'carbonateRange': 'Carbonate',
          'carbonate': 'Carbonate',
          'bicarbonateRange': 'Bicarbonate',
          'bicarbonate': 'Bicarbonate',
          'chlorideRange': 'Chloride',
          'chloride': 'Chloride',
          'sulphateRange': 'Sulphate',
          'sulphate': 'Sulphate',
          'manganeseRange': 'Manganese',
          'manganese': 'Manganese',
          'nitrateRange': 'Nitrate',
          'nitrate': 'Nitrate',
          'fluorideRange': 'Fluoride',
          'fluoride': 'Fluoride',
          'silicateRange': 'Silicate',
          'silicate': 'Silicate',
          'phosphateRange': 'Phosphate',
          'phosphate': 'Phosphate',
          'arsenicRange': 'Arsenic',
          'arsenic': 'Arsenic',
          'copperRange': 'Copper',
          'copper': 'Copper',
          'cadmiumRange': 'Cadmium',
          'cadmium': 'Cadmium',
          'seleniumRange': 'Selenium',
          'selenium': 'Selenium',
          'mercuryRange': 'Mercury',
          'mercury': 'Mercury',
          'leadRange': 'Lead',
          'lead': 'Lead',
          'zincRange': 'Zinc',
          'zinc': 'Zinc',
          'boronRange': 'Boron',
          'boron': 'Boron',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'manual': 'Manual',
            'device': 'Device',
            'baseline': 'Baseline',
            'other': 'Other',
          },
          'source': {
            'tap': 'Tap',
            'ro': 'RO',
            'dug_well': 'Dug Well',
            'tube_well': 'Tube Well',
            'hand_pump': 'Hand Pump',
            'other': 'Other',
          },
        },
        placeholders: {

        },
        hints: {
          'temperature': '°C',
          'tds': 'ppm',
          'conductivity': 'μmhos/cm',
          'alkalinity': 'mg/L',
          'oxygen': 'mg/L',
          'calcium': 'mg/L',
          'magnesium': 'mg/L',
          'sodium': 'mg/L',
          'potassium': 'mg/L',
          'iron': 'mg/L',
          'chlorine': 'mg/L',
          'carbonate': 'mg/L',
          'bicarbonate': 'mg/L',
          'chloride': 'mg/L',
          'sulphate': 'mg/L',
          'manganese': 'mg/L',
          'nitrate': 'mg/L',
          'fluoride': 'mg/L',
          'silicate': 'mg/L',
          'phosphate': 'mg/L',
          'arsenic': 'mg/L',
          'copper': 'mg/L',
          'cadmium': 'mg/L',
          'selenium': 'mg/L',
          'mercury': 'mg/L',
          'zinc': 'mg/L',
          'boron': 'mg/L',
        },
        new: {
          title: 'New Water Reading',
        },
        view: {
          title: 'View Water Reading',
        },
        importer: {
          title: 'Import Water Readings',
          fileName: 'waterReading_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    device: {
        name: 'device',
        label: 'Devices',
        menu: 'Devices',
        exporterFileName: 'device_export',
        list: {
          menu: 'Devices',
          title: 'Devices',
        },
        create: {
          success: 'Device successfully saved',
        },
        update: {
          success: 'Device successfully saved',
        },
        destroy: {
          success: 'Device successfully deleted',
        },
        destroyAll: {
          success: 'Device(s) successfully deleted',
        },
        edit: {
          title: 'Edit Device',
        },
        fields: {
          id: 'Id',
          'label': 'Label',
          'deviceId': 'DeviceId',
          'serialNumber': 'SerialNumber',
          'user': 'User',
          'version': 'Version',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Device',
        },
        view: {
          title: 'View Device',
        },
        importer: {
          title: 'Import Devices',
          fileName: 'device_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    user: {
      label: 'User',
      description: 'User Access',
    },
    device: {
      label: 'Device',
      description: 'Device Access',
    },
    researcher: {
      label: 'Researcher',
      description: 'Researcher Access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Images',
      shade: 'Shade',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `My Beautiful Wife Dona`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },
};

export default en;
