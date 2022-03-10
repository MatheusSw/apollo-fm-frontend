import { AxiosInstance } from "axios";
import { useState } from "react";

interface LoginProps {
  backendClient: AxiosInstance;
}

const Login: React.FC<LoginProps> = ({ backendClient }) => {

  const twitterLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    var response = await backendClient.post("logins/twitter");

    //This is really really bad, however due to twitter cors policy it's not possible to redirect directly
    //Should be fixed when we host with netlify
    //https://stackoverflow.com/questions/35879943/twitter-api-authorization-fails-cors-preflight-in-browser
    window.location = response.data
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <span className="text-6xl font-extrabold text-gray-900">
              Apollo
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-8">
            <div>
              <div>
                <div className="mt-1">
                  <div>
                    <form onSubmit={twitterLogin}>
                      <div className="inline-flex w-full justify-center rounded-xl bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm">
                        <button type="submit" className="w-full">
                          <i className="fa-brands fa-twitter fa-2x" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://media.allure.com/photos/620a7db15837919e2c243257/master/pass/Doja%20Cat%20ACL%20Music%20Festival.jpg"
          alt="Current top artist"
        />
        <span className="absolute text-xs text-gray-900">
          Most listened artist currently - All credits reserved to the original
          artist
        </span>
      </div>
    </div>
  );
};

export default Login;
