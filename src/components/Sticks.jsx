const posts = [
    {
      title: "What is SaaS? Software as a Service Explained",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "A Quick Guide",
      img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "7 Promising VS Code",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "How to Use Root C++",
      img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-3 space-y-2">
                    <span className="block text-indigo-600 text-sm">
                      {items.date}
                    </span>
                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                      {items.title}
                    </h3>
                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                      {items.desc}
                    </p>
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
  