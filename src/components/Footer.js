import React from "react"
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles" 

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#5ce0d8",
				textAlign: "center",
				marginTop: "-50px",
                 }}>
		Mental Map: Feel good with best solutions
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Solutions</Heading>
			<FooterLink href="#">Get Quote</FooterLink>
			<FooterLink href="#">Testings</FooterLink>
			<FooterLink href="#">Audio</FooterLink>
			<FooterLink href="#">Video</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Iwona</FooterLink>
			<FooterLink href="#">Natalia</FooterLink>
			<FooterLink href="#">Lentio</FooterLink>
			<FooterLink href="#">Vitaliy</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
    <h5 style={{ color: "#5ce0d8",
				textAlign: "center",
				marginTop: "50px",
                 }}>
		© All rights reserved. 2023
	</h5>
	</Box>
);
};

export default Footer;