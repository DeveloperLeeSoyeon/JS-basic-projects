/**
 * 버튼 생성 함수
 * @param {*} type
 * @returns
 */
const createBtn = type => {
    const button = document.createElement("button");
    const iconTag = document.createElement("i");

    if (type === "close") {
        button.classList.add("close-btn");
        iconTag.classList.add("fas", "fa-times");
    } else if (type === "sidebar-toggle") {
        button.classList.add("sidebar-toggle");
        iconTag.classList.add("fas", "fa-bars");
    }
    button.appendChild(iconTag);
    return button;
};

/**
 * 태그 생성 및 클래스 추가 함수
 * @param {*} tag : 태그 이름
 * @param {*} className : 클래스 이름
 * @param {*} src : img 태그일 경우 src 추가
 * @returns
 */
const createElementWithClass = (tag, className, src) => {
    const el = document.createElement(tag);
    el.classList.add(className);

    // img 태그일 경우
    if (tag === "img" && src) {
        el.src = src;
    }
    return el;
};

/**
 * 리스트 생성 함수 (네비게이션 링크 / 소셜 아이콘)
 * @param {*} items
 * @param {*} type
 * @returns
 */
const createList = (items, type) => {
    const list = document.createElement("ul");
    list.classList.add(type === "social" ? "social-icons" : "links");

    items.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        if (type === "social") {
            a.href = item.link;
            const icon = document.createElement("i");
            icon.classList.add(item.class1, item.class2);
            a.appendChild(icon);
        } else if (type === "links") {
            a.href = `${item}.html`;
            a.textContent = item;
        }

        li.appendChild(a);
        list.appendChild(li);
    });

    return list;
};

/**
 * 사이드바 생성 함수
 * @returns
 */
const createSidebar = () => {
    const sidebar = createElementWithClass("aside", "sidebar");

    // 1) 사이드바 헤더 생성
    const sidebarHeader = createElementWithClass("div", "sidebar-header");

    const logo = createElementWithClass("img", "logo", "logo.svg");
    const closeButton = createBtn("close");
    sidebarHeader.appendChild(logo);
    sidebarHeader.appendChild(closeButton);

    // 2) 리스트들 생성
    const linkNames = ["home", "about", "projects", "contact"];
    const socialMedia = [
        { class1: "fab", class2: "fa-facebook", link: "https://www.facebook.com" },
        { class1: "fab", class2: "fa-twitter", link: "https://www.twitter.com" },
        { class1: "fab", class2: "fa-behance", link: "https://www.behance.net" },
        { class1: "fab", class2: "fa-linkedin", link: "https://www.linkedin.com" },
        { class1: "fab", class2: "fa-sketch", link: "https://www.sketch.com" },
    ];
    const links = createList(linkNames, "links");
    const socialIcons = createList(socialMedia, "social");

    // 3) 사이드바에 요소 추가 (헤더, 리스트들)
    sidebar.appendChild(sidebarHeader);
    sidebar.appendChild(links);
    sidebar.appendChild(socialIcons);

    document.body.appendChild(sidebar);
};
/**
 * 이벤트 추가 함수
 */
const setSidebarEvents = () => {
    const sidebar = document.querySelector(".sidebar");
    const closeButton = document.querySelector(".close-btn");

    const sidebarToggle = createBtn("sidebar-toggle");
    document.body.appendChild(sidebarToggle);

    // 사이드바 토글 버튼 클릭 이벤트
    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("show-sidebar");
    });

    // 닫기 버튼 클릭 이벤트
    closeButton.addEventListener("click", () => {
        sidebar.classList.remove("show-sidebar");
    });
};

window.onload = () => {
    createSidebar();
    setSidebarEvents();
};
