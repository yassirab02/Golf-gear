import stick1 from "../assets/sticks/stick1.jpg";
import stick2 from "../assets/sticks/stick2.jpg";
import stick3 from "../assets/sticks/stick3.jpg";
import stick4 from "../assets/sticks/stick4.jpg";

const posts = [
    {
      title: "Stick 1",
      img: stick1,
    },
    {
      title: "Stick 2",
      img: stick2,
    },
    {
      title: "Stick 3",
      img: stick3,
    },
    {
      title: "Stick 4",
      img: stick4,
    },
];

const Sticks = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
              <a href={items.href}>
                <div className="relative">
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full h-64 object-contain rounded-lg"
                  />
                </div>
                <div className="mt-3 space-y-2">
                  <h3 className="flex justify-center text-lg text-gray-800 duration-150 group-hover:text-green-600 font-semibold">
                    {items.title}
                  </h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sticks;
