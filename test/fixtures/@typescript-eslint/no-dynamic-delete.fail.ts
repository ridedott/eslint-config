const containerFail = {};
// Can be replaced with the constant equivalents, such as container.aaa
delete containerFail['aaa'];
delete containerFail['Infinity'];

// Dynamic, difficult-to-reason-about lookups
const name = 'name';
delete containerFail[name];
delete containerFail[name.toUpperCase()];
