import { Outlet, Link, Form } from "@remix-run/react";
import { requireUserSession, destroyUserSession } from "~/data/auth.server";

export async function loader({ request }) {
  return await requireUserSession(request);
}

export default function Admin() {
  return (
    <>
      <h1 className="p-3 text-xl font-extrabold text-left">Admin Pannel</h1>
      <div className="flex flex-row">
        <nav className="border rounded border-spacing-3 h-screen w-1/6">
          <ul className="menu">
            <li className="mr-2 font-bold">
              <Link to="/admin" className="">
                Home
              </Link>
            </li>
            <li className="mr-2 font-bold">
              <Link to="/admin/works" className="">
                Works
              </Link>
            </li>
            <Form className="mr-2 font-bold text-center" method="post" action="/admin">
              <button type="submit" name="intent" value="logout">
                 Logout
              </button>
            </Form>
          </ul>
        </nav>
        <main className="w-full overflow-hidden">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "logout") {
    return await destroyUserSession(request);
  } else {
    return new Error("Unknown action");
  }
}
