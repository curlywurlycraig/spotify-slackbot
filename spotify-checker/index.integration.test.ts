import handler = require('./index');

const exampleEvent = {
    "version": "0",
    "id": "e7a891ca-f565-3ddc-1f31-f059bfb88483",
    "detail-type": "Scheduled Event",
    "source": "aws.events",
    "account": "967981995405",
    "time": "2019-05-09T21:18:39Z",
    "region": "eu-west-1",
    "resources": [
        "arn:aws:events:eu-west-1:967981995405:rule/SpotifySlackbotStack-EveryFiveMinutesEventRuleB073-XBV5CYILRKZ5"
    ],
    "detail": {}
}

describe('main handler', () => {
    it('should list spotify tracks in given playlist', () => {
        return handler.main(exampleEvent);
    })
});