let allVideos = [
    {
       name: "Computer Monitor Shape",
       src: "overview tarsus",
       id: "vid_1"
    },
    {
       name: "Button Hover Effect",
       src: "overview tarsus",
       id: "vid_2"
    },
    {
       name: "Confirm Password using Html CSS & js",
       src: "https://youtu.be/oTiZcpzmZNI?si=3qINqEZYYlFTzUTC",
       id: "vid_3"
    },
    {
       name: "Creative Card Hover Effect",
       src: "./media/Creative Card Hover Effect ",
       id: "vid_4"
    },
    {
       name: "Creative Digital Clock Ui Design",
       src: "./media/Creative Digital Clock Ui Design - Html Css & Vanilla Javascript-1",
       id: "vid_5"
    },
    {
       name: "Creative Our Team Section",
       src: "./media/Creative Our Team Section Using HTML & CSS Neumorphism",
       id: "vid_6"
    },
    {
       name: "Filter Text Animation Using Html and CSS",
       src: "./media/Filter Text Animation Using Htm and Pure CSS",
       id: "vid_7"
    },
    {
       name: "Glassmorphism Calculater New Design",
       src: "./media/Glassmorphism Calculater New Design Html",
       id: "vid_8"
    },
    {
       name: "How To  Make Cheatsheet",
       src: "./media/How To Make Cheatsheet Using Html, CSS and Javascript",
       id: "vid_9"
    },
    {
       name: "How to create Login Form",
       src: "./media/How to create Login Form Using Html and CSS",
       id: "vid_10"
    },
    {
       name: "How To Make Animated Menu Icon",
       src: "./media/How To Make Animated Menu Icon Using Html",
       id: "vid_11"
    },
    {
       name: "How to make Read More Function",
       src: "./media/How to make Read More Function using Html",
       id: "vid_12"
    },
    {
       name: "Vertical Navigation Bar",
       src: "./media/Vertical Navigation Bar Using Html And CSS",
       id: "vid_13"
    }
 ]

 // let's select all required tags or elements
const mainVideo = document.querySelector('#main-Video');
const musicList = document.querySelector('.music-list');
const playlist = document.getElementById('playlist');
const AllLessons = document.querySelector('.AllLessons');
const videoTitle = document.querySelector('.title');


const ulTag = document.querySelector("ul");
AllLessons.innerHTML = `${allVideos.length} Lessons`


let musicIndex = 1;
window.addEventListener('load',()=>{
   loadMusic(musicIndex);
   playingNow();
})
function playMusic(){
   mainVideo.play();
   playlist.classList.add('active')
}
function loadMusic(indexNumb){
   mainVideo.src = `${allVideos[indexNumb - 1].src}.mp4`;
   videoTitle.innerHTML = `${indexNumb}. ${allVideos[indexNumb - 1].name}`
   
}

for(let i = 0; i < allVideos.length; i++){
   let liTag = `<li li-index="${i + 1}">
      <div class="row">
         <span>${i + 1}. ${allVideos[i].name}</span>
      </div>
      <video class="${allVideos[i].id}" src="${allVideos[i].src}.mp4" style="display: none;" title="${allVideos[i].name}"></video>
      <span id="${allVideos[i].id}" class="duration"></span>
   </li>`;
   playlist.insertAdjacentHTML('beforeend',liTag); 

   let liVideoDuration = ulTag.querySelector(`#${allVideos[i].id}`)
   let liVideoTag = ulTag.querySelector(`.${allVideos[i].id}`);
   

   liVideoTag.addEventListener("loadeddata", ()=>{
      let videoDuration = liVideoTag.duration;
      let totalMin = Math.floor(videoDuration / 60);
      let totalSec = Math.floor(videoDuration % 60);
      // if totalSec is less then 10 then add 0 at the beginging
      totalSec < 10 ? totalSec = "0"+ totalSec : totalSec
      liVideoDuration.innerText = `${totalMin}:${totalSec}`;
      // adding t duration attribe which we'll use below
      liVideoDuration.setAttribute("t-duration", `${totalMin}:${totalSec}`);
   })  
}
// let's work on play particular song on click
const allLiTags = playlist.querySelectorAll('li');
function playingNow(){
   for(let j = 0; j<allVideos.length; j++){
      if(allLiTags[j].classList.contains('playing')){
         allLiTags[j].classList.remove("playing")
      }
      if(allLiTags[j].getAttribute('li-index')==musicIndex){
         allLiTags[j].classList.add('playing')
      }
      // adding onclick attribute in all li tags
      allLiTags[j].setAttribute("onclick", "clicked(this)")
   }
}

function clicked(element){
   // getting li index of particular clicked li tag
   let getIndex = element.getAttribute("li-index");
   musicIndex = getIndex;
   loadMusic(musicIndex);
   playMusic();
   playingNow();
}