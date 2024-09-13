// Toggle Navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// Sidebar
const hamMenu = document.getElementById("hamMenu");
const sidebar = document.querySelector(".sidebar");
hamMenu.addEventListener("click", (event) => {
  sidebar.classList.add("active");
  hamMenu.style.opacity = 0;
});

const closeMenu = document.getElementById("closeMenu");
closeMenu.addEventListener("click", (event) => {
  sidebar.classList.remove("active");
  hamMenu.style.opacity = 1;
});

// Accordion
const accordionItemsHeader = document.querySelectorAll(
  ".accordion-items-header"
);

accordionItemsHeader.forEach((accordionItemsHeader) => {
  accordionItemsHeader.addEventListener("click", (event) => {
    const currentAccordionItemsHeader = document.querySelector(
      ".accordion-items-header.active"
    );

    if (
      currentAccordionItemsHeader &&
      currentAccordionItemsHeader !== accordionItemsHeader
    ) {
      currentAccordionItemsHeader.classList.toggle("active");
      currentAccordionItemsHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemsHeader.classList.toggle("active");

    const accordionItemsContent = accordionItemsHeader.nextElementSibling;
    if (accordionItemsHeader.classList.contains("active")) {
      accordionItemsContent.style.maxHeight =
        accordionItemsContent.scrollHeight + "px";
    } else {
      accordionItemsContent.style.maxHeight = 0;
    }
  });
});

// Hutao Voice
const audio = document.getElementById("myAudio");

function playRandomAudio() {
  // List Audio
  const audioFiles = [
    "VO_JA_Hu_Tao_About_Hu_Tao_-_Favorite_Tricks.ogg",
    "VO_JA_Hu_Tao_About_Hu_Tao_-_Name.ogg",
    "VO_JA_Hu_Tao_About_the_Vision.ogg",
    "VO_JA_Hu_Tao_Birthday.ogg",
    "VO_JA_Hu_Tao_Chat_-_Customers.ogg",
    "VO_JA_Hu_Tao_Chat_-_Taking_a_Break.ogg",
    "VO_JA_Hu_Tao_Chat_-_Wangsheng_Funeral_Parlor.ogg",
    "VO_JA_Hu_Tao_Deploying_Wind_Glider_03.ogg",
    "VO_JA_Hu_Tao_Fallen_03.ogg",
    "VO_JA_Hu_Tao_Favorite_Food.ogg",
    "VO_JA_Hu_Tao_Feelings_About_Ascension_-_01.ogg",
    "VO_JA_Hu_Tao_Feelings_About_Ascension_-_02.ogg",
    "VO_JA_Hu_Tao_Hello.ogg",
    "VO_JA_Hu_Tao_Joining_Party_03.ogg",
    "VO_JA_Hu_Tao_More_About_Hu_Tao_-_01.ogg",
    "VO_JA_Hu_Tao_Receiving_a_Gift_-_03.ogg",
    "VO_JA_Hu_Tao_Troubles.ogg",
    "VO_JA_Hu_Tao_When_It's_Windy.ogg",
    "VO_JA_Hu_Tao_When_It_Rains.ogg",
    "VO_JA_Hu_Tao_When_It_Snows.ogg",
    "VO_JA_Hu_Tao_When_the_Wind_Is_Blowing.ogg",
  ];

  // Randomizer
  let randomIndex = Math.floor(Math.random() * audioFiles.length);

  // Play Random Voice From The Files Src
  audio.src = "Hutao/" + audioFiles[randomIndex];

  // Play The Audio
  audio.play();
}
