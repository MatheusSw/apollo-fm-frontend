import Card from "../../components/card/Card";
import { Header } from "../../components/header/Header";
import { Avatar } from "../../components/avatar/Avatar";

const Home: React.FC = () => {
  return (
    <div className="w-full px-10 py-16">
      <Header
        title="Hey there, pretty!"
        subtitle="It’s always nice to have you here"
      >
        <Avatar name="Paris Doe" />
      </Header>
      <div className="mx-6 grid">
        <div className="col-span-3 mt-12 grid gap-12 sm:grid-cols-1 lg:grid-cols-3">
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
            backgroundColor="bg-light-yellow"
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
