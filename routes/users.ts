import { getUsers } from "../controllers/users.controller";

export async function UsersRoute(req: Request) {
  if (req.method === "GET") {
    return getUsers();
  }

  return new Response("Method Not Allowed", { status: 405 });
}
