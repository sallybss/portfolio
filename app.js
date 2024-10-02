const carouselData = [
    {
        image: 'images/prr1.png',
        title: 'Fantasy Festival Vue project',
        description: 'The Fantasy Festival Vue project was a group project in which I focused on coding the website and deploying it through Firebase. We created a single-page application (SPA) to clearly differentiate the quest from the main festival website. Starting with a sitemap, wireframes, and high-fidelity mockups, we designed the site to be simple, visually appealing, and highly functional. It includes responsive design, interactive galleries, and small animations, while trust indicators such as SSL certification, an interactive map, and mobile friendliness enhance credibility. Built using Vue.js for dynamic components, the website prioritizes ease of use, sustainability, and user security.'
    },
    {
        image: 'images/pr2.png',
        title: 'TypeScript To-Do App',
        description: 'The TypeScript To-Do App project from my basic development environment class showcases a simple yet functional task management tool. Built with TypeScript, HTML, and CSS, the app allows users to add, edit, and remove tasks.'
    },
    {
        image: 'images/pr3.png',
        title: 'Advanced JavaScrip Project - Interactive gallery',
        description: 'The Advanced JavaScript Project - Interactive Gallery is a group project designed as a social media platform for artists, where the ideas was mine and one other person helped me with the coding part. The platform allows users to showcase and explore artwork, featuring user authentication with a login page for secure access. It provides a visually engaging, functional, and responsive experience, offering an intuitive platform for both artists and art enthusiasts.'
    },
    {
        image: 'images/pr4.png',
        title: 'Movie Editing - "Oblivion"',
        description: '“Oblivion” is a group movie project I undertook last semester, in which I served as the lead editor, utilizing Premiere Pro to realize our creative vision. Emphasizing storytelling and visual impact, our film was distinguished for its quality, achieving second place among 12 more. This project not only refined my editing skills but also exemplified the importance of collaboration in the overall filmmaking process.'
    },
    {
        image: 'images/app2.png',
        title: 'Wayfinding App',
        description: 'I developed a concept for a wayfinding app inspired by Pokémon Go as part of the final second semester group project, integrating interactive maps with game elements. The app guides users through quests using Google Maps, with paths highlighted in purple to align with the event’s theme. Users progress through various destinations, scanning QR codes to earn XP, which can later be redeemed for rewards. Featuring a simple registration process, the app effectively combines navigation, gaming, and an engaging user experience for future event attendees.'
    },
    {   
        image: 'images/google.png',
        title: 'Café Delivery App (For Google UX course)',
        description: '  For my Google UX course (Still in process 4 out of 7 sertificates are done), I am designing a fictional delivery app for my favorite café in Sofia,Bulgaria - Green Deli. While they are not my real client, the app is created out of my appreciation for the café, aiming to offer a smooth and user-friendly experience for ordering their products. This project allows me to explore user experience design within a practical, yet fictional, context.'
    }

];

let currentIndex = 0;

const imageElement = document.getElementById('carousel-image');
const textElement = document.getElementById('carousel-text');

updateCarousel(); 

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarousel();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel();
});

function updateCarousel() {
    const { image, title, description } = carouselData[currentIndex];
    imageElement.src = image;
    textElement.innerHTML = `<h2 class="carousel-title">${title}</h2><p class="carousel-description">${description}</p>`;
    

    document.getElementById('carousel-image').addEventListener('click', () => {
        const { image, title, description } = carouselData[currentIndex];
    
        modalTitle.textContent = title;
        modalImage.src = image;
    

        modalImage.style.display = "none"; 
    
        modalAdditionalText.innerHTML = additionalProjectDetails[currentIndex]; 
    
        modal.style.display = "block"; 
    });
}


