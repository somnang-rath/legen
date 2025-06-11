import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import images from "../data/images";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div
      className="w-full  bg-cover bg-center transition-all duration-1000  "
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="backdrop-blur-sm">
        <div className="flex px-20 py-5 2xl:px-0 2xl:w-8/12 2xl:mx-auto top-0 justify-center">
          <div className="flex duration-500  justify-center ">
            <img
              src={images[index]}
              alt="slide"
              className="w-full transition-all duration-1000 rounded-xl shadow-md mt-[130px]"
            />

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute  top-1/2 left-3 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="absolute  top-1/2 right-3 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
