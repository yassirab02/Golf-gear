import React from "react";
import about from "../assets/about.jpg";
import { MdRoundaboutRight } from "react-icons/md";


const About = () => {

    const features = [
        {
            icon: <MdRoundaboutRight className="text-3xl" />,
            title: "Quality Assurance",
            desc: "We carefully select and inspect every product, whether it's used or brand new, to ensure it meets our high standards. Our commitment to quality gives you confidence in every purchase."
        },
        {
            icon: <MdRoundaboutRight className="text-3xl" />,
            title: "Wide Range of Products",
            desc: "Choose from a diverse selection of used and brand new golf gear from top brands. Whether you're looking for a budget-friendly option or the latest model, we have something for everyone."
        },
        {
            icon: <MdRoundaboutRight className="text-3xl" />,
            title: "Exceptional Services",
            desc: "We provide expert advice, personalized recommendations, and responsive customer support to help you find the perfect gear. Your satisfaction is our top priority."
        }
    ];
    
    

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
                <div>
                    <div className="max-w-xl space-y-3">
                        <h3 className="text-green-600 font-semibold">
                            About
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Golf Gear
                        </p>
                        <p>
                        Experience unmatched performance and reliability with our carefully curated selection of golf gear. Whether you're a seasoned pro or just starting out, our products are designed to enhance your game and bring out the best in every swing.
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg lg:max-w-none">
                        <ul className="space-y-8">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className="flex gap-x-4">
                                        <div className="flex-none w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg text-gray-800 font-semibold">
                                                {item.title}
                                            </h4>
                                            <p className="mt-3">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="mt-12 lg:mt-0">
                    <img src={about} className="w-full shadow-lg rounded-lg border" />
                </div>
            </div>
        </section>
    )
}

export default About; 