// Define content for each section
const sectionContent = {
    homeSection: '<div style="display: flex; width: 100%; align-items: center;"><div style="flex: 1; text-align: right;"><img src="assets/images/homepageProfile.jpeg" alt="Portrait" style="max-width: 100%; height: auto;"></div><div style="flex: 1; text-align: left; padding-left: 25px; font-family:Open Sans;"><p style="font-size: 34px; font-weight: 800;">Hello, I&rsquo;m Vishnu!</p><p style="width: 80%; font-size: 24px; font-weight: 500;">A passionate Fullstack Developer hailing from India, with a deep love for coding and building innovative solutions.</p></div></div>',
    aboutMeSection: '<div style="display: flex; flex-direction: column; align-items: center;"><div style="text-align: center;"><img src="assets/images/aboutMe.jpeg" alt="Portrait" style="max-width: 60%; height: auto;"></div><div style="text-align: justify; font-family: Open Sans;"><p style="width: 70%; font-size: 16px; margin-left: auto; margin-right: auto;"><span style="font-weight: bold;">Hi there!</span>,<br>I&rsquo;m Vishnu, a passionate fullstack developer with a knack for backend development. I hold a master&rsquo;s degree in Computer Applications from Pondicherry Central University. My journey started with a 6-month internship at NRSC Hyderabad, and for the past two years, I&rsquo;ve been thriving at Tunerlabs.</p><p style="width: 70%; font-size: 16px; margin-left: auto; margin-right: auto;">Currently, I&rsquo;m deeply involved in various open-source projects under the umbrella of Shikshalokam, an NGO dedicated to enhancing national education and leadership. I work collaboratively with governments and authorities, contributing to initiatives that aim to make a positive impact on education.</p><p style="width: 70%; font-size: 16px; margin-left: auto; margin-right: auto;">Feel free to drop me an email at <span style="color: #db345e; font-weight: 500;">vishnu@tunerlabs.com</span>. Let&rsquo;s connect and chat about all things tech and innovation!</p></div></div>',
    myWorkSection: '<div class="work-description" style="text-align: justify; font-family: Open Sans;"><div><h2 style="font-size: 22px; font-weight: bold; text-align: center;">Elevate Project</h2><p style="font-size: 14px; color: #808080; font-weight: bold; text-align: center;">November 2021 - Ongoing</p><p style="width: 70%; font-size: 16px; margin-left: auto; margin-right: auto;">ELEVATE (Energizing Leadership with Enhanced Visibility and Administrative Transformation towards Excellence) is an Open Source Technology Platform by ShikshaLokam. It is aimed at enabling and empowering educational initiatives and education leadership development across the globe.</p><p style="text-align: center;"><a href="https://github.com/ELEVATE-Project" style="color: #3498db; text-decoration: none; font-weight: bold;">GitHub Repository</a></p></div><div style="margin-top: 40px;"><h2 style="font-size: 22px; font-weight: bold; text-align: center;">Managed Learn Services</h2><p style="font-size: 14px; color: #808080; font-weight: bold; text-align: center;">November 2021 - Ongoing</p><p style="width: 70%; font-size: 16px; margin-left: auto; margin-right: auto;">Education Leadership Platform - ShikshaLokam enables and amplifies leadership development opportunities for individuals and institutions engaged in K-12 education.</p><p style="text-align: center;"><a href="https://github.com/shikshalokam" style="color: #3498db; text-decoration: none; font-weight: bold;">GitHub Repository</a></p></div></div>',
    notFound: '<p>Section not found.</p>',
};

// Load the home section by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadContent('homeSection');
});

function loadContent(section) {
    // Fetch content based on the selected section
    let content = sectionContent[section] || sectionContent.notFound;

    // Update the content div with the new content
    document.getElementById('content').innerHTML = content;
}
