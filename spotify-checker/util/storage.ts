import AWS = require('aws-sdk');

AWS.config.update({region: process.env.REGION})
const dynamodb = new AWS.DynamoDB();

export const getLastAddedTimestamp = async () => {
    return new Promise((resolve, reject) => {
        dynamodb.getItem({
            TableName: process.env.TABLE_NAME,
            Key: {
                Id: { S: "LastTrackAddedAt" },
            }
        }, (err, data) => {
            if (err) {
                console.error("Failed to get the last track added time: ", err);
                reject(null);
            }

            resolve(data.Item.value);
        });
    });
}