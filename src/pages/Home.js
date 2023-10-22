import { TwitterTimelineEmbed } from "react-twitter-embed";
import Player from "../components/player/Player";
import Section from "../components/content/Section";

function Home() {
	return (
		<>
			<div className="row">
				<div className="column column-left">
					<Section title="What is WRAS-FM 88.5?">
						<p>WRAS is the student managed and operated radio station of Georgia State University. We are broadcasting 24 hours a day, 7 days a week on 88.5 FM with over 50,000 watts of quality programming and wonderful hosts. Programming is provided by GPB Atlanta from 5am to 7pm, and provided by Album 88 at Georgia State University from 7pm to 5am. You are welcome to listen online or browse through our archive of the following programming: shows, sports, and special affairs programming.</p>
						<ul>
							<li>Shows</li>
							<li>Sports
								<ul>
									<li>Football</li>
									<li>Basketball</li>
									<li>Baseball</li>
									<li>Beach Volleyball</li>
									<li>E-Sports</li>
								</ul>
							</li>
							<li>Music</li>
							<li>Special Affairs</li>
						</ul>
					</Section>
				</div>
				<aside className="column column-right">
					<Section title="What's Playing?" id="schedule" className="rc">
						<Player />
					</Section>
					<Section title="Twitter Feed" id="twitter-feed" className="rc">
						<TwitterTimelineEmbed
							sourceType="profile"
							screenName="album88atlanta"
							options={{ height: "400px" }} />
					</Section>
				</aside>
			</div>
		</>
	)
}

export default Home;