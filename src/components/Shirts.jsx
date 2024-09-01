import shirt1 from "../assets/shirts/shirt1.jpg";
import shirt2 from "../assets/shirts/shirt2.jpg";
import shirt3 from "../assets/shirts/shirt3.jpg";
import shirt4 from "../assets/shirts/shirt4.jpg";

const posts = [
    {
      title: "shirt 1",
      img: shirt1,
    },
    {
      title: "shirt 2",
      img: shirt2,
    },
    {
      title: "shirt 3",
      img: shirt3,
    },
    {
      title: "shirt 4",
      img: shirt4,
    },
];

const Shirts = () => {
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

export default Shirts;
