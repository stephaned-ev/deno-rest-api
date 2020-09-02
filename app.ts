import { Drash } from "https://deno.land/x/drash@v1.2.2/mod.ts";
// import { CorsMiddleware } from "https://deno.land/x/drash-middleware@{latest}/cors/mod.ts";
import HomeResource from "./home_resource.ts";
import Profiles from "./profiles.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [HomeResource, Profiles],
  // middleware: {
  //   after_request: [
  //     CorsMiddleware(false),
  //   ],
  // },
});

server.run({
  hostname: "localhost",
  port: 1447,
});
