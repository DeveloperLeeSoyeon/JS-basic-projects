const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://www.course-api.com/images/people/person-1.jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://www.course-api.com/images/people/person-2.jpeg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://www.course-api.com/images/people/person-4.jpeg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://www.course-api.com/images/people/person-3.jpeg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const idSelectors = ["personImg", "author", "job", "info"];
const classSelectors = ["prevBtn", "nextBtn", "randomBtn"];

const getElements = () => {
    const elements = {};
    classSelectors.forEach(cls => (elements[cls] = document.querySelector(`.${cls}`)));
    idSelectors.forEach(id => (elements[id] = document.getElementById(id)));
    return elements;
};

const { personImg, author, job, info, prevBtn, nextBtn, randomBtn } = getElements();

let currentItem = 0;

const updatePerson = index => {
    const item = reviews[index];
    personImg.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

const handleButtonClick = action => {
    if (action === "nextBtn") {
        currentItem = (currentItem + 1) % reviews.length;
    } else if (action === "prevBtn") {
        currentItem = (currentItem - 1 + reviews.length) % reviews.length;
    } else if (action === "randomBtn") {
        currentItem = Math.floor(Math.random() * reviews.length);
    }
    updatePerson(currentItem);
};

const setEventListeners = () => {
    // prevBtn.addEventListener("click", () => handleButtonClick("prevBtn"));
    // nextBtn.addEventListener("click", () => handleButtonClick("nextBtn"));
    // randomBtn.addEventListener("click", () => handleButtonClick("randomBtn"));
    classSelectors.forEach(cls => {
        const btn = document.querySelector(`.${cls}`);
        if (btn) {
            btn.addEventListener("click", () => handleButtonClick(cls));
        }
    });
};

window.onload = () => {
    updatePerson(currentItem);
    setEventListeners();
};
