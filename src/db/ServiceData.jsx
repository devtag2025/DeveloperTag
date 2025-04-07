import { Code, LayoutDashboard, Paintbrush, Brain, Lightbulb } from "lucide-react";
import img from "../../public/assets/portfolio/qservMain.svg"

export const servicesHeroData = [
    {
        slug: "web-development",
        heading: "Web Development",
        text: "We create responsive and high-performance websites using modern technologies like React, Next.js, and Tailwind CSS.",
        image: "/assets/services/web-development.jpg",
    },
    {
        slug: "app-development",
        heading: "App Development",
        text: "We develop mobile applications with seamless user experiences, using frameworks like Flutter and React Native.",
        image: "/assets/services/app-development.jpg",
    },
    {
        slug: "ui-ux-design",
        heading: "UI/UX Design",
        text: "We craft intuitive and visually appealing user interfaces with a strong focus on user experience and accessibility.",
        image: "/assets/services/ui-ux-design.jpg",
    },
    {
        slug: "artificial-intelligence",
        heading: "Artificial Intelligence",
        text: "We build AI-driven solutions leveraging machine learning and deep learning to enhance business processes.",
        image: "/assets/services/artificial-intelligence.jpg",
    },
];

export const serviceBoxData = [
    {
        slug: "/service/web-development",
        items: [
            {
                id: 1,
                title: "Responsive Web Design",
                content:
                    "We create responsive and mobile-friendly websites that adapt seamlessly to different devices, ensuring a smooth user experience. Our designs focus on intuitive navigation, fast load times, and visually appealing layouts that enhance engagement. Whether it's a corporate site or an e-commerce store, we ensure accessibility and performance across all platforms.",
                image: "/sev.png",
            },
            {
                id: 2,
                title: "E-Commerce Development",
                content:
                    "We build high-performance online stores with secure payment gateways, smooth navigation, and optimized performance. Our expertise in platforms like Shopify, WooCommerce, and custom React-based stores allows us to deliver tailored solutions. We focus on user experience, mobile responsiveness, and security to maximize conversions and customer satisfaction.",
                image: "/sev.png",
            },
        ],
    },
    {
        slug: "/service/app-development",
        items: [
            {
                id: 1,
                title: "Android & iOS Development",
                content:
                    "We develop feature-rich Android and iOS applications using the latest frameworks, ensuring high performance and scalability. Our development process includes UI/UX optimization, API integration, and backend support. From social media apps to enterprise solutions, we create applications that provide seamless interactions and high user engagement.",
                image: "/sev.png",
            },
            {
                id: 2,
                title: "Cross-Platform Development",
                content:
                    "Using frameworks like React Native and Flutter, we build apps that work seamlessly on both Android and iOS platforms. Our approach reduces development time and cost while maintaining native-like performance. We focus on code reusability, real-time updates, and smooth user experiences to ensure the success of your application.",
                image: "/sev.png",
            },
        ],
    },
    {
        slug: "/service/ui-ux-design",
        items: [
            {
                id: 1,
                title: "User Interface Design",
                content:
                    "We craft visually stunning and intuitive UI designs that enhance user experience and engagement. Our design process includes wireframing, prototyping, and usability testing to create designs that are both aesthetically pleasing and highly functional. We ensure consistency in branding and a seamless flow across all devices.",
                image: "/sev.png",
            },
            {
                id: 2,
                title: "User Experience Research",
                content:
                    "We conduct in-depth user research to create designs that are user-centric and conversion-focused. Our UX strategies involve customer journey mapping, A/B testing, and analytics-driven improvements. By understanding user behavior and expectations, we craft interfaces that improve retention, engagement, and business growth.",
                image: "/sev.png",
            },
        ],
    },
    {
        slug: "/service/ai-development",
        items: [
            {
                id: 1,
                title: "AI Chatbots",
                content:
                    "We build AI-powered chatbots that provide personalized customer interactions and automate responses efficiently. Our chatbots are designed with Natural Language Processing (NLP) to enhance user engagement, handle customer inquiries, and streamline workflows. Whether for customer support, lead generation, or automation, our chatbots enhance productivity and user satisfaction.",
                image: "/sev.png",
            },
            {
                id: 2,
                title: "Machine Learning Solutions",
                content:
                    "From predictive analytics to intelligent automation, we implement machine learning models to solve complex problems. Our expertise includes deep learning, recommendation systems, and AI-driven data insights. We help businesses leverage AI for data-driven decision-making, automation, and enhancing customer experiences.",
                image: "/sev.png",
            },
        ],
    },
];



