import Address from "../models/address";


export async function populateAddress(database, options, data, tenantId, currentUserId) {

    const [record] = await Address(
        database,
    ).create(
        [
            {
                ...data,
                tenant: tenantId,
                createdBy: currentUserId,
                updatedBy: currentUserId,
            }
        ],
        options,
    );

    return record;
}