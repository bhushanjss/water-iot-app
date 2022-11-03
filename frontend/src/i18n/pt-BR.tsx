const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    address: {
        name: 'Address',
        label: 'Addresses',
        menu: 'Addresses',
        exporterFileName: 'Address_exportados',
        list: {
          menu: 'Addresses',
          title: 'Addresses',
        },
        create: {
          success: 'Address salvo com sucesso',
        },
        update: {
          success: 'Address salvo com sucesso',
        },
        destroy: {
          success: 'Address deletado com sucesso',
        },
        destroyAll: {
          success: 'Address(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Address',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'pin': 'PIN Code',
        },
        new: {
          title: 'Novo Address',
        },
        view: {
          title: 'Visualizar Address',
        },
        importer: {
          title: 'Importar Addresses',
          fileName: 'address_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    person: {
        name: 'Person',
        label: 'People',
        menu: 'People',
        exporterFileName: 'Person_exportados',
        list: {
          menu: 'People',
          title: 'People',
        },
        create: {
          success: 'Person salvo com sucesso',
        },
        update: {
          success: 'Person salvo com sucesso',
        },
        destroy: {
          success: 'Person deletado com sucesso',
        },
        destroyAll: {
          success: 'Person(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Person',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Person',
        },
        view: {
          title: 'Visualizar Person',
        },
        importer: {
          title: 'Importar People',
          fileName: 'person_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    waterReading: {
        name: 'Water Reading',
        label: 'Water Readings',
        menu: 'Water Readings',
        exporterFileName: 'Water Reading_exportados',
        list: {
          menu: 'Water Readings',
          title: 'Water Readings',
        },
        create: {
          success: 'Water Reading salvo com sucesso',
        },
        update: {
          success: 'Water Reading salvo com sucesso',
        },
        destroy: {
          success: 'Water Reading deletado com sucesso',
        },
        destroyAll: {
          success: 'Water Reading(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Water Reading',
        },
        fields: {
          id: 'Id',
          'user': 'User',
          'device': 'Device',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
            'ro': 'Ro',
            'dug_well': 'Dug_well',
            'tube_well': 'Tube_well',
            'hand_pump': 'Hand_pump',
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
          title: 'Novo Water Reading',
        },
        view: {
          title: 'Visualizar Water Reading',
        },
        importer: {
          title: 'Importar Water Readings',
          fileName: 'waterReading_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    device: {
        name: 'Device',
        label: 'Devices',
        menu: 'Devices',
        exporterFileName: 'Device_exportados',
        list: {
          menu: 'Devices',
          title: 'Devices',
        },
        create: {
          success: 'Device salvo com sucesso',
        },
        update: {
          success: 'Device salvo com sucesso',
        },
        destroy: {
          success: 'Device deletado com sucesso',
        },
        destroyAll: {
          success: 'Device(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Device',
        },
        fields: {
          id: 'Id',
          'label': 'Label',
          'deviceId': 'DeviceId',
          'serialNumber': 'SerialNumber',
          'user': 'User',
          'version': 'Version',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Device',
        },
        view: {
          title: 'Visualizar Device',
        },
        importer: {
          title: 'Importar Devices',
          fileName: 'device_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
