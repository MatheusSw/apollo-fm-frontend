import { Header } from "../../components/header/Header";
import React, { useState } from "react";
import { apiClient } from "../../clients/apiClient";
import { Strip, StripTypes } from "../../components/strip/Strip";
import { useAuth } from "../../hooks/useAuth";
import "react-datetime/css/react-datetime.css";
import DateTime from "react-datetime";
import moment from "moment";
import { useQuery } from "react-query";

const Settings: React.FC = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { me } = useAuth();

  const [reportText, setReportText] = useState("");
  const [lastFmUser, setLastFmUser] = useState("");
  const [reportDay, setReportDay] = useState("");
  const [reportTime, setReportTime] = useState("");
  const { refetch } = useQuery("user");

  const handleSettingsSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setError(false);
    setSuccess(false);

    try {
      await apiClient.put("api/user/settings", {
        report_text: reportText === "" ? me!.report_text : reportText,
        lastfm_user: lastFmUser,
        report_day: reportDay === "" ? me!.report_day : reportDay,
        report_time: reportTime === "" ? me!.report_time : reportTime,
      });
      await refetch();
      setSuccess(true);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="w-full">
      <Header title="Settings" />
      <form
        className="lg:1/4 flex w-full flex-col gap-4 md:w-2/4"
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
              defaultValue={me!.report_text}
              className="block w-full rounded-md border-0 shadow-sm focus:border-magenta focus:ring-magenta sm:text-sm"
              onChange={(e) => setReportText(e.target.value)}
            />
            <p className="mt-2 text-sm text-gray-500">
              Supported placeholders are: {"{artists}"}, {"{tracks}"},{" "}
              {"{albums}"}, be mindful that twitter only allows 280 characters
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
        <div>
          <label
            htmlFor="report_schedule"
            className="block text-sm font-medium text-gray-700"
          >
            Report schedule
          </label>
          <div className="mt-1 flex gap-2">
            <div>
              <select
                className="text-md block w-full appearance-none rounded-md border-0 py-3 px-4 pr-8 leading-tight text-gray-700 focus:ring-magenta"
                id="report_day"
                name="report_day"
                onChange={(e) => setReportDay(e.target.value)}
                defaultValue={me!.report_day}
              >
                {moment.weekdays().map((day) => (
                  <option value={day} key={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <DateTime
              dateFormat={false}
              /*Thanks javascript for not having a decent constructor*/
              initialValue={moment(`1970-01-01T${me!.report_time}`)}
              inputProps={{
                className: "rounded-lg border-0 focus:ring-magenta text-md",
              }}
              onChange={(e) => {
                if (moment.isMoment(e)) {
                  setReportTime(e.format("HH:mm:ssZ"));
                }
              }}
            />
          </div>
          <span className="text-sm text-gray-500 opacity-50">
            Your current timezone is{" "}
            {Intl.DateTimeFormat().resolvedOptions().timeZone.replace("_", " ")}
          </span>
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
