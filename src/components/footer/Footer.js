import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import FooterSection from './FooterSection';
// import logo from "../../assets/logos/WRAS_Rectangle.jpg";
import "./Footer.css";

function Footer() {
	return (
		<footer className="footer" id="footer">
			<header className="footer-title" id="footer-title">
				<h2 className="footer-logo" id="footer-logo">
					<a href="/wras" className="footer-logo__link" id="footer-logo__link">
						<img src="/wras/assets/logos/WRAS_Rectangle.jpg" className="footer-logo__image" id="footer-logo__image" alt="WRAS-FM 88.5" />
					</a>
				</h2>
			</header>
			<section className="footer-content" id="footer-content">
				<FooterSection
					title="Listen"
					links={[
						{ href: "/wras/programming", children: "Programming" },
						{ href: "/wras/media", children: "Media" },
						{ href: "/wras/charts", children: "Charts" },
						{ href: "/wras/archives", children: "Archives" }
					]} />
				<FooterSection
					title="WRAS-FM 88.5"
					links={[
						{ href: "/wras/about", children: "About" },
						{ href: "/wras/contact", children: "Contact Us" },
						{ href: "/wras/staff", children: "Staff" },
						{ href: "/wras/affairs", children: "Affairs" },
						{ href: "/wras/88sessions", children: "88 Sessions" },
						{ href: "https://pin.gsu.edu/organization/wras-album-88", children: "Join Us" }
					]} />
				<FooterSection
					title="Affiliates"
					links={[
						{ href: "https://georgiastatesignal.com", children: "Georgia State Signal" },
						{ href: "https://engagement.gsu.edu/sga", children: "Student Government Association" },
						{ href: "https://communication.gsu.edu/student-media-organizations", children: "Student Media" },
						{ href: "https://gsu.edu", children: "Georgia State University" }
					]} />
				<FooterSection
					title="Follow Us"
					links={[
						{ href: "#", children: <FaInstagram /> },
						{ href: "#", children: <FaTwitter /> }
					]} />
				{/* <nav className="footer-section">
					<h3 className="footer-section__title">Contact Us</h3>
					<ul className="footer-links">
						<li className="footer-item">
							<a href="#" className="footer-link"></a>
						</li>
					</ul>
				</nav> */}
			</section>
			<section className="footer-info" id="footer-info">
				<address className="contact-info" id="contact-info">
					<ul className="contact-list" id="contact-list">
						<li className="contact-item">
							<span className="contact-heading">Phone: </span>
							<a href="tel:4044131592" className="contact-link">(404) 413-1592</a>
						</li>
						<li className="contact-item">
							<span className="contact-location">Student Center West 271</span>
							<span className="contact-address">66 Courtland Street SE, Atlanta, GA 30303</span>
						</li>
					</ul>
				</address>
				<div className="copyright-info" id="copyright-info">&copy;1968-2023 WRAS-FM 88.5, Georgia State University</div>
			</section>
		</footer>
	)
}

export default Footer