export const serviceWhyChoose = [
    {
        slug: "service/web-development",
        items: [
            {
                title: "Responsive Design",
                icon: <LayoutDashboard className="text-blue-400" size={24} />,
                content: "Ensuring a seamless experience across all screen sizes and devices.",
            },
            {
                title: "Frontend Development",
                icon: <Code className="text-blue-400" size={24} />,
                content: "Building fast and interactive user interfaces using modern frameworks.",
            },
            {
                title: "Backend Integration",
                icon: <Brain className="text-blue-400" size={24} />,
                content: "Connecting frontend applications with secure and scalable backend services.",
            },
            {
                title: "E-Commerce Solutions",
                icon: <LayoutDashboard className="text-blue-400" size={24} />,
                content: "Creating optimized shopping experiences with payment gateway integration.",
            },
            {
                title: "Performance Optimization",
                icon: <Lightbulb className="text-blue-400" size={24} />,
                content: "Improving speed, SEO, and user experience with best coding practices.",
            },
        ],
    },
    {
        slug: "/service/ui-ux-design",
        items: [
            {
                title: "User Research",
                icon: <Brain className="text-green-400" size={24} />,
                content: "Understanding user needs through surveys and testing.",
            },
            {
                title: "Wireframing & Prototyping",
                icon: <Paintbrush className="text-green-400" size={24} />,
                content: "Sketching and designing interactive low/high-fidelity prototypes.",
            },
            {
                title: "Visual Design",
                icon: <LayoutDashboard className="text-green-400" size={24} />,
                content: "Crafting intuitive and aesthetic UI with color theory and typography.",
            },
            {
                title: "Usability Testing",
                icon: <Brain className="text-green-400" size={24} />,
                content: "Evaluating design usability through real-user testing and iterations.",
            },
            {
                title: "Accessibility",
                icon: <Lightbulb className="text-green-400" size={24} />,
                content: "Designing inclusive experiences for users with disabilities.",
            },
        ],
    },
    {
        slug: "/service/ai-development",
        items: [
            {
                title: "Machine Learning",
                icon: <Code className="text-purple-400" size={24} />,
                content: "Training models to recognize patterns and make intelligent predictions.",
            },
            {
                title: "Computer Vision",
                icon: <Lightbulb className="text-purple-400" size={24} />,
                content: "Enabling machines to interpret and analyze visual information.",
            },
            {
                title: "Natural Language Processing",
                icon: <Paintbrush className="text-purple-400" size={24} />,
                content: "Teaching computers to understand and generate human language.",
            },
            {
                title: "AI Chatbots",
                icon: <Lightbulb className="text-purple-400" size={24} />,
                content: "Developing AI-powered assistants for automated communication.",
            },
            {
                title: "AI in Web Apps",
                icon: <LayoutDashboard className="text-purple-400" size={24} />,
                content: "Integrating AI-based recommendations, automation, and personalization.",
            },
        ],
    },
    {
        slug: "/service/app-development",
        items: [
            {
                title: "Mobile App Development",
                icon: <Brain className="text-red-400" size={24} />,
                content: "Building high-performance mobile applications for iOS and Android.",
            },
            {
                title: "Cross-Platform Apps",
                icon: <Code className="text-red-400" size={24} />,
                content: "Developing apps with frameworks like React Native and Flutter.",
            },
            {
                title: "Native Development",
                icon: <LayoutDashboard className="text-red-400" size={24} />,
                content: "Creating platform-specific applications using Swift and Kotlin.",
            },
            {
                title: "App UI/UX Design",
                icon: <Paintbrush className="text-red-400" size={24} />,
                content: "Designing modern and user-friendly interfaces for mobile applications.",
            },
            {
                title: "App Performance Optimization",
                icon: <Lightbulb className="text-red-400" size={24} />,
                content: "Enhancing speed, security, and battery efficiency for a better user experience.",
            },
        ],
    },
];


export const allServices = [
    {
        title: "Website Development",
        tagline:
            "Custom, responsive websites and web applications that are fast, secure, and SEO-friendly. From elegant marketing sites to complex web portals, we ensure your online presence is modern, engaging, and scalable.",
        img: img, // replace with actual image
    },
    {
        title: "Mobile App Development",
        tagline:
            "Intuitive iOS and Android applications built for performance and great user experience. We develop both native and cross-platform mobile apps that engage your users and expand your reach on any device.",
        img: img,
    },
    {
        title: "Desktop Software Development",
        tagline:
            "High-performance desktop applications for Windows, Mac, or Linux, tailored to your specific requirements. From productivity tools to specialized enterprise software, we build desktop solutions that are robust.",
        img: img,
    },
    {
        title: "CRM Solutions",
        tagline:
            "Custom Customer Relationship Management systems to help you stay organized and nurture customer relationships. We design CRMs that integrate with your business processes, giving your team a central platform to track leads, sales, and support with ease.",
        img: img,
    },
    {
        title: "ERP Systems",
        tagline:
            "End-to-end Enterprise Resource Planning solutions that streamline your operations. We develop ERP systems that tie together key business functions – like inventory, accounting, and HR – into one cohesive platform for better data visibility and efficiency.",
        img: img,
    },
    {
        title: "SaaS Platforms",
        tagline:
            "Scalable Software-as-a-Service applications ready for the cloud. We build multi-tenant SaaS platforms from the ground up, handling subscription management, security, and performance, so you can serve users globally with confidence.",
        img: img,
    },
    {
        title: "Blockchain Applications",
        tagline:
            "Next-generation software leveraging blockchain technology for security and transparency. Our team develops decentralized apps (DApps), smart contracts, and blockchain integrations that bring innovation to industries like finance, supply chain, and more.",
        img: img,
    },
];


