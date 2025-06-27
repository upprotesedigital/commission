import { SignedOut, SignInButton } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-white">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 space-y-8 flex flex-col items-center justify-center text-center">
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access your dashboard
          </p>
        </div>
        
        <SignedOut>
          <div className="space-y-6 flex flex-col items-center w-full">
            <div className="flex justify-center w-full">
              <SignInButton mode="modal">
                <button className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-4">
                    <svg
                      className="h-5 w-5 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Sign In
                </button>
              </SignInButton>
            </div>
            
            <div>
              <p className="text-xs text-gray-500">
                🔒 Secure authentication powered by Clerk
              </p>
            </div>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default Login;