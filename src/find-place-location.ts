import { Client as GoogleApiClient } from '@googlemaps/google-maps-services-js';
import { PlaceWithLocation } from './types.js';
import { places } from './addresses.js';
import { writeFileSync } from 'fs';

const client = new GoogleApiClient();
const addresses: Array<PlaceWithLocation> = [];
function delay(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function run(): Promise<void> {
  for (let index = 0; index < places.length; index++) {
    try {
      console.log(`Proecessing ${index}/${places.length} location...`);
      const response = await client.geocode({
        params: {
          address: places[index].address,
          key: process.env.GOOGLE_MAPS_API_KEY,
        },
      });
      const addressWithLocation: PlaceWithLocation = {
        ...places[index],
        ...{ location: response.data.results[0].geometry.location },
      };
      addresses.push(addressWithLocation);
    } catch (error: Error | unknown) {
      console.error(error);
    }
    await delay(200);
  }

  try {
    writeFileSync(
      'build/kindergartens-with-locations.json',
      JSON.stringify(addresses),
    );
  } catch (err) {
    console.error(err);
  }
}

run();
