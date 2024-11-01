//index.ts

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Currently in pre final year of my engineering degree",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building students solution platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Temple Ticket booking App",
    url: "https://github.com/myselfaryan/Unityfirst-TempleBooking",
    des: "Built a secure and user-friendly ticket booking platform using MERN Stack",
    img: "/temple.jpg",
    iconLists: [
      "/next.svg",
      "/nodejs.png",
      "/mongodb.png",
      "/tail.svg",
      "/jwt.png",
    ],
    link: "https://github.com/myselfaryan/Unityfirst-TempleBooking",
  },
  {
    id: 2,
    title: "Uchchaaran",
    url: "",
    des: "A text-to-speech(TTS)system using concatenative synthesis to generate speech for Devanagari-script.",
    img: "/speak.webp",
    iconLists: ["/python.png"],
    link: "https://github.com/myselfaryan/uchchaaran",
  },
  {
    id: 3,
    title: "Pariksa",
    url: "https://github.com/myselfaryan/pariksa",
    des: "An ensemble testing solution.",
    img: "/test.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/nodejs.png"],
    link: "https://github.com/myselfaryan/pariksa",
  },
  {
    id: 4,
    title: "Apni Dukaan",
    url: "https://github.com/myselfaryan/Apni-dukaan",
    des: "Seller Applicaion for Digital Commerce",
    img: "/shop.webp",
    iconLists: ["/js.svg", "/tail.svg", "/nodejs.png", "/mongodb.png"],
    link: "https://github.com/myselfaryan/Apni-dukaan",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Aryan transformed our jewelry store's online presence. His attention to detail and understanding of luxury retail helped create a website that perfectly showcases our premium collections. The seamless integration of our catalog and the stunning visual design have significantly boosted our online sales.",
    name: "Gaurav",
    title: "Owner of Brahmagems",
  },
  {
    quote:
      "Aryan's expertise in data visualization and analytics dashboard development exceeded our expectations. He created an intuitive platform that helps our clients make data-driven decisions effortlessly. His technical proficiency combined with business acumen delivered exactly what our analytics firm needed.",
    name: "Himanshu",
    title: "Founder analytics",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern",
    desc: "At FlytSocial assisted in the development of a web-based platform using React.js, enhancing interactivity.Helped them in building a new feature for their website.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

  {
    id: 2,
    title: "Freelance Projects",
    desc: "Led the dev of a website for several clients, from initial concept to deployment on web servers.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Head of ecosystem",
    desc: "Google developer groups of IIIT-SRICITY",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/myselfaryan",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/myselfaryan",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/myselfaryan",
  },
];
