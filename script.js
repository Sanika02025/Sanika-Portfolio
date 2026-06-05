console.log("Portfolio Loaded Successfully");

window.addEventListener("scroll",()=>{
  document.querySelector(".navbar")
    .classList.toggle("scrolled",window.scrollY>50);
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

 reveals.forEach((item)=>{

   const top=item.getBoundingClientRect().top;

   if(top < window.innerHeight-100){
      item.classList.add("active");
   }

 });

});
















// gsap.from(".hero-left", {
//   y: 100,
//   opacity: 0,
//   duration: 1.2,
// });

// gsap.from(".hero-card", {
//   x: 100,
//   opacity: 0,
//   duration: 1.2,
// });

// gsap.from(".navbar", {
//   y: -100,
//   opacity: 0,
//   duration: 1,
// });
// const glow = document.createElement("div");

// glow.classList.add("cursor-glow");

// document.body.appendChild(glow);

// document.addEventListener("mousemove", (e) => {
//   glow.style.left = e.clientX + "px";

//   glow.style.top = e.clientY + "px";
// });
// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray("section").forEach((section) => {
//   gsap.from(section, {
//     opacity: 0,
//     y: 80,

//     duration: 1,

//     scrollTrigger: {
//       trigger: section,
//       start: "top 80%",
//     },
//   });
// });
// window.addEventListener("load", () => {
//   const loader = document.getElementById("loader");

//   loader.style.opacity = "0";

//   setTimeout(() => {
//     loader.style.display = "none";
//   }, 1000);
// });
// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.clientX + "px";

//   cursor.style.top = e.clientY + "px";
// });
