import { Client, Databases } from 'appwrite';

export const PROJECT_ID = '6766b9c000360aedebfe'
export const DATABASE_ID = '6766bc080005c4adb280'
export const COLLECTION_ID_MESSAGES = '6766bc1b0022cae23039'

// hide below information for security reason inside environment variables

const client = new Client();

client.setProject('6766b9c000360aedebfe');

export const databases = new Databases(client);

export default client;