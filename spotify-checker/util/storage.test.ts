// import aws = require('aws-sdk');
import * as storage from './storage';

describe('getLastAddedTimestamp', () => {
    beforeEach(() => {
        return;
    });

    it('should return null when no timestamp is stored', () => {
        const result = storage.getLastAddedTimestamp();
        expect(result).toEqual(null);
    })
})