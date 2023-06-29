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

export const projects = [
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
	{ id: 7, name: "portfolio", description: "My portfolio", image: PortfolioPNG, live: "#" },
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
