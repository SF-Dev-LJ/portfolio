import { LightningElement, api } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import basePath from "@salesforce/community/basePath";
import TUK_LOGO from "@salesforce/resourceUrl/TUkLogo";
import TRAILHEAD_LOGO from "@salesforce/resourceUrl/TrailheadLogo";

/**
 * Portfolio Education Component
 * A WCAG 2.1 AA compliant education page component for Experience Cloud portfolio sites.
 *
 * Features:
 * - Formal education timeline
 * - Continuous learning showcase
 * - Skills and achievements display
 * - Responsive card layouts
 *
 * @author Liam Jeong
 */
export default class PortfolioEducation extends NavigationMixin(
	LightningElement
) {
	// ========================================
	// API Properties (Configurable via Builder)
	// ========================================

	/**
	 * Trailhead profile URL
	 * @type {string}
	 */
	@api trailheadProfileUrl =
		"https://www.salesforce.com/trailblazer/devliamjeong";

	// ========================================
	// Formal Education Data
	// ========================================

	/**
	 * Formal education history
	 * @returns {Array} Education objects
	 */
	get formalEducation() {
		return [
			{
				id: "edu-1",
				institution: "Tech University of Korea",
				institutionUrl: "https://www.tukorea.ac.kr/en/index.do",
				institutionLinkLabel:
					"Visit Tech University of Korea website (opens in new tab)",
				degree: "Bachelor's Degree, Computer Engineering",
				startYear: "2012",
				endYear: "2016",
				grade: "4.4 / 4.5",
				honors: "Honored Student",
				activities: null,
				logoUrl: TUK_LOGO,
				logoInitials: "TU",
				skills: [
					"Object-Oriented Programming (OOP)",
					"Computer Architecture",
					"Data Structures and Algorithms",
					"Software Design Patterns",
					"JAVA Programming",
					"Database Management",
				],
			},
			{
				id: "edu-2",
				institution: "Tech University of Korea",
				institutionUrl: "https://www.tukorea.ac.kr/en/index.do",
				institutionLinkLabel:
					"Visit Tech University of Korea website (opens in new tab)",
				degree: "Bachelor's Degree, Game & Multimedia Engineering",
				startYear: "2009",
				endYear: "2015",
				grade: "3.8 / 4.5",
				honors: null,
				activities:
					"Vocalist in a band, Leader of Software Tutoring Group",
				logoUrl: TUK_LOGO,
				logoInitials: "TU",
				skills: [
					"Software Development Life Cycle (SDLC)",
					"Game Development",
					"C++ Programming",
					"Software Optimization Techniques",
					"Network Programming",
					"AI Programming",
				],
			},
		];
	}

	// ========================================
	// Continuous Learning Data
	// ========================================

	/**
	 * Continuous learning and certifications
	 * @returns {Array} Learning platform objects
	 */
	get continuousLearning() {
		return [
			{
				id: "learn-1",
				platform: "Trailhead by Salesforce",
				provider: "Salesforce",
				year: "2019 – Present",
				achievement: "ALL STAR RANGER",
				profileUrl: this.trailheadProfileUrl,
				profileLinkLabel:
					"View Trailhead profile for Liam Jeong (opens in new tab)",
				logoUrl: TRAILHEAD_LOGO,
				logoInitials: "TH",
				badgeUrl: null,
				badgeAlt: "All Star Ranger Badge",
				skills: [
					"Salesforce Architecture",
					"Salesforce Development",
					"Salesforce Consultation",
					"Salesforce Administration",
				],
			},
		];
	}

	// ========================================
	// Navigation
	// ========================================

	/**
	 * Handle navigation link clicks
	 * @param {Event} event - Click event
	 */
	handleNavigation(event) {
		event.preventDefault();
		const url = event.currentTarget.dataset.url;

		this[NavigationMixin.Navigate]({
			type: "standard__webPage",
			attributes: {
				url: basePath + url,
			},
		});
	}
}
