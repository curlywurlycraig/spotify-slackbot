import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');
import events = require('@aws-cdk/aws-events');
import event_targets = require('@aws-cdk/aws-events-targets');

export class SpotifySlackbotStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const spotify_lambda = new lambda.Function(this, 'SpotifyCheckerLambda', {
      code: lambda.Code.directory('spotify-checker'),
      handler: 'index.main',
      runtime: lambda.Runtime.NodeJS810,
      environment: {
        PLAYLIST_URI: process.env.PLAYLIST_URI
      }
    });

    const spotify_lambda_target = new event_targets.LambdaFunction(spotify_lambda);

    new events.EventRule(this, 'EveryFiveMinutesEventRule', {
      scheduleExpression: "rate(5 minutes)",
      targets: [spotify_lambda_target]
    });
  }
}
