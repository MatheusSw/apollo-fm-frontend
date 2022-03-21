import { Header } from "../../components/header/Header";
import React, { useState } from "react";
import { apiClient } from "../../clients/apiClient";
import { Strip, StripTypes } from "../../components/strip/Strip";
import { useAuth } from "../../hooks/useAuth";

const Settings: React.FC = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { me } = useAuth();

  const [reportText, setReportText] = useState("");
  const [lastFmUser, setLastFmUser] = useState("");

  const handleSettingsSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setError(false);
    setSuccess(false);

    try {
      const response = await apiClient.put("api/settings", {
        report_text: reportText,
        lastfm_user: lastFmUser,
      });
      setSuccess(true);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="w-full">
      <Header title="Settings" />
      <form
        className="flex w-1/4 flex-col gap-4"
        onSubmit={handleSettingsSubmit}
      >
        {error && (
          <Strip
            text="Uh-oh, there has been a problem while saving your settings, try
            again."
            type={StripTypes.error}
          />
        )}
        {success && <Strip text="Settings saved!" type={StripTypes.success} />}
        <div>
          <label
            htmlFor="report_text"
            className="block text-sm font-medium text-gray-700"
          >
            Your report text
          </label>
          <div className="mt-1">
            <textarea
              id="report_text"
              name="report_text"
              rows={3}
              className="block w-full rounded-md border-0 shadow-sm focus:border-magenta focus:ring-magenta sm:text-sm"
              onChange={(e) => setReportText(e.target.value)}
            >
              {me!.report_text}
            </textarea>
            <p className="mt-2 text-sm text-gray-500">
              Supported placeholders are: {"{artists}"}, {"{tracks}"}
            </p>
          </div>
        </div>
        <div>
          <label
            htmlFor="lastfm_user"
            className="block text-sm font-medium text-gray-700"
          >
            Last.fm User
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="lastfm_user"
              id="lastfm_user"
              defaultValue={me!.lastfm_user}
              className="block w-full rounded-md border-0 shadow-sm focus:border-magenta focus:ring-magenta sm:text-sm"
              onChange={(e) => setLastFmUser(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex w-16 justify-center rounded-md border-transparent bg-magenta py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-magenta focus:outline-none focus:ring-2 focus:ring-magenta focus:ring-offset-2"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Settings;
