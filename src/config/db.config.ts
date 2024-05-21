/* eslint-disable import/no-extraneous-dependencies */

import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';
import { fromEnv } from '@aws-sdk/credential-providers';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';


const client = new DynamoDBClient({
    region: 'ca-central-1',
    credentials: fromEnv(),
});


const listTables = new ListTablesCommand({});
const documentClient = DynamoDBDocument.from(client);
const tableName = 'poc_table';


export {
    tableName,
    client,
    listTables,
    documentClient
};