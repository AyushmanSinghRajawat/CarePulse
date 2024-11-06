// // This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// // The config you add here will be used whenever one of the edge features is loaded.
// // Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// // https://docs.sentry.io/platforms/javascript/guides/nextjs/

// import * as Sentry from "@sentry/nextjs";

// Sentry.init({
//   dsn: "https://425d78c1e8a61b686c81b701b1c37672@o4508112017031168.ingest.de.sentry.io/4508112024436816",

//   // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
//   tracesSampleRate: 1,

//   // Setting this option to true will print useful information to the console while you're setting up Sentry.
//   debug: false,
// });
