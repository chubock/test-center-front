// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  apiEndPoint: "http://localhost:8080",
  clientId: "yubar",
  clientSecret: "persia",
  grantType: "password",
  scope: "read write",
  alertsDismissible: true,
  alertsDismissTimeout: 5000,
  paginationLinksCount: 9,
  // mathjaxUrl: "http://localhost/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
  mathjaxUrl: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML"
};
