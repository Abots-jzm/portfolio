import BasketLogo from "./assets/experiences/basket logo white 1.svg";
import HNGLogo from "./assets/experiences/hng logo.jpg";
import SmoothLogo from "./assets/experiences/smooth logo.jpg";

import TweeterPNG from "./assets/projects/tweeter.png";
import BasketPNG from "./assets/projects/basket.png";
import ChatGroupPNG from "./assets/projects/chat group.png";
import BookWorldPNG from "./assets/projects/bookworld.png";
import EddieHomePNG from "./assets/projects/eddie-homepage.png";
import IrisSecurityPNG from "./assets/projects/iris-security.png";
import PortfolioPNG from "./assets/projects/portfolio.png";
import ShoppingifyPNG from "./assets/projects/shoppingify.png";
import TypingSpeedPNG from "./assets/projects/typing-speed.png";
import HangmanPNG from "./assets/projects/hangman.png";
import WeatherAppPNG from "./assets/projects/weather app.png";
import WindBnbPNG from "./assets/projects/windbnb.png";
import { Project } from "./types";

export const projectDetails = [
	{
		name: "iris security",
		image: IrisSecurityPNG,
		live: "https://iris-security.netlify.app/",
		github: "https://github.com/Abots-jzm/iris-security",
		overview:
			"The Iris Security front-end project is focused on developing a comprehensive and user-friendly website to protect and secure user data from prying eyes. The project's primary objective is to create an informative landing page that effectively communicates the importance of data security and highlights the features and benefits of the Iris Security system. By utilizing intuitive design, clear messaging, and user-friendly interfaces, the project aims to establish trust and encourage visitors to take action in securing their sensitive information.",
		technologies: ["React", "React router", "Typescript", "Styled components"],
	},
	{
		name: "eddie home",
		image: EddieHomePNG,
		live: "https://abots-eddie-landing-page.netlify.app/",
		github: "https://github.com/Abots-jzm/abots-eddie-landingpage",
		overview:
			"The Eddie Homepage project aims to showcase the professional expertise of Eddie, a skilled web developer known for creating beautiful websites and delivering fast services. This front-end project focuses on designing an engaging landing page that effectively communicates Eddie's core message, highlighting his talent and the value he brings to his clients. The primary objective is to create an impressive online presence that attracts potential clients and establishes Eddie's reputation as a top-notch web developer.",
		technologies: ["HTML", "SCSS"],
	},
	{
		name: "typing speed",
		image: TypingSpeedPNG,
		live: "https://abots-typing-speed.netlify.app/",
		github: "https://github.com/Abots-jzm/TypingSpeed",
		overview:
			"The Typing Speed App is a front-end project designed to provide users with an engaging and interactive way to test and improve their typing speed. The application features a minimalistic and visually appealing user interface that allows users to measure their typing speed and accuracy.",
		technologies: ["HTML", "CSS", "Javascript"],
	},
	{
		name: "chat group",
		image: ChatGroupPNG,
		live: "https://abots-chat-group.netlify.app/",
		github: "https://github.com/Abots-jzm/chat-group",
		overview:
			"The Chat Group project is a front-end development endeavor that aims to create a messaging application. The application facilitates real-time messaging and provides users with the ability to join and create channels for seamless communication with other users. The project also incorporates an AI chatbot and implements user authentication for secure access.",
		features: [
			"Real-Time Messaging: The application uses firebase realtime firestore database to enable real-time messaging. Users are able to send and receive messages instantaneously, creating a seamless communication experience.",
			"AI Chatbot Integration: An AI chatbot was integrated into the application to provide automated assistance and answer frequently asked questions. The chatbot leverages OpenAi's Api to understand and respond to user queries effectively.",
			"Channel Creation and Joining: Users have the option to create channels based on various topics or interests. They can also join existing channels to engage in group conversations. The application has an intuitive interface to browse and select channels.",
			"User Authentication: The application will implement an authentication system to ensure secure access to user accounts. Users will be required to sign up and log in using their credentials. Firebase authentication was used to handle user authentication.",
		],
		technologies: [
			"React",
			"Open Ai",
			"React Query",
			"Firebase",
			"Typescript",
			"Redux toolkit",
			"React router",
			"Styled components",
		],
	},
	{
		name: "basket",
		image: BasketPNG,
		live: "https://flowbasket.com/",
		overview:
			"Basket is a web application designed to facilitate collaboration between artists and producers. It aims to provide a seamless platform for sharing ideas, exchanging feedback, and working together to create high-quality music projects. With a range of features including real-time messaging using Socket.IO, an interactive audio player, and the ability to upload music files, Basket offers a comprehensive solution for fostering creativity and productivity within the music production process.",
		features: [
			"Real-time Messaging with Socket.IO: Basket enables artists and producers to communicate instantly through real-time messaging. Socket.IO facilitates seamless, bi-directional communication, allowing users to exchange ideas, discuss project details, and provide feedback efficiently. The real-time messaging feature enhances collaboration by enabling instant and effective communication between team members.",
			"Interactive Audio Player: Basket incorporates an interactive audio player that allows users to listen to uploaded music files directly within the application Artists and producers can easily preview and review tracks, providing an immersive experience during the creative process. The audio player supports various audio formats, ensuring compatibility with a wide range of music files.",
			"SEO Optimization with React Helmet: Basket incorporates SEO optimization techniques using React Helmet to enhance the discoverability and visibility of user profiles and project pages. React Helmet allows for dynamic management of meta tags, title tags, and other SEO-related elements on each page. By optimizing these elements, Basket ensures that user profiles and project pages are search engine-friendly and have a better chance of ranking higher in search engine results.",
			"User Profiles and Portfolio Showcase: Basket provides user profiles where artists and producers can showcase their portfolios, highlighting their previous work and expertise. Users can add details about their musical background, genres, skills, and equipment, enhancing collaboration by facilitating informed decision-making. The profile feature encourages networking and collaboration by allowing users to discover and connect with like-minded artists and producers.",
		],
		technologies: [
			"React",
			"Typescript",
			"Socket IO",
			"Framer Motion",
			"ChakraUI",
			"React Helmet",
			"Material UI",
			"Redux toolkit",
			"React Query",
			"Typescript",
			"Redux toolkit",
			"Emotion",
			"React slick",
			"Axios",
			"Formik",
			"Axios",
			"Leaflet",
		],
	},
	{
		name: "tweeter",
		image: TweeterPNG,
		live: "https://abots-tweeter.netlify.app/",
		github: "https://github.com/Abots-jzm/tweeter",
		overview:
			"Tweeter  is a front-end web application that serves as a Twitter clone. The application provides users with a platform to share their thoughts, connect with others, and engage in real-time conversations. It is built using modern front-end technologies and leverages Firebase for authentication and database functionality. Tweeter features a dynamic timeline, an explore page, a profile page, bookmarks, and optimistically updates likes and comments.",
		features: [
			"User Authentication: Tweeter utilizes Firebase's authentication service, allowing users to create accounts, log in, and securely access the application. This ensures that user data and interactions are protected.",
			"Database Integration: Firebase's firestore database is employed to store and manage user data, tweets, comments, likes, and bookmarks. This integration enables seamless and efficient data retrieval and updates.",
			"Dynamic home page: The application provides users with a dynamic timeline where they can view tweets from the people they follow. The timeline is updated in real-time, ensuring that users stay up-to-date with the latest conversations.",
			"Optimistic Updates: Likes and comments in Tweeter are implemented using optimistic updates. This means that when a user likes a tweet or adds a comment, the UI instantly reflects the change without waiting for confirmation from the server. This approach enhances the user experience by providing immediate feedback and reducing perceived latency.",
		],
		technologies: [
			"React",
			"TailwindCSS",
			"Framer motion",
			"Typescript",
			"Firebase",
			"Redux toolkit",
			"React hook forms",
		],
	},
	{
		name: "portfolio",
		image: PortfolioPNG,
		github: "https://github.com/Abots-jzm/portfolio",
		overview:
			"My portfolio is a front-end project aimed at showcasing my skills, projects, and achievements as a front-end developer. The purpose of this website is to create an engaging and visually appealing platform that effectively highlights my expertise, attracts potential clients or employers, and establishes my professional presence in the industry. The project aims to provide a seamless user experience while demonstrating my proficiency in front-end technologies and design principles.",
		technologies: ["React", "React router", "Framer Motion", "Typescript", "Styled components"],
	},
	{
		name: "Shoppingify",
		image: ShoppingifyPNG,
		live: "https://abots-shoppingify.netlify.app/",
		github: "https://github.com/Abots-jzm/Shoppingify",
		overview:
			"Shoppingify is a front-end web application designed to provide users with a convenient way to manage their shopping lists. The application allows users to create, access, and modify multiple lists from any device, ensuring that their shopping needs are always accessible wherever they go. Shoppingify also includes features such as list history and a statistics page, providing valuable insights and tracking capabilities.",
		features: [
			"Shopping List Management: With Shoppingify, users can create multiple shopping lists based on their specific needs and preferences. Each list can be customized with items, quantities, and any additional notes or categories. You can also create new list items asides from the presets.",
			"Portability and Accessibility: The application ensures that users can access their shopping lists from any device with an internet connection. This allows users to easily refer to their lists while on the go, whether they are using a computer, smartphone, or tablet",
			"List History and statistics: Shoppingify keeps a record of previous shopping lists, allowing users to view and reference their past purchases. This feature can be particularly useful for remembering previous items or comparing shopping patterns over time. The application also provides a dedicated statistics page that offers insights into shopping habits and patterns. Users can visualize their shopping data, such as the most frequently purchased items or the total expenditure over a given period.",
		],
		technologies: [
			"React",
			"Typescript",
			"Firebase",
			"React Query",
			"Formik",
			"Framer motion",
			"Redux toolkit",
			"Recharts",
			"Styled components",
		],
	},
	{
		name: "bookworld",
		image: BookWorldPNG,
		live: "https://abots-bookworld.netlify.app/",
		github: "https://github.com/Abots-jzm/bookworld",
		overview:
			"BookWorld is a front-end application designed to provide users with an intuitive and efficient way to search for books and obtain short descriptions of their content. This web-based application aims to connect book enthusiasts, casual readers, and students with a vast database of books from around the world. By offering a seamless user experience, BookWorld aims to simplify the process of finding and exploring books, helping users make informed decisions about their reading choices",
		technologies: ["React", "Typescript", "React router", "Styled components"],
	},
	{
		name: "hangman",
		image: HangmanPNG,
		live: "https://abots-hangman.netlify.app/",
		github: "https://github.com/Abots-jzm/Hangman_game",
		overview:
			"The Hangman Front-end Game is a small JavaScript project that aims to recreate the classic hangman game in a web-based format. The game will be designed to provide an interactive and engaging user experience, allowing players to test their word-guessing skills while having fun.",
		technologies: ["HTML", "SCSS", "Javascript"],
	},
	{
		name: "weather app",
		image: WeatherAppPNG,
		live: "https://abots-weather-app.netlify.app/",
		github: "https://github.com/Abots-jzm/WeatherApp",
		overview:
			"The Weather App is a front-end project that aims to provide users with up-to-date weather information, including current weather conditions and a one-week forecast. The app will offer a user-friendly interface, enabling users to easily access and understand weather data for any desired location. By leveraging open weather APIs, the Weather App will ensure accurate and reliable information for an enhanced user experience.",
		technologies: ["HTML", "SCSS", "Javascript"],
	},
	{
		name: "windbnb",
		image: WindBnbPNG,
		live: "https://abots-windbnb.netlify.app/",
		github: "https://github.com/Abots-jzm/windbnb",
		overview:
			"The WindBnB project is a simple front-end application designed to provide users with a list of properties and the ability to filter them based on location. The primary goal of this project is to create a user-friendly interface that allows users to easily browse and find properties in their desired location.",
		technologies: ["React", "Typescript", "CSS Modules"],
	},
];

