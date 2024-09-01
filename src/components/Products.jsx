import React from 'react';
import balls from "../assets/balls.jpg";
import bags from "../assets/bags.jpg";
import sticks from "../assets/sticks.jpg";
import shirts from "../assets/shirts.jpg";
import hats from "../assets/hats.jpg";
import other from "../assets/other.jpg";

const Products = () => {
  return (
    <>
      {/* Product List Section: Categories Grid */}
      <div className="bg-white text-gray-800">
        <div className="container mx-auto px-4 py-16 lg:px-8 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <a
              href="/balls"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src={balls}
                alt="Balls"
                className="w-full h-full object-cover transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-green-600 group-hover:text-white">
                  Balls
                </div>
              </div>
            </a>
            <a
              href="/bags"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src={bags}
                alt="Bags"
                className="w-full h-full object-cover transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-green-600 group-hover:text-white">
                  Bags
                </div>
              </div>
            </a>
            <a
              href="/sticks"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src={sticks}
                alt="Sticks"
                className="w-full h-full object-cover transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-green-600 group-hover:text-white">
                  Sticks
                </div>
              </div>
            </a>
            <a
              href="/hats"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src={hats}
                alt="Hats"
                className="w-full h-full object-cover transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-green-600 group-hover:text-white">
                  Hats
                </div>
              </div>
            </a>
            <a
              href="/shirts"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src={shirts}
                alt="Shirts"
                className="w-full h-full object-cover transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-green-600 group-hover:text-white">
                  Shirts
                </div>
              </div>
            </a>
            <a
              href="/other"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src={other}
                alt="Other"
                className="w-full h-full object-cover transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-green-600 group-hover:text-white">
                  Other
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}
    </>
  );
}

export default Products;
