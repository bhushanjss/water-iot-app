import WaterReading from "../models/waterReading";


export async function populateReadings(database, options, data, tenantId, currentUserId) {

    const [record] = await WaterReading(
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