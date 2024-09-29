import ClientFlashComponent from "@/components/ClientFlashComponent";
import Link from "next/link";
import { actionLogin } from "./action";
import { GoMail } from "react-icons/go";
import { GoKey } from "react-icons/go";
import { cookies } from "next/headers"; // Import cookies from next/headers
import { redirect } from "next/navigation"; // Import redirect from next/navigation
import { Suspense } from "react";

const LoginPage = () => {
  // Check for token in the cookies
  const token = cookies().get("token");

  // Redirect to home if token exists
  if (token) {
    redirect("/");
  }

  return (
    <section
      className="flex h-screen w-full flex-col items-center justify-center bg-blue-50 relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dvvwmhgbq/image/upload/v1727257981/z2bvatxsttpq9wr9lwlv.jpg')",
      }}
    >
      <Suspense fallback={<div>Loading flash messages...</div>}>
        <ClientFlashComponent />
      </Suspense>

      <form
        action={actionLogin}
        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center gap-4 w-full max-w-md z-10"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600">Login</h1>

        <div className="relative w-full">
          <input
            className="rounded w-full px-4 py-2 border bg-blue-200 border-gray-300 pl-10 placeholder:text-white transition-all duration-300 focus:bg-blue-300 focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <GoMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="relative w-full">
          <input
            className="rounded w-full px-4 py-2 border bg-blue-200 border-gray-300 pl-10 placeholder:text-white transition-all duration-300 focus:bg-blue-300 focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <GoKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Log in
        </button>

        <div className="flex items-center justify-between w-full mt-4">
          <hr className="w-full border-gray-300" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <Link
          href="/register"
          className="mt-4 text-blue-400 hover:text-blue-600 transition-colors duration-300"
        >
          Belum punya akun? bikin dulu dong!
        </Link>
      </form>
    </section>
  );
};

export default LoginPage;
