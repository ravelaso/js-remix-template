import { json } from "react-router";
import { destroyUserSession } from "~/data/auth.server";

export function action({ request }) {
  if (request.method !== "POST") {
    throw json({ message: "Invalid request" }, { status: 400 });
  }
  return destroyUserSession(request);
}
