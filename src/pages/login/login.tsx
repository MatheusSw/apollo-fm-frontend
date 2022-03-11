import { AxiosInstance } from "axios";
import { useState } from "react";
import { ReactComponent as Logo } from "../../logo.svg";

interface LoginProps {
  backendClient: AxiosInstance;
}

const Login: React.FC<LoginProps> = ({ backendClient }) => {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const twitterLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    setError(false);
    setLoad(true);

    try {
      var response = await backendClient.post("logins/twitter");

      //This is really really bad, however due to twitter cors policy it's not possible to redirect directly
      //Should be fixed when we host with netlify
      //https://stackoverflow.com/questions/35879943/twitter-api-authorization-fails-cors-preflight-in-browser
      window.location = response.data;
    } catch {
      setError(true);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <Logo className="h-16 w-16 fill-magenta" />
              <span className="text-5xl font-extrabold text-magenta">
                Apollo
              </span>
            </div>
            <span className="text-sm font-medium text-gray-400">
              Apollo makes it easy to share your music taste with your followers
              on twitter, you are able to share weekly reports of your top
              artists, tracks and more! Ready to get started?
            </span>
            <h2 className="mt-3 text-xl font-bold text-gray-800">
              Sign in to your account
            </h2>
          </div>
          <div className="flex flex-grow flex-wrap justify-between gap-5 mt-3">
            {error && (
              <span className="w-full rounded-lg bg-red-500 p-2 text-center text-sm font-medium text-white">
                Oh no! There has been a problem with your login, please try
                again
              </span>
            )}
            <form
              onSubmit={twitterLogin}
              className="inline-flex w-full justify-center rounded-xl bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm"
            >
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-4"
              >
                {load ? (
                  <>
                    <i className="fa-solid fa-spinner fa-2x animate-spin" />
                    <span className="font-medium">Energizing...</span>
                  </>
                ) : (
                  <i className="fa-brands fa-twitter fa-2x" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://media.allure.com/photos/620a7db15837919e2c243257/master/pass/Doja%20Cat%20ACL%20Music%20Festival.jpg"
          alt="Current top artist"
        />
      </div>
    </div>
  );
};

export default Login;
