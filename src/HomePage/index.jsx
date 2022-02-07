import EventCard from "./EventCard";

const Home = () => {
  return (
    <div className="py-5 px-5">
      <div className="grid grid-cols-2 space-x-4">
        <div>
          <h1 className="border-b-2 p-2 text-xl text-sky-800 font-bold">
            NEWS & EVENTS
          </h1>
          <div className="flex grid-cols-3	 space-x-4">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
        <div>
          <h1 className="border-b-2 p-2 text-sky-800 text-xl font-bold">FEATURED</h1>
          <iframe
            width="100%"
            height="315"
            className="mt-5"
            title="yt"
            src="https://www.youtube.com/embed/ZKPwMY0ztbs"
          ></iframe>
          <h1 className="border-b-2 p-2 mt-5 text-xl text-sky-800 font-bold">LATEST</h1>
          <iframe
            width="100%"
            height="315"
            className="mt-5"
            title="yt"
            src="https://www.youtube.com/embed/Z3cau4ciTR8"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
