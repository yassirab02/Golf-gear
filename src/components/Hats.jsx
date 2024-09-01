import hat1 from "../assets/hats/hat1.jpg";
import hat2 from "../assets/hats/hat2.jpg";
import hat3 from "../assets/hats/hat3.jpg";
import hat4 from "../assets/hats/hat4.jpg";

const posts = [
    {
      title: "hat 1",
      img: hat1,
    },
    {
      title: "hat 2",
      img: hat2,
    },
    {
      title: "hat 3",
      img: hat3,
    },
    {
      title: "hat 4",
      img: hat4,
    },
];

const Hats = () => {
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

export default Hats;
