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
			<FooterLink href="https://deploy-preview-22--delicate-clafoutis-8421e7.netlify.app/about">About Us</FooterLink>
			<FooterLink href="https://deploy-preview-22--delicate-clafoutis-8421e7.netlify.app/contact">Contact</FooterLink>
			<FooterLink href="https://deploy-preview-19--delicate-clafoutis-8421e7.netlify.app/">Main</FooterLink>
		</Column>
		<Column>
			<Heading>Features</Heading>
			<FooterLink href="https://deploy-preview-22--delicate-clafoutis-8421e7.netlify.app/QuoteGenerator">Get Quote</FooterLink>
			<FooterLink href="https://deploy-preview-22--delicate-clafoutis-8421e7.netlify.app/articles">Articles</FooterLink>
			<FooterLink href="#">Audio</FooterLink>
			<FooterLink href="#">Video</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="https://github.com/ivonamaria">Iwona</FooterLink>
			<FooterLink href="https://github.com/web3cryptoidea">Natalia</FooterLink>
			<FooterLink href="https://github.com/lentiodev">Lentio</FooterLink>
			<FooterLink href="https://github.com/VitaliyZhark">Vitaliy</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://twitter.com/">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://youtube.com/">
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