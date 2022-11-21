import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import AddressService from '../../services/addressService';
import Roles from "../../security/roles";

export default async (req, res, next) => {
  const queryLimit = 20;
  try {
    const permissionChecker = new PermissionChecker(req);
    permissionChecker.validateHas(
      Permissions.values.addressAutocomplete,
    );

    let query = req.query;
    await permissionChecker.currentUserRolesIds.some((role) => {
      if(role !== Roles.values.admin && role !== Roles.values.researcher) {
        const currentUser = req.currentUser;
        query = {search: query.search, createdBy: currentUser.id}
      }
    });

    const payload = await new AddressService(
      req,
    ).findAllAutocomplete(query, req.query.limit || queryLimit);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
