import adminpanel from "../../public/assets/portfolio/adminpanel.png"
import web from "../../public/assets/portfolio/mobimg.png"
import mob from "../../public/assets/portfolio/webimg.png"
import main from "../../public/assets/portfolio/qservMain.svg"

export const portfolioData = [
    {
        slug: "/portfolio/qserv",
        item: {
            title: "Qserv",
            tagLine: "An on-demand service delivery app providing a multitude of services—anytime, anyplace.",
            projectScope: {
                description: "Qserv is an On-Demand Service App for both Android and iOS, providing highly rated professionals on demand services to the people of Qatar. The best service delivery app bringing everything you need with just a tap."
            },
            techStack: ["Java", "Angular", "Swift", "Kotlin", "Elixir"],
            previewImage: main,
            websiteDemo: web,
            mobileDemo: mob,
            adminPanelImage: adminpanel
        }
    },
    {
        slug: "/portfolio/pakistan-cricket",
        item: {
            title: "Pakistan Cricket",
            tagLine: "A platform dedicated to providing the latest updates, stats into Pakistan cricket.",
            projectScope: {
                description: "Pakistan Cricket is a web application designed to provide live scores, player stats, and match updates for cricket fans. Built with a scalable architecture to ensure real-time updates and seamless user experience."
            },
            techStack: ["React", "Node.js", "MongoDB", "Express", "GraphQL"],
            previewImage: main,
            websiteDemo: web,
            mobileDemo: mob,
            adminPanelImage: adminpanel
        }
    }
];
