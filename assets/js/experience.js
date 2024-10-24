AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "System Administrator",
    cardImage: "assets/images/experience-page/MIC.png",
    place: "Mobile Invetory collation",
    time: "(Sep, 2016 - Aug, 2023)",
    desp: "<li>As a system administrator my focus was ensuring the smooth operation of systems. This included monitoring system performance, assigning tasks to users, and troubleshooting any issues that arose during stocketaking.</li> <li> My technical skills and problem-solving abilities allowed me to keep systems running efficiently and accurately, using platforms like flamerobin to access database and correct and issues via sql queries.</li> <li>I am dedicated to maintaining the highest level of data integrity and system security.</li>",
  },
  {
    title: "Supervisor",
    cardImage: "assets/images/experience-page/MIC.png",
    place: "Mobile Invetory collation",
    time: "(feb, 2014 - Sep, 2016)",
    desp: "<li>Organized the stocktaking process by numbering shelves and aisles, and assigning these numbers to the store floor layout for efficient tracking.</li><li>Prepared the store floor layout in advance to ensure all areas were properly mapped and labeled before stocktaking commenced.</li><li>Supervised the stocktaking team, ensuring that each member performed their assigned tasks accurately and efficiently on the store floor.</li>",
  },
  {
    title: "Activate Change Driver",
    cardImage: "assets/images/experience-page/Activate.png",
    place: "Activate",
    time: "(Jan, 2013 - Dec, 2013)",
    desp: "<li>The Activate Change Drivers program is a network of young leaders in South Africa, initiated in January 2012. It is designed to train youth to drive positive change for the public good, providing them with the skills and passion needed to make a difference in their communities.</li><li>To date, the program has trained over 2,500 young South Africans. It connects these individuals and equips them with the necessary tools and resources to effectively contribute to positive change within their communities.</li>",
  },
  {
    title: "Training facilitator",
    cardImage: "assets/images/experience-page/EMS.jpeg",
    place: "Emergency management services (BESAFE centre)",
    time: "(March, 2008 - Dec, 2010)",
    desp: "<li>I served as a facilitator for the City of Johannesburg Emergency Management Services, where my primary responsibility was training the community in fire safety and first aid. This role enabled me to educate and empower community members with vital life-saving skills.</li><li>Additionally, I conducted educational sessions at Early Childhood Development (ECD) centers, teaching fire safety and first aid to children. Through this, I was able to contribute to the safety and well-being of young learners by equipping them with essential knowledge at an early age.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Bootcamp Mentor",
    cardImage: "assets/images/experience-page/WTC logo.jpg",
    description:
      "Providing technical assistance, helping students understand coding concepts and effective problem solving. Facilitating group discussions, peer learning and promoting collaboration and teamwork among students. ",
  }
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Nerdma Hack-AI-thon",
    subtitle: "Participant",
    image: "assets/images/experience-page/Nerdma.jpeg",
    desp: "Nerdma hackathons act as innovation hubs, bringing together bright minds from various industries to solve complex problems and explore new technologies. These events foster creativity, collaboration, and experimentation, leading to innovative solutions, cross-functional teamwork, and exciting prototypes. Participants also have the chance to network, share knowledge, and win prizes, while gaining exposure to our company’s culture and strategic goals.",
    href: "https://nerdma.co.za/hackathons/",
  },
  {
    title: "Geekulcha annual hackathon",
    subtitle: "Participant",
    image: "assets/images/experience-page/Gkulcha.jpeg",
    desp: "This Annual Hackathon is a 36hour prominent tech event in Africa, bringing together developers, data enthusiasts, and innovators to create solutions that address various societal challenges. The hackathon focuses on sustainable development and encourages participants to build solutions in areas such as public service, safety, tourism, education, entertainment, and local economies. It offers opportunities to work on web and mobile apps, IoT solutions, and data visualizations, among others.",
    href: "https://gklink.co/hackathon?trk=public_post-text",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
