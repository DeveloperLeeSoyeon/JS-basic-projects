/**
 * img 태그 생성
 * @param {*} src
 * @param {*} alt
 * @param {*} className
 * @returns
 */
function createImgTag(src, alt, className) {
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.classList.add(className);
    return image;
}

/**
 * button 태그 생성 - 토글
 * @returns
 */
function createNavToggle() {
    const navToggle = document.createElement("button");
    navToggle.classList.add("nav-toggle");

    const iTag = document.createElement("i");
    iTag.classList.add("fas", "fa-bars");

    navToggle.appendChild(iTag);
    return navToggle;
}

// /**
//  * links 리스트 생성
//  * @param {*} linkNames
//  * @returns
//  */
// function createNavLinks(linkNames) {
//     const links = document.createElement("ul");
//     links.classList.add("links");

//     linkNames.forEach(name => {
//         const li = document.createElement("li");
//         const a = document.createElement("a");
//         a.href = `${name}.html`;
//         a.textContent = name;
//         li.appendChild(a);
//         links.appendChild(li);
//     });

//     return links;
// }

// /**
//  * 소셜 아이콘 생성
//  * @param {*} socialMedia
//  * @returns
//  */
// function createSocialIcons(socialMedia) {
//     const icons = document.createElement("ul");
//     icons.classList.add("social-icons");

//     socialMedia.forEach(media => {
//         const li = document.createElement("li");
//         const a = document.createElement("a");
//         a.href = media.link;

//         const icon = document.createElement("i");

//         //classList.add() : 공백으로 된 문자열 X
//         // icon.classList.add(media.icon);
//         // icon.classList.add(`${media.icon}`);
//         // icon.classList.add(...media.class.split(" "));
//         icon.classList.add(media.class1);
//         icon.classList.add(media.class2);

//         a.appendChild(icon);
//         li.appendChild(a);
//         icons.appendChild(li);
//     });

//     return icons;
// }

/**
 * 리스트 생성 함수
 * @param {*} items - 생성할 아이콘 또는 링크의 배열
 * @param {string} type - social nav를 지정하여 아이콘 또는 링크를 구분
 * @returns {HTMLElement} - 생성된 리스트
 */
function createList(items, type) {
    const list = document.createElement("ul");
    list.classList.add(type === "social" ? "social-icons" : "links");

    items.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        if (type === "social") {
            a.href = item.link;
            const icon = document.createElement("i");
            icon.classList.add(item.class1);
            icon.classList.add(item.class2);
            a.appendChild(icon);
        } else if (type === "nav") {
            a.href = `${item}.html`;
            a.textContent = item;
        }

        li.appendChild(a);
        list.appendChild(li);
    });

    return list;
}

/**
 * 소셜 아이콘 생성
 * @param {*} socialMedia
 * @returns {HTMLElement}
 */
function createSocialIcons(socialMedia) {
    return createList(socialMedia, "social");
}

/**
 * links 리스트 생성
 * @param {*} linkNames
 * @returns {HTMLElement}
 */
function createNavLinks(linkNames) {
    return createList(linkNames, "nav");
}

/**
 * nav bar 생성
 */
function createNav() {
    const nav = document.createElement("nav");
    const navCenter = document.createElement("div");
    navCenter.classList.add("nav-center");

    // 1) nav-header (로고, 토글 버튼)
    const navHeader = document.createElement("div");
    navHeader.classList.add("nav-header");

    const logo = createImgTag("./logo.svg", "logo", "logo");
    const navToggle = createNavToggle();

    navHeader.appendChild(logo);
    navHeader.appendChild(navToggle);

    // 2) ul class="links"
    const linkNames = ["home", "about", "projects", "contact"];
    const links = createNavLinks(linkNames);

    // 3) ul class="social-icons"
    const socialMedia = [
        { class1: "fab", class2: "fa-facebook", link: "#" },
        { class1: "fab", class2: "fa-twitter", link: "#" },
        { class1: "fab", class2: "fa-behance", link: "#" },
        { class1: "fab", class2: "fa-linkedin", link: "#" },
        { class1: "fab", class2: "fa-sketch", link: "#" },
    ];
    const socialIcons = createSocialIcons(socialMedia);

    navCenter.appendChild(navHeader);
    navCenter.appendChild(links);
    navCenter.appendChild(socialIcons);

    nav.appendChild(navCenter);

    document.body.prepend(nav);

    navToggle.addEventListener("click", () => {
        links.classList.toggle("show-links");
    });
}

window.onload = () => {
    createNav();
};
