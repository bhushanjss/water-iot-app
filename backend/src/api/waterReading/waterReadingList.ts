import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import WaterReadingService from '../../services/waterReadingService';
import Roles from "../../security/roles";

export default async (req, res, next) => {
  try {
    const permissionChecker = new PermissionChecker(req);
    permissionChecker.validateHas(
      Permissions.values.waterReadingRead,
    );

    let query = req.query;
    await permissionChecker.currentUserRolesIds.some((role) => {
      if(role !== Roles.values.admin && role !== Roles.values.researcher) {
        const currentUser = req.currentUser;
        query.filter = {...query.filter, createdBy: currentUser.id}
      }
    });

    const payload = await new WaterReadingService(
      req,
    ).findAndCountAll(query);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
