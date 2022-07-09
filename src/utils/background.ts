import p1 from "../assets/background-images/1.jpg"
import p2 from "../assets/background-images/2.png"
import p3 from "../assets/background-images/3.jpg"
import p4 from "../assets/background-images/4.jpg"
import p5 from "../assets/background-images/5.jpg"
import p6 from "../assets/background-images/6.jpg"
import p7 from "../assets/background-images/7.jpg"
import p8 from "../assets/background-images/8.png"
import p9 from "../assets/background-images/9.jpg"
import p10 from "../assets/background-images/10.jpg"
import p11 from "../assets/background-images/11.jpg"
import p12 from "../assets/background-images/12.jpg"
import p13 from "../assets/background-images/13.jpg"
import p14 from "../assets/background-images/14.jpg"
import p15 from "../assets/background-images/15.jpg"

const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1));

const images = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15];

export const getBackgroundImage = (): string => `url(${images[randomNumber(0,14)]})`;