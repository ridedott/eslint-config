/* eslint-disable functional/immutable-data */

const containerFail = {};

// Dynamic, difficult-to-reason-about lookups
const name = 'name';
delete containerFail[name];
delete containerFail[name.toUpperCase()];
