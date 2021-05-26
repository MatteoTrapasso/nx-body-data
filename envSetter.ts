const {writeFile} = require('fs');
// read environment variables from .env file
require('dotenv').config();
const targetPaths = [`./apps/fe/src/environments/environment.base.ts`, `./apps/be/src/environments/environment.base.ts`];

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `export const environmentBase = {
  CLIENT_ID: '${process.env.CLIENT_ID}',
  DOMAIN: '${process.env.DOMAIN}',
  MONGO_DB_SRV: '${process.env.MONGO_DB_SRV}'
};`;
console.log('environmentFileContent', environmentFileContent);
// write the content to the respective file
targetPaths.forEach((targetPath: string) => writeFile(targetPath, environmentFileContent, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
}));
