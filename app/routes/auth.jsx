
import { Login } from "~/data/auth.server";
import {
  Form,
  useTransition as useNavigation,
} from "@remix-run/react";

export default function AuthPage() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  return (
    <div className="pt-52">
    <h1 className="flex justify-center text-2xl font-bold ">This is Auth</h1>
    <div className="flex w-full justify-center">
      <Form method="post">
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span>Email</span>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input input-bordered"
            />
          </label>
          <label className="input-group input-group-vertical">
          <span>Password</span>
            <input
              type="password"
              id="password"
              name="password"
              minLength={7}
              className="input input-bordered"
            />
          </label>
          <button
            className="btn "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Authenticating..." : "Authenticate"}
          </button>
        </div>
      </Form>
    </div>
    </div>
  );
}

export async function action({ request }) {

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  
  try{
      return Login(credentials)
    }  catch (error) {
    if (error.status === 422){
      return{credentials: error.message}
    }
  }
}
