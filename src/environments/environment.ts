// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr       : false,
    // lienCmd : "http://localhost:8181/",
    // lienPresta : "http://localhost:8080/",
    lienCmd : "https://bo.test.kenza.re/",
    lienPresta : "https://apk.test.kenza.re/",

    // lienCmd : "https://bo.test.kenza.re/",
    // lienPresta : "https://apk.test.kenza.re/",
    // lienCmd : "https://bo.kenza.re/",
    // lienPresta : "https://apk.kenza.re/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
