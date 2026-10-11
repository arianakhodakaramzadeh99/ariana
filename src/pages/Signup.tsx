import { useNavigate, Link } from "react-router";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F8F5] flex justify-center items-center">
      <div className="flex flex-col items-center gap-4 p-6">
        <h1 className="text-2xl font-bold">Sign up</h1>

        <p className="text-gray-500 text-center">
          Please enter your details to create an account.
        </p>

        <div className="flex flex-col gap-4 w-[300px]">
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="h-10 rounded-lg border border-gray-300 px-3"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="h-10 rounded-lg border border-gray-300 px-3"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="h-10 rounded-lg border border-gray-300 px-3"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate("/age")}
          className="h-10 w-[300px] rounded-2xl bg-green-700 text-white"
        >
          Sign up
        </button>

        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-semibold text-green-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;