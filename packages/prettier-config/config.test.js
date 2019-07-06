import Ajv from 'ajv';
import fetch from 'node-fetch';
import config from './config';

const ajv = new Ajv({ schemaId: 'id' });

// plug ajv with the 4th draft of the schema spec to accomodate prettier
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));

test('it is a valid prettier.js configuration file', async () => {
  // fetch and compile the latest version of prettier's JSON schema
  const response = await fetch('http://json.schemastore.org/prettierrc');
  const schema = await response.json();
  const validate = ajv.compile(schema);

  // validate our config
  const valid = validate(config);

  expect(valid).toBe(true);
});
