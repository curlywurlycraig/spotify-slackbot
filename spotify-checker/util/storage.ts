const AWS = require('aws-sdk');

AWS.config.update({region: process.env.REGION})
const dynamodb = new AWS.DynamoDB();

export const getLastAddedTimestamp = () => {
    return null;
}