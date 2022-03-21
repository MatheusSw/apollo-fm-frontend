import Card from "../../components/card/Card";
import { Header } from "../../components/header/Header";
import { Avatar } from "../../components/avatar/Avatar";
import { useAuth } from "../../hooks/useAuth";
import React from "react";
import { Strip, StripTypes } from "../../components/strip/Strip";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { me } = useAuth();

  return (
    <div className="w-full">
      <Header
        title="Hey there, pretty!"
        subtitle="It’s always nice to have you here"
      >
        <Avatar name={me!.name} picture_url={me!.profile_picture_url} />
      </Header>
      <div>
        {!me!.lastfm_user && (
          <Strip
            text={
              <>
                Hey, it looks like you don't have a LastFm account set-up, head
                to{" "}
                <Link to="settings" className="font-bold">
                  Settings
                </Link>{" "}
                and set it up!
              </>
            }
            type={StripTypes.warning}
          />
        )}
        <div className="col-span-3 grid gap-12 sm:grid-cols-1 lg:grid-cols-3">
          <Card
            title="Scrobbles"
            icon="fas fa-play"
            value="134"
            text="plays"
            status="same as last month"
            backgroundColor="bg-light-purple"
          />
          <Card
            title="Loved Tracks"
            icon="fas fa-heart"
            value="32"
            text="new lovers"
            status="+3% vs last month"
            backgroundColor="bg-light-blue"
          />
          <Card
            title="Listening time"
            icon="fas fa-hourglass"
            value="3h"
            text="of pure music"
            status="-25% vs last month"
            backgroundColor="bg-light-amber"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
