// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // API_BASE_URL: 'http://localhost:9000/.netlify/functions/server'
  API_BASE_URL: 'https://prototype-starter-api.netlify.com/.netlify/functions/server',
  CONTENTFUL_SPACE: 'heiibemt676c',
  CONTENTFUL_TOKEN: '68GY1sZJJo5DijZstDgp30nU0frQ4eGNBoFfPVuqTXU',
  MAPBOX_TOKEN: 'pk.eyJ1IjoiY2FwYmIiLCJhIjoiY2p5OXM4Nzc3MDZ0NzNka2hmam1qZm1xeCJ9.kGcqZDWgCKNju1Do2K0TDw'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
