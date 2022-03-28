export type User = {
  name: string;
  screen_name: string;
  profile_picture_url: string;
  lastfm_user?: string;
  report_text: string;
  report_time: string;
  report_day: string;
  monthly_scrobbles: number;
  monthly_artists: number;
  monthly_loved_tracks: number;
};
