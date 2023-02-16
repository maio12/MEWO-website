import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "@/styles/carousel/Carousel.module.css";
import Image from "next/image";

export interface CarouselItem {
  src: string;
  alt: string;
  description?: {
    title?: string;
    text?: string;
  };
}

export interface CarouselItems {
  carouselItems: CarouselItem[];
}

export default function ResponsiveCarousel({ carouselItems }: CarouselItems) {
  return (
    <div className={styles.container}>
      <Carousel
        showArrows={true}
        // autoPlay={true}

        statusFormatter={() => ""}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className={styles.mySwiper}
      >
        {carouselItems.map((item) => {
          return (
            <div key={item.src} className={styles.swipItem}>
              <div className={styles.imgBox}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.detail}>
                <h2>{item?.description?.title}</h2>
                <p>{item?.description?.text}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