export const projects: Project[] = [
	{
		id: 1,
		name: "iris security",
		description: "A landing page",
		image: IrisSecurityPNG,
		live: "https://iris-security.netlify.app/",
	},
	{
		id: 2,
		name: "eddie home",
		description: "A landing page",
		image: EddieHomePNG,
		live: "https://abots-eddie-landing-page.netlify.app/",
	},
	{
		id: 3,
		name: "typing speed",
		description: "A typing speed test",
		image: TypingSpeedPNG,
		live: "https://abots-typing-speed.netlify.app/",
	},
	{
		id: 4,
		name: "chat group",
		description: "A chat app",
		image: ChatGroupPNG,
		live: "https://abots-chat-group.netlify.app/",
	},
	{
		id: 5,
		name: "basket",
		description: "A music collaboration app",
		image: BasketPNG,
		live: "https://flowbasket.com/",
	},
	{
		id: 6,
		name: "tweeter",
		description: "A twitter clone",
		image: TweeterPNG,
		live: "https://abots-tweeter.netlify.app/",
	},
	{ id: 7, name: "portfolio", description: "My portfolio", image: PortfolioPNG },
	{
		id: 8,
		name: "Shoppingify",
		description: "A shoplist app",
		image: ShoppingifyPNG,
		live: "https://abots-shoppingify.netlify.app/",
	},
	{
		id: 9,
		name: "bookworld",
		description: "A book query app",
		image: BookWorldPNG,
		live: "https://abots-bookworld.netlify.app/",
	},
	{
		id: 10,
		name: "hangman",
		description: "A small game",
		image: HangmanPNG,
		live: "https://abots-hangman.netlify.app/",
	},
	{
		id: 11,
		name: "weather app",
		description: "A weather app",
		image: WeatherAppPNG,
		live: "https://abots-weather-app.netlify.app/",
	},
	{
		id: 12,
		name: "windbnb",
		description: "An airbnb clone",
		image: WindBnbPNG,
		live: "https://abots-windbnb.netlify.app/",
	},
];

