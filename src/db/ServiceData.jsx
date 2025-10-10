import { Code, LayoutDashboard, Paintbrush, Brain, Lightbulb } from "lucide-react";
import img from "../../public/assets/portfolio/qservMain.svg"

export const servicesHeroData = [
    {
        slug: "web-development",
        heading: "Web Development",
        text: "We create responsive and high-performance websites using modern technologies like React, Next.js, and Tailwind CSS.",
        image: "/assets/Services/web_development.webp",
    },
    {
        slug: "app-development",
        heading: "App Development",
        text: "We develop mobile applications with seamless user experiences, using frameworks like Flutter and React Native.",
        image: "/assets/Services/App_development.jpg",
    },
    {
        slug: "desktop-development",
        heading: "Desktop Software Development",
        text: "High-performance desktop applications for Windows, Mac, or Linux, tailored to your specific requirements. From productivity tools to specialized enterprise software.",
        image: "/assets/Services/desktop-app.webp",
    },
    {
        slug: "crm-solutions",
        heading: "CRM Solutions",
        text: "Custom Customer Relationship Management systems to help you stay organized and nurture customer relationships. We design CRMs that integrate with your business processes.",
        image: "/assets/Services/crmSystem.jpg",
    },
    {
        slug: "erp-systems",
        heading: "ERP Systems",
        text: "End-to-end Enterprise Resource Planning solutions that streamline your operations. We develop ERP systems that tie together key business functions for better efficiency.",
        image: "/assets/Services/erpSystem.jpg",
    },
    {
        slug: "saas-platforms",
        heading: "SaaS Platforms",
        text: "Scalable Software-as-a-Service applications ready for the cloud. We build multi-tenant SaaS platforms from the ground up, handling subscription management and security.",
        image: "/assets/Services/SaasSystem.png",
    },
    {
        slug: "blockchain-applications",
        heading: "Blockchain Applications",
        text: "Next-generation software leveraging blockchain technology for security and transparency. Our team develops decentralized apps, smart contracts, and blockchain integrations.",
        image: "/assets/Services/BlockChainSystem.jpg",
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
    {
        slug: "/service/desktop-development",
        items: [
            {
                id: 1,
                title: "Cross-Platform Desktop Apps",
                content:
                    "We develop desktop applications that work seamlessly across Windows, Mac, and Linux using modern frameworks like Electron, Tauri, and .NET. Our solutions ensure consistent performance and user experience across all platforms while maintaining native-like performance and security.",
                image: "/sev.png",
            },
            {
                id: 2,
                title: "Enterprise Desktop Solutions",
                content:
                    "From productivity tools to specialized enterprise software, we build robust desktop applications tailored to your business needs. Our solutions include data management systems, workflow automation tools, and custom business applications that integrate with your existing infrastructure.",
                image: "/sev.png",
            },
        ],
    },
    {
        slug: "/service/crm-solutions",
        items: [
            {
                id: 1,
                title: "Custom CRM Development",
                content:
                    "We build custom Customer Relationship Management systems tailored to your business processes. Our CRMs integrate seamlessly with your existing tools and provide a central platform for managing leads, sales, customer support, and marketing campaigns with advanced analytics and reporting.",
                image: "/sev.png",
            },
            {
                id: 2,
                title: "CRM Integration & Migration",
                content:
                    "We help you migrate from legacy systems to modern CRM solutions and integrate with third-party tools like email marketing platforms, accounting software, and e-commerce systems. Our integration services ensure data consistency and workflow automation across all your business tools.",
                image: "/sev.png",
            },
        ],
    },
    {
        slug: "/service/erp-systems",
        items: [
            {
                id: 1,
                title: "End-to-End ERP Solutions",
                content:
                    "We develop comprehensive Enterprise Resource Planning systems that integrate all your business functions including inventory management, accounting, HR, sales, and customer service. Our ERP solutions provide real-time data visibility and streamline operations for better decision-making and efficiency.",
                image: "/sev.png",
            },
            {
                id: 2,
                title: "ERP Customization & Integration",
                content:
                    "We customize ERP systems to match your specific business requirements and integrate with existing software and databases. Our solutions include workflow automation, custom reporting, and mobile access to ensure your team can work efficiently from anywhere.",
                image: "/sev.png",
            },
        ],
    },
    {
        slug: "/service/saas-platforms",
        items: [
            {
                id: 1,
                title: "Multi-Tenant SaaS Architecture",
                content:
                    "We build scalable Software-as-a-Service platforms with multi-tenant architecture that can serve thousands of users simultaneously. Our solutions include subscription management, user authentication, data isolation, and automated scaling to handle growing user bases efficiently.",
                image: "/sev.png",
            },
            {
                id: 2,
                title: "Cloud-Native SaaS Development",
                content:
                    "We develop cloud-native SaaS applications with microservices architecture, containerization, and DevOps practices. Our platforms are built for high availability, security, and performance, with features like real-time collaboration, API integrations, and advanced analytics.",
                image: "/sev.png",
            },
        ],
    },
    {
        slug: "/service/blockchain-applications",
        items: [
            {
                id: 1,
                title: "Smart Contracts & DApps",
                content:
                    "We develop decentralized applications (DApps) and smart contracts using blockchain technology for enhanced security and transparency. Our solutions include DeFi applications, NFT marketplaces, supply chain tracking, and identity verification systems built on Ethereum, Polygon, and other blockchain networks.",
                image: "/sev.png",
            },
            {
                id: 2,
                title: "Blockchain Integration",
                content:
                    "We integrate blockchain technology into existing business systems to enhance security, transparency, and trust. Our services include blockchain consulting, tokenization, cryptocurrency payment integration, and custom blockchain solutions for various industries including finance, healthcare, and logistics.",
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
    {
        slug: "/service/desktop-development",
        items: [
            {
                title: "Cross-Platform Development",
                icon: <LayoutDashboard className="text-blue-400" size={24} />,
                content: "Building desktop applications that work seamlessly across Windows, Mac, and Linux.",
            },
            {
                title: "Modern Frameworks",
                icon: <Code className="text-blue-400" size={24} />,
                content: "Using Electron, Tauri, and .NET for high-performance desktop solutions.",
            },
            {
                title: "Enterprise Solutions",
                icon: <Brain className="text-blue-400" size={24} />,
                content: "Developing robust business applications tailored to your specific needs.",
            },
            {
                title: "System Integration",
                icon: <Lightbulb className="text-blue-400" size={24} />,
                content: "Integrating with existing databases, APIs, and business systems.",
            },
            {
                title: "Security & Performance",
                icon: <Paintbrush className="text-blue-400" size={24} />,
                content: "Ensuring secure, fast, and reliable desktop applications.",
            },
        ],
    },
    {
        slug: "/service/crm-solutions",
        items: [
            {
                title: "Custom CRM Development",
                icon: <LayoutDashboard className="text-green-400" size={24} />,
                content: "Building tailored CRM systems that match your business processes.",
            },
            {
                title: "Lead Management",
                icon: <Brain className="text-green-400" size={24} />,
                content: "Tracking and managing leads from initial contact to conversion.",
            },
            {
                title: "Sales Automation",
                icon: <Code className="text-green-400" size={24} />,
                content: "Automating sales workflows and pipeline management.",
            },
            {
                title: "Customer Support",
                icon: <Lightbulb className="text-green-400" size={24} />,
                content: "Centralized customer support and ticket management system.",
            },
            {
                title: "Analytics & Reporting",
                icon: <Paintbrush className="text-green-400" size={24} />,
                content: "Advanced analytics and reporting for data-driven decisions.",
            },
        ],
    },
    {
        slug: "/service/erp-systems",
        items: [
            {
                title: "Business Process Integration",
                icon: <LayoutDashboard className="text-purple-400" size={24} />,
                content: "Integrating all business functions into one cohesive system.",
            },
            {
                title: "Inventory Management",
                icon: <Brain className="text-purple-400" size={24} />,
                content: "Real-time inventory tracking and management solutions.",
            },
            {
                title: "Financial Management",
                icon: <Code className="text-purple-400" size={24} />,
                content: "Comprehensive accounting and financial reporting systems.",
            },
            {
                title: "HR Management",
                icon: <Lightbulb className="text-purple-400" size={24} />,
                content: "Employee management, payroll, and HR workflow automation.",
            },
            {
                title: "Data Analytics",
                icon: <Paintbrush className="text-purple-400" size={24} />,
                content: "Business intelligence and analytics for informed decision-making.",
            },
        ],
    },
    {
        slug: "/service/saas-platforms",
        items: [
            {
                title: "Multi-Tenant Architecture",
                icon: <LayoutDashboard className="text-cyan-400" size={24} />,
                content: "Building scalable SaaS platforms that serve multiple customers efficiently.",
            },
            {
                title: "Subscription Management",
                icon: <Brain className="text-cyan-400" size={24} />,
                content: "Automated billing, subscription handling, and payment processing.",
            },
            {
                title: "Cloud-Native Development",
                icon: <Code className="text-cyan-400" size={24} />,
                content: "Microservices architecture with containerization and DevOps practices.",
            },
            {
                title: "API Integration",
                icon: <Lightbulb className="text-cyan-400" size={24} />,
                content: "Seamless integration with third-party services and APIs.",
            },
            {
                title: "Security & Compliance",
                icon: <Paintbrush className="text-cyan-400" size={24} />,
                content: "Enterprise-grade security and compliance with industry standards.",
            },
        ],
    },
    {
        slug: "/service/blockchain-applications",
        items: [
            {
                title: "Smart Contract Development",
                icon: <LayoutDashboard className="text-orange-400" size={24} />,
                content: "Building secure and efficient smart contracts for various use cases.",
            },
            {
                title: "DApp Development",
                icon: <Brain className="text-orange-400" size={24} />,
                content: "Creating decentralized applications with blockchain technology.",
            },
            {
                title: "DeFi Solutions",
                icon: <Code className="text-orange-400" size={24} />,
                content: "Developing decentralized finance applications and protocols.",
            },
            {
                title: "NFT Marketplaces",
                icon: <Lightbulb className="text-orange-400" size={24} />,
                content: "Building NFT platforms and marketplace solutions.",
            },
            {
                title: "Blockchain Integration",
                icon: <Paintbrush className="text-orange-400" size={24} />,
                content: "Integrating blockchain technology into existing business systems.",
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


