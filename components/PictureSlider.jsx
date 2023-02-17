import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const PictureSLider = () => {
  const [data, setData] = useState();
  const delay = 10000;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/homelands/images`)
      .then((response) => {
        console.log(response);
        setData(response.data.items);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setIndex((prevIndex) => (prevIndex === data?.length - 1 ? 0 : prevIndex + 1)), delay);

    return () => {
      resetTimeout();
    };
  }, [index, data?.length]);

  return (
    <>
      <div className="slideshow" style={{ left: `-${0 + 100 * index}vw` }}>
        <div className="slideshowSlider">
          {data &&
            data.map((item, idx) => (
              <div className="image_wrapper" key={idx}>
                <Image src={item.image[1]} alt="banner_image" width={1920} height={900} />
              </div>
            ))}
        </div>
      </div>
      <div className="slideshowDots">
        {data &&
          data.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
      </div>
    </>
  );
};

export default PictureSLider;