//Don't make the mistake of using the id instead of the index to set mobile projects
export const mobileProjects = [
	projects[4],
	projects[5],
	projects[3],
	projects[6],
	projects[7],
	projects[2],
	projects[8],
	projects[9],
	projects[1],
	projects[10],
	projects[0],
	projects[11],
];

export const socials = {
	github: "https://github.com/Abots-jzm",
	twitter: "https://twitter.com/The_Jazzmann",
	linkedin: "https://ng.linkedin.com/in/oluwatobi-abolarin-3b1124225",
};

export const About = {
	experiences: [
		{
			logo: BasketLogo,
			time: "Dec 2022 - Apr 2023",
			name: "Basket",
			description: "I helped create an expressive and collaborative platform empowering music producers and artists.",
		},
		{
			logo: HNGLogo,
			time: "Oct 2022 - Nov 2022",
			name: "HNG Internship",
			description:
				"I was able to improve my front-end skills alongside over 10,000 talented peers and emerged as a finalist.",
		},
		{
			logo: SmoothLogo,
			time: "Feb 2022 - Aug 2022",
			name: "Smooth multi-services platform",
			description: "I worked as a front-end developer, delivering multiple software solutions to various customers.",
		},
	],
	whatIDo:
		"I am a front-end developer specialized in crafting beautiful and functional web experiences. I focus on user-centric design, creating intuitive interfaces that prioritize the user's needs. I bring life to designs using React ensuring scalability and efficiency in web applications. Cross-browser compatibility and responsive design are top priorities in my work. I value collaboration and communication, working closely with clients and teams to deliver exceptional results. I am always learning and staying up to date with the latest industry trends to create innovative web experiences. Let's work together to bring your ideas to reality!",
	techIUse: [
		"HTML",
		"CSS",
		"Javascript",
		"React",
		"Typescript",
		"Git",
		"React Query",
		"Firebase",
		"Redux",
		"Tailwind",
		"Styled Components",
		"React Router",
		"Framer Motion",
		"React Hook Forms",
		"Recharts",
	],
	location: "ILORIN, NIGERIA",
	// location: "TEXAS, USA.",
};
