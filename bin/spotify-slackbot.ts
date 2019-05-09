#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { SpotifySlackbotStack } from '../lib/spotify-slackbot-stack';

const app = new cdk.App();
new SpotifySlackbotStack(app, 'SpotifySlackbotStack');
