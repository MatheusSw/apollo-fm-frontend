import Card from "../../components/card/Card";

const Home: React.FC = () => {
  return (
    <div className="w-full px-10 py-16">
      <header className="mx-6 flex flex-wrap justify-between">
        <div className="flex flex-col">
          <span className="mb-2 text-4xl font-bold">Hey there, pretty!</span>
          <span className="text-xl font-medium">
            It’s always nice to have you here
          </span>
        </div>
        <div className="mt-6 flex items-center md:mt-0">
          <span className="h-16 w-16 overflow-hidden rounded-full">
            <img
              src={`${process.env.PUBLIC_URL}/portrait.jpg`}
              alt="Your twitter profile"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="ml-4 text-2xl font-bold">Paris Doe</span>
        </div>
      </header>
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
        <div>kkkkkkkkkkkkkkkkk</div>
      </div>
    </div>
  );
};

export default Home;
