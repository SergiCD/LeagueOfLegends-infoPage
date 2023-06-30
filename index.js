const videos = [
    {
        id: 0,
        videoSrc: "./img/gwen.jpg",
        iconSrc: "./img/top-icon.png",
    },
    {
        id: 1,
        videoSrc: "./img/lux.png",
        iconSrc: "./img/jung-icon.png",
    }, {
        id: 2,
        videoSrc: "./img/dark-cosmic-lux.gif",
        iconSrc: "./img/mid-icon.png",
    }, {
        id: 3,
        videoSrc: "./img/dark-cosmic-lux.gif",
        iconSrc: "./img/bottom-icon.png",
    }, {
        id: 4,
        videoSrc: "./img/dark-cosmic-lux.gif",
        iconSrc: "./img/supp-icon.png",
    },
]

const container = document.querySelector(".container");
const lanes = container.querySelector(".lanes");
lanes.innerHTML = "";
for (let i = 0; i < videos.length; i++) {
    lanes.innerHTML += `
    <li class="lane" style="--index:${videos[i].id}">
        <div class="video-wrapper" style="background-image: url('${videos[i].videoSrc}');"></div>
        <span class="lane-icon">
            <img src="${videos[i].iconSrc}" alt=""/>
        </span>
    </li>
    `;
}
const introducePart = container.querySelector(".introduce-part");
const detailPart = container.querySelector(".detail-part");
const videoWrapper = container.querySelectorAll(".video-wrapper");
const discoverBtn = container.querySelector(".discover-btn");
const backBtn = container.querySelector(".back-btn");

videoWrapper.forEach((wrapper) => {
    if (wrapper) {
        wrapper.addEventListener("mouseover", () => {
            wrapper.children[0].play();
        })
        wrapper.addEventListener("mouseout", () => {
            wrapper.children[0].pause();
        })
    }
})

discoverBtn.addEventListener("click", () => {
    introducePart.classList.add("hide");
    setTimeout(() => {
        detailPart.style.backdropFilter = "brightness(50%)";
        detailPart.classList.remove("hide");
    }, 600)
})

backBtn.addEventListener("click", () => {
    detailPart.classList.add("hide");
    detailPart.style.backdropFilter = "none";
    setTimeout(() => {
        introducePart.classList.remove("hide");
    }, 700)
})
