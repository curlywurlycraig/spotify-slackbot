import aws = require('aws-sdk');
import * as storage from './storage';

describe('getLastAddedTimestamp', () => {
    let mockAws;

    beforeEach(() => {
        mockAws = jest.mock('aws');
        mockAws.DynamoDB = jest.fn();
    });

    it('should return null when no timestamp is stored', async () => {


        const result = await storage.getLastAddedTimestamp();

        expect(result).toEqual(null);
    });
})