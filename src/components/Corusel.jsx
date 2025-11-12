import { Carousel } from "@material-tailwind/react";
 
export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="bg-deep-purple-800 w-4/6 rounded-xl mx-auto mt-10"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className=" absolute bottom-4 left-2/4 z-50 flex translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://m-cdn.phonearena.com/images/article/159175-wide-two_1200/The-bezel-less-iPhone-16-Pro-Max-looks-great-Heres-why-Im-NOT-excited-about-it.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.herzindagi.info/image/2024/Jun/iphone-16-leaks-.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://fdn.gsmarena.com/imgroot/news/23/09/apple-iphone-15-pro-max-competitive/-1220x526/gsmarena_000.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}