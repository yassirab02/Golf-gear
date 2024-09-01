import ball1 from "../assets/balls/ball1.jpg";
import ball2 from "../assets/balls/ball2.jpg";
import ball3 from "../assets/balls/ball3.jpg";
import ball4 from "../assets/balls/ball4.jpg";
import ball5 from "../assets/balls/ball5.jpg";
import ball6 from "../assets/balls/ball6.jpg";
import ball7 from "../assets/balls/ball7.jpg";
import ball8 from "../assets/balls/ball8.jpg";
import ball9 from "../assets/balls/ball9.jpg";
import ball10 from "../assets/balls/ball10.jpg";

const posts = [
  {
    title: "Tiger",
    img: ball1,
  },
  {
    title: "Callaway",
    img: ball2,
  },
  {
    title: "Taylor made",
    img: ball3,
  },
  {
    title: "Taylor made",
    img: ball4,
  },
  {
    title: "Colored Callaway",
    img: ball5,
  },
  {
    title: "Wilson Staff",
    img: ball6,
  },
  {
    title: "Fitleist",
    img: ball7,
  },
  {
    title: "Wilson Staff",
    img: ball8,
  },
  {
    title: "Colored Taylor",
    img: ball9,
  },
];

const Balls = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((item, key) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
              <a href={item.href}>
                <div className="relative">
                  <img
                    src={item.img}
                    loading="lazy"
                    alt={item.title}
                    className="w-full h-64 object-contain rounded-lg"
                  />
                </div>
                <div className="mt-3 space-y-2">
                  <h3 className="flex justify-center text-lg text-gray-800 duration-150 group-hover:text-green-600 font-semibold">
                    {item.title}
                  </h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-8">
    <div className="w-full max-w-xs text-center">
        <img className="object-contain object-center w-full h-64 mx-auto" src={ball10} alt="avatar" />
        <div className="mt-2">
            <h3 className="text-xl font-medium text-black">We have more</h3>
            <span className="mt-1 font-medium text-gray-700">Feel free to ask</span>
        </div>
    </div>
    </div>

      </div>
    </>
  );
};

export default Balls;
