import {populateAddress} from "./populateAddress";

/**
 * This script is responsible for adding baseline data in collections.
 * Run it via `npm run db:populatedb`.
 */
require('dotenv').config();


import { databaseInit } from '../databaseConnection';
import {populate} from "./populate";

databaseInit()
    .then(populate)
    .then(() =>
        console.log('Collections successfully created'),
    )
    .then(() => process.exit())
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
