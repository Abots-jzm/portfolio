import { styled } from "styled-components";
import SectionTitle from "./home/SectionTitle";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FormEvent, useState } from "react";
import emailJs from "@emailjs/browser";

function Footer() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [isError, setIsError] = useState(false);

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);
		try {
			await emailJs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: name + " " + email,
					message,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);
			setIsSent(true);
			setIsError(false);
		} catch (error) {
			setIsError(true);
		} finally {
			setEmail("");
			setName("");
			setMessage("");
			setIsLoading(false);
		}
	}

	return (
		<footer id="connect">
			<Container onSubmit={onSubmit}>
				<SectionTitle>connect</SectionTitle>
				<div>Send me a message</div>
				<Top>
					<Group>
						<label htmlFor="name">name</label>
						<input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} />
					</Group>
					<Group>
						<label htmlFor="email">email</label>
						<input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
					</Group>
				</Top>
				<Group>
					<label htmlFor="message">message</label>
					<textarea id="message" onChange={(e) => setMessage(e.target.value)} value={message} />
				</Group>
				<Submit type="submit" disabled={isSent}>
					{!isLoading && !isSent && <span>send</span>}
					{isLoading && <span>sending</span>}
					{isSent && <span>sent!</span>}
					{!isLoading && !isSent && (
						<motion.div
							className="icon"
							initial={{ x: 5 }}
							animate={{ x: 0 }}
							transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", ease: "easeIn" }}
						>
							<BsArrowRight />
						</motion.div>
					)}
				</Submit>
				{isError && <div>Oops. Something went wrong. Try again another time!</div>}
			</Container>
		</footer>
	);
}

export default Footer;

//service_n7kxlcf  Service id

const Submit = styled.button`
	margin-left: auto;
	background-color: transparent;
	margin-top: 3rem;
	font-size: 1.8rem;
	font-weight: 700;
	display: flex;
	align-items: center;
	gap: 1rem;

	--c: linear-gradient(var(--color-purple-primary) 0 0);

	padding-bottom: 3px;
	background: var(--c), var(--c);
	background-size: 3px 3px;
	background-position: 50% 100%;
	background-repeat: no-repeat;
	transition: 0.3s linear, background-size 0.3s 0.2s linear;

	&:hover {
		background-size: 51% 3px;
		background-position: 0% 100%, 100% 100%;
		gap: 2rem;
	}

	&:disabled {
		background: none;
		color: #828282;
	}

	.icon {
		display: grid;
		place-items: center;
	}
`;

const Group = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Top = styled.div`
	display: flex;
	gap: 5rem;
	margin-top: 3rem;
	margin-bottom: 3rem;

	& > div {
		flex: 1;
	}
`;

const Container = styled.form`
	margin-top: 5rem;

	label {
		color: var(--color-purple-light);
	}

	input,
	textarea {
		padding: 1rem;
		background-color: inherit;
		width: 100%;
		border-radius: 3px;
		border: 1px solid #d9bfff33;

		&:focus {
			outline: none;
		}
	}

	textarea {
		height: 20rem;
	}
`;
