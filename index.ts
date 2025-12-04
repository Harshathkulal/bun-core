import { UsersRoute } from "./routes/users";

const server = Bun.serve({
  port: 3000,
  routes: {
     "/": () => new Response("Home"),
    "/users": UsersRoute,
  }
});

console.log(`Listening on ${server.url}`);