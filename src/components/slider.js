//carousels/Bootstrap.js
import { useState } from "react";
import Image from "next/image";
import items from "../assets/data/Items";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";
import Link from "next/link";

export default function BootstrapCarousel() {
  const bootstrap = items.items.bootstrap;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="border-double rounded-lg scale-95 border-8 border-inherit">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bootstrap.map((item) => (
          <Carousel.Item key={item.id} className={styles.itemP} interval={1500}>
            <Image
              src={item.imageUrl}
              alt="slides"
              width={5000}
              height={5000}
            />
            {/* <Carousel.Caption className={styles.caption}>
						<h3>{item.title}</h3>
						<p>{item.body}</p>
						<Link className="btn btn-danger" href={"/" + item.title}>
							Visit
						</Link>
					</Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
