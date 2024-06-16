import {
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    granitLogo,
    infiniteLogo,
    threejs,
    TeslaCloneSC,
    Gpt3SC,
    EudycitySC,
    GymSC,
    HooBankSc,
    TravelSC,
    RestaurantSC, redux,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    // {
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },{
        name: "Redux",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },

];

function getCurrentMonthAndYear(language = 'en-US', timeZone = 'UTC') {
    const currentDate = new Date();
    const options = {
        month: 'long',
        year: 'numeric',
        timeZone: timeZone
    };
    return currentDate.toLocaleDateString(language, options);
}


const experiences = [
    {
        title: "Frontend Developer",
        company_name: "GranIt",
        icon: granitLogo,
        iconBg: "#383E56",
        date: `June 2023 - ${getCurrentMonthAndYear()} (Present) `,
        points: [
            "Online betting platform for digitalisation of ticket games to play online in different categories.",
            "React development for a cross-platform lottery app",
            "Worked in an Agile managed project."
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Infinite Digital",
        icon: infiniteLogo,
        iconBg: "#383E56",
        date: `May 2022 - June 2023`,
        points: [
            "Responsive web applications, focusing on delivering high-quality user experiences. ",
            "Utilizing React.js as my primary framework, I built dynamic user interfaces that were both intuitive and engaging.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Tesla Clone",
        description:
            "Web application that clones Tesla's site. It shows the types of cars that Tesla has, the costs and benefits that Tesla has. This site is very easy to use even for those who do not know how to use technology well.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "BrowserRouter",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: TeslaCloneSC,
        source_code_link: "https://github.com/FloriCela111/tesla-clone",
    },
    {
        name: "Restaurant Website",
        description:
            "This website can help restaurants a lot in online customer management. The online restaurant contains the menu and the way to contact the restaurant service. It makes managing customers easier.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "BrowserRouter",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: RestaurantSC,
        source_code_link: "https://github.com/FloriCela111/resturant-website",
    },
    {
        name: "GPT3 Website",
        description:
            "React functional components and their reusability, React file and folder structure, Fundamental #CSS properties to master flex & grid, Fundamentals of the CSS BEM Model",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "BrowserRouter",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: Gpt3SC,
        source_code_link: "https://github.com/FloriCela111/gpt3",
    },
    {
        name: "HooBank Website",
        description:
            "React functional components and their reusability, React file and folder structure, Fundamental CSS properties to master flex, Perfectly placed media queries for satisfactory responsiveness on all devices",
        tags: [
            {
                name: "vite",
                color: "blue-text-gradient",
            },
            {
                name: "BrowserRouter",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: HooBankSc,
        source_code_link: "https://github.com/FloriCela111/HooBank",
    },
    {
        name: "Gym Website",
        description:
            "React functional components and their reusability, React file and folder structure, Fundamental #CSS properties to master flex & grid, Fundamentals of the CSS BEM Model",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "BrowserRouter",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: GymSC,
        source_code_link: "https://github.com/FloriCela111/gym-aplication",
    },
    {
        name: "Eudysity Website",
        description:
            "React functional components and their reusability, React file and folder structure, Fundamental CSS properties to master flex, Perfectly placed media queries for satisfactory responsiveness on all devices",
        tags: [
            {
                name: "vite",
                color: "blue-text-gradient",
            },
            {
                name: "BrowserRouter",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: EudycitySC,
        source_code_link: "https://github.com/FloriCela111/eudisty",
    },
    {
        name: "Travel Website",
        description:
            "Next functional components and their reusability, Next file and folder structure, Fundamental CSS properties to master flex, Perfectly placed media queries for satisfactory responsiveness on all devices.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: TravelSC,
        source_code_link: "https://github.com/FloriCela111/travel-app",
    },
];

export { services, technologies, experiences, testimonials, projects };
