const { createSchemaEntry } = require("./create-schema-entry");

function propToSchemaEntry(obj, config = {}) {
  const entryBuilder = config.createSchemaEntry || createSchemaEntry ;
  return entryBuilder(obj, config);
}

module.exports = {
  propToSchemaEntry
};
