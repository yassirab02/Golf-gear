import bag1 from "../assets/bags/bag1.jpg";
import bag2 from "../assets/bags/bag2.jpg";
import bag3 from "../assets/bags/bag3.jpg";
import bag4 from "../assets/bags/bag4.jpg";

const posts = [
    {
      title: "bag 1",
      img: bag1,
    },
    {
      title: "bag 2",
      img: bag2,
    },
    {
      title: "bag 3",
      img: bag3,
    },
    {
      title: "bag 4",
      img: bag4,
    },
];

const Bags = () => {
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

export default  Bags;
