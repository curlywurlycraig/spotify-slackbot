import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';
const SPOTIFY_ACCOUNTS_BASE_URL = 'https://accounts.spotify.com/api';


export const main = async (event: any = {}): Promise<any> => {
    console.log(JSON.stringify(event, null, 4));

    const playlist_id = process.env.SPOTIFY_PLAYLIST_ID;
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

    console.log('Requesting track list from playlist: ', playlist_id);


    // Authenticate with spotify
    const base64_auth_header = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
    try {
        const authResponse = await axios.post(
            `${SPOTIFY_ACCOUNTS_BASE_URL}/token`,
            'grant_type=client_credentials',
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${base64_auth_header}`
                }
            }
        );

        const access_token = authResponse.data.access_token;

        // Request playlist tracks from spotify
        const response = await axios.get(
            `${SPOTIFY_API_BASE_URL}/playlists/${playlist_id}/tracks`,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                }
            }
        );

        console.log('Playlist tracks is ', response.data);
    } catch (e) {
        console.log('error is ', e);
    }

}