const additionalProjectDetails = [
    "<p>The Fantasy Festival Vue project is designed to create a user-friendly single-page application promoting the Fantasy Quest Esbjerg event. We began by developing a detailed sitemap that guided our design process, including wireframes and high-fidelity mockups. Our design philosophy emphasized simplicity, functionality, and visual appeal, ensuring intuitive navigation with clearly defined call-to-action buttons.</p><p>To enhance user engagement, we integrated small animations and interactions using JavaScript and CSS, prioritizing a responsive design for usability across devices. Key trust indicators, such as SSL certification and an interactive map, were included to build credibility. Utilizing Vue.js enabled the creation of dynamic components, facilitating easier code management and future updates.</p><p>We deployed the project using Firebase, streamlining the launch process. Our collaborative approach, primarily through face-to-face meetings, fostered effective communication. We also conducted a testing phase that included A/B testing for design optimization and feedback collection, leading to a balanced design. Despite some limitations in participant diversity, the insights gained helped us refine our strategy, resulting in an effective promotional platform for the Fantasy Quest Esbjerg event.</p><p>Link to Site: <a href='https://fantasyquestesbjerg-e1b0a.web.app/' target='_blank'>https://fantasyquestesbjerg-e1b0a.web.app/</a></p>  ",
    "With two months of experience in TypeScript, I created this To-Do App as my first project to explore the language’s potential in building interactive web applications. The app allows users to efficiently manage their tasks by adding, editing, and removing entries. This project served as a hands-on opportunity to understand how TypeScript enhances JavaScript with type safety, making the development process more reliable and less prone to mistakes. Additionally, I learned to integrate TypeScript with HTML and CSS, improving my understanding of how they work together.<p>Link to GitHub: <a href='https://github.com/sallybss/TypeScript-App' target='_blank'>https://github.com/sallybss/TypeScript-App</a></p>",
    "<p>The Advanced JavaScript Project – Interactive Gallery(MyGal) is a group project designed to function as a social media platform for artists, where users can showcase and explore artwork. As the lead contributor to the concept, I collaborated with one other person for the coding. The platform includes user authentication, featuring a login page to ensure secure access, using Firebase for both the database and authentication, allowing artists to manage their profiles and upload their work.</p><p>This project emphasizes a well-balanced integration of functionality and design, resulting in a visually engaging and highly responsive platform. With a focus on usability, the platform ensures that both artists and art enthusiasts can easily navigate the site, explore artwork, and interact with content. The intuitive interface streamlines user interaction, making it simple for artists to upload their work and manage their profiles. Collaboration was facilitated through GitHub, which helped maintain version control and coordinate development efforts, ensuring smooth teamwork throughout the project.</p><p>Link to MyGal: <a href='' target='_blank'>Link will be uploaded in a month after the project ends</a></p>",
    "<p>“Oblivion” is a short group movie project I worked on for my Video Production class, where I took the role of lead editor using Premiere Pro. The film was designed to emphasize storytelling and visual impact, and our efforts were recognized when we achieved second place out of 13 entries, based on votes. In addition to editing, I have experience working with professional cameras and the entire pre-production process, including scriptwriting in FadeIn and creating a detailed storyboard.</p><p>Although we didn’t use green screen for this particular project, I am proficient in it from previous experiences. This project was an excellent opportunity to refine my skills in video editing, as well as understand the value of teamwork and collaboration in filmmaking.</p><p>Link to Movie: <a href='https://youtu.be/aSrRoauTqNI' target='_blank'>https://youtu.be/aSrRoauTqNI</a></p>",
    "<p>The Wayfinding App prototype is a creative solution inspired by Pokémon Go, designed to enhance the user experience during quests by integrating gaming elements with interactive mapping. Our goal was to create an engaging application that directs users through real-world locations while providing excitement and adventure.</p><p>The app features a straightforward registration process, requiring only a name and mobile number for quick access. Utilizing Google Maps, the app highlights routes in purple, aligning with the event’s color scheme, and initially unlocks the starting location, Torvet. As users progress, they can discover new destinations while anticipating surprises at each quest stop.</p><p>Upon arriving at a destination, participants engage with quest stations, where their unique QR codes are scanned, confirming their accomplishments and awarding XP. Users can accumulate XP throughout the quest, with the final destination offering the highest reward of 200 XP. At the end of the quest, earned XP can be redeemed for various rewards, including badges and merchandise. Additionally, the app allows users to track their progress and XP on their profiles, fostering a sense of achievement. Based on extensive research indicating strong interest in interactive wayfinding applications, this concept represents an ideal fusion of navigation, gaming, and user engagement, making it an exciting addition to my portfolio.</p><p>Link to Figma: <a href='https://www.figma.com/design/o1wBmiTgCWBuvrwOcgSONk/WAYFINDER?node-id=0-1&t=3GxPNZUXpPqNFNWm-1' target='_blank'>https://www.figma.com/design/o1wBmiTgCWBuvrwOcgSONk/WAYFINDER?node-id=0-1&t=3GxPNZUXpPqNFNWm-1</a></p>",
    "<p>For my Google UX course, I am currently designing a fictional delivery app for Green Deli, a café in Sofia that I personally enjoy. Although they aren’t a real client, this project is inspired by my admiration for the café and aims to create an intuitive, easy-to-use app for customers to order their favorite products. This work allows me to explore key elements of user experience design, from wireframing to prototyping, while addressing real-world challenges such as enhancing the online ordering process and ensuring a smooth user journey.</p><p>In the delivery app, I implemented several key features to enhance user experience. One is a favorite list, where users can easily save and reorder their preferred meals with just a few taps. To make the delivery process more transparent, users can track their orders in real-time, integrated with Google Maps for accurate location tracking. </p><p>Additionally, I developed a membership system that rewards loyal customers based on the number of their purchases. There are three tiers: silver (5-15 orders), golden (20-35 orders), and diamond (35+ orders). Silver members enjoy 20% off and free delivery on their first order, golden members receive free delivery every time, and diamond members benefit from free delivery plus 5-10% off on each order. This system encourages customer retention and offers clear incentives for frequent use of the app.</p><p>With 4 out of 7 certificates completed, this project provides a practical way to apply UX principles in a fictional context. It helps me develop my skills in designing apps that focus on user needs, clear navigation, and an overall satisfying experience.</p><p>Link to Figma: <a href='https://www.figma.com/design/ohbdjrt6A31suFBtc3r7NZ/Google-course?node-id=0-1&t=0klLCwpzQvw7Y8Dw-1' target='_blank'>https://www.figma.com/design/ohbdjrt6A31suFBtc3r7NZ/Google-course?node-id=0-1&t=0klLCwpzQvw7Y8Dw-1</a></p>"
];

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalAdditionalText = document.getElementById("modal-additional-text");
const closeModal = document.getElementsByClassName("close")[0];

document.getElementById('carousel-image').addEventListener('click', () => {
    const { image, title, description } = carouselData[currentIndex];
    
    modalTitle.textContent = title;
    modalImage.src = image;

    modalImage.style.display = "none"; 

    modalAdditionalText.innerHTML = additionalProjectDetails[currentIndex]; 

    modal.style.display = "block"; 
});

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

