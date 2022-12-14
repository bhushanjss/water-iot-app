import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import PersonService from '../../services/personService';

export default async (req, res, next) => {
  const queryLimit = 20;
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.personAutocomplete,
    );

    const payload = await new PersonService(
      req,
    ).findAllAutocomplete(req.query.query, req.query.limit || queryLimit);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
