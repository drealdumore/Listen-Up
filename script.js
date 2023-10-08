"use strict";

/// User
const user1 = {
  user: "Saint",
  pin: 1111,
};

const user2 = {
  user: "Mikel",
  pin: 8888,
};

const user3 = {
  user: "Jane",
  pin: 9999,
};
const users = [user1, user2, user3];

const history = [];
const queueArr = [];

const playlist = [
  {
    id: "peaceful",
    user_id: "007",
    name: "peaceful sounds",
  },
  {
    id: "deepfocus",
    user_id: "007",
    name: "deep focus",
  },
  {
    id: "international",
    user_id: "007",
    name: "international study",
  },
  {
    id: "focusflow",
    user_id: "007",
    name: "focus flow",
  },
  {
    id: "breaklimits",
    user_id: "007",
    name: "break limits",
  },
  {
    id: "enjoyalone",
    user_id: "007",
    name: "enjoy alone",
  },
  {
    id: "repeatrewind",
    user_id: "007",
    name: "repeat rewind",
  },
  {
    id: "releaseradar",
    user_id: "007",
    name: "release radar",
  },
];

const playlist_songs = [
  {
    playlist_id: "peaceful",
    id: "149262",
    artist: "Markotopa",
    title: "A call to the soul",
    img: "img/apemultiverse-20220823-0001.jpg",
    path: "audio/a-call-to-the-soul-149262.mp3",
  },
  {
    playlist_id: "peaceful",
    id: "147979",
    artist: "SergePavkinMusic",
    title: "reflected light",
    img: "img/IMG_20230504_173418.jpg",
    path: "audio/reflected-light-147979.mp3",
  },
  {
    playlist_id: "peaceful",
    id: "145038",
    artist: "Music_For_Videos",
    title: "Relaxing",
    img: "img/fass.webp",
    path: "audio/relaxing-145038.mp3",
  },
  {
    playlist_id: "peaceful",
    id: "152722",
    artist: "Olexy",
    title: "Summer walk",
    img: "img/Snapchat-1925539984.jpg",
    path: "audio/summer-walk-152722.mp3",
  },
  {
    playlist_id: "peaceful",
    id: "160166",
    artist: "FASSounds",
    title: "Good Night",
    img: "img/fass.webp",
    path: "audio/good-night-160166.mp3",
  },

  {
    playlist_id: "deepfocus",
    id: "36t46",
    artist: "Purrple Cat",
    title: "Wondering",
    img: "img/IMG_20230503_230400.jpg",
    path: "audio/Wondering by Purrple Cat__.mp3",
  },
  {
    playlist_id: "deepfocus",
    id: "6y7re5",
    artist: "Tokyo Music Walker",
    title: "Memories of Spring",
    img: "img/Snapchat-256539643.jpg",
    path: "audio/Memories of Spring by Tokyo Music Walker__.mp3",
  },
  {
    playlist_id: "deepfocus",
    id: "y64y",
    artist: "Sakura Girl",
    title: "Late at Night",
    img: "img/IMG_20230503_230400.jpg",
    path: "audio/Late at Night by Sakura Girl__.mp3",
  },
  {
    playlist_id: "deepfocus",
    id: "76535",
    artist: "Purrple Cat",
    title: "Signs of Life",
    img: "img/Snapchat-440746153.jpg",
    path: "audio/Signs of Life by Purrple Cat__.mp3",
  },
  {
    playlist_id: "deepfocus",
    id: "uu6467",
    artist: "Purrple Cat",
    title: "Lost and Found",
    img: "img/IMG_20230503_230400.jpg",
    path: "audio/Lost-and-Found by purple cat.mp3",
  },

  {
    playlist_id: "international",
    id: "112186",
    artist: "Late Coder",
    title: "Coding Night",
    img: "img/IMG_20230504_173342.jpg",
    path: "audio/coding-night-112186.mp3",
  },
  {
    playlist_id: "international",
    id: "122698",
    artist: "Unknown",
    title: "Meditation Sounds",
    img: "img/_nogginsworld_-20220507-0002.jpg",
    path: "audio/meditation-sounds-122698.mp3",
  },
  {
    playlist_id: "international",
    id: "145636",
    artist: "unknown",
    title: "Eco Technology",
    img: "img/alecmonopolyart-0008.jpg",
    path: "audio/eco-technology-145636.mp3",
  },
  {
    playlist_id: "international",
    id: "125566",
    artist: "Late Coder",
    title: "please calm my mind",
    img: "img/IMG_20230504_173342.jpg",
    path: "audio/please-calm-my-mind-125566.mp3",
  },
  {
    playlist_id: "international",
    id: "112191",
    artist: "Lofi",
    title: "Lofi Study",
    img: "img/billionaire_ape_nft-20220823-0001.jpg",
    path: "audio/lofi-study-112191.mp3",
  },

  {
    playlist_id: "enjoyalone",
    id: "ki6546",
    artist: "Juice Wrld",
    title: "All Alone",
    img: "img/blythe_behindthelens-20230805-0001.jpg",
    path: "audio/Juice_WRLD_-_All_Alone.mp3",
  },
  {
    playlist_id: "enjoyalone",
    id: "k9ine",
    artist: "ArrDee",
    title: "Come Go",
    img: "img/blythe_behindthelens-20230805-0002.jpg",
    path: "audio/ArrDee_Come_Go_(thinkNews.com.ng).mp3",
  },

  {
    playlist_id: "releaseradar",
    id: "157083",
    artist: "unknown",
    title: "prank",
    img: "img/dariocarlucci-20220718-0025.jpg",
    path: "audio/prank-157083.mp3",
  },
  {
    playlist_id: "releaseradar",
    id: "149172",
    artist: "unknown",
    title: "ferrari spa",
    img: "img/ziadrizkalla-20230209-0005.jpg",
    path: "audio/ferrari-spa-149172.mp3",
  },
  {
    playlist_id: "releaseradar",
    id: "114806",
    artist: "unknown",
    title: "Teenagers having fun",
    img: "img/ziadrizkalla-20230209-0008.jpg",
    path: "audio/teenagers-having-fun-114806.mp3",
  },
  {
    playlist_id: "releaseradar",
    id: "106865",
    artist: "unknown",
    title: "i cant fall in love",
    img: "img/reflected light.webp",
    path: "audio/i-canx27t-fall-in-love-106865.mp3",
  },
  {
    playlist_id: "releaseradar",
    id: "21684",
    artist: "unknown",
    title: "pour up",
    img: "img/Snapchat-440746153.jpg",
    path: "audio/pour-up-21684.mp3",
  },
  {
    playlist_id: "releaseradar",
    id: "156366",
    artist: "unknown",
    title: "heavystone",
    img: "img/Snapchat-748836033.jpg",
    path: "audio/heavystone_-_info-official-audio-prod-by-razzo-beat-hitz-triff-records-156366.mp3",
  },
];

const userName = document.querySelector(".input__user");
const userPin = document.querySelector(".input__pin");
const userBtn = document.querySelector(".input__btn");
const userImg = document.querySelector(".user__img");

const playingName = document.querySelector(".playing__name");
const playingImg = document.getElementById("playingImg");
const playingArtist = document.querySelector(".playing__artist");

const modal = document.querySelector(".modal");
const nav = document.querySelector(".nav");
const player = document.querySelector(".player");
const playerMain = document.querySelector(".player-main");
const playing = document.querySelector(".play-active");
const playOver = document.querySelector(".playing-overlay");
const playingClose = document.querySelector(".playing_close");
const error = document.querySelector(".error");
const greeting = document.querySelector(".home__greeting");
const homePage = document.querySelector(".home__page");
const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const userPage = document.querySelector(".userPage");
const openNotification = document.querySelector(".notification");
const profileName = document.querySelector(".user__name");
const searchBody = document.querySelector(".search_");
const searchInput = document.querySelector(".search__input");

const likesPage = document.querySelector(".likes");
const likesList = document.querySelector(".likes__list");
const likesClose = document.querySelector(".likes_close");

const historyList = document.querySelector(".history__list");
const historyPage = document.querySelector(".history");
const historyClose = document.querySelector(".history_close");

const queueList = document.querySelector(".queue__list");
const queueClose = document.querySelector(".queue_close");

const queue = document.querySelector(".queue");
const playerMov = document.querySelector(".player__mov");
const navItem = document.querySelector(".nav__item");
const navItemActive = document.querySelector(".nav__item--active");

const featureDivs = document.querySelectorAll(".feature");
const playlistView = document.querySelector(".playlist-view");
const PlaylistList = document.getElementById("playlist__list");
const playlistheading = document.getElementById("playlist-heading");

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const play2 = document.getElementById("play2");
const pause2 = document.getElementById("pause2");
const backSong = document.getElementById("back");
const nextSong = document.getElementById("next");
const audio = document.getElementById("audio");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const progress = document.getElementById("progress");
const queueBtn = document.getElementById("queueBtn");
const playerName = document.getElementById("playerName");
const playerArtist = document.getElementById("playerArtist");
const playerImg = document.getElementById("playerImg");
const likeNav = document.getElementById("likeNav");
const homie = document.getElementById("homie");
const fro = document.getElementById("fro");

let currentSong = null;

/// MODAL
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//// LOG IN
let activeUser;

userBtn.addEventListener("click", function (e) {
  e.preventDefault();

  activeUser = users.find((u) => u.user == userName.value);
  // activeSong = songs.find((s) => s.song == id.value);

  // console.log(activeUser)

  if (activeUser.pin === Number(userPin.value)) {
    // modal to dissappear.
    modal.classList.add("hidden");

    // container dissapears
    container.classList.add("hidden");

    // display loading for .2sec
    openNotification.classList.remove("hidden");

    // to change pics and username according to users
    view();
  } else if (
    users.find((u) => u.user !== userName.value) &&
    activeUser.pin !== userPin.value
  ) {
    // display error messages
    error.classList.toggle("hidden");

    // display red
    userPin.classList.toggle("wrong");
    userName.classList.toggle("wrong");
  }
});

const view = function () {
  setTimeout(() => {
    const imgs = `<img src="img/user-${activeUser.user}.jpg" alt="${activeUser.user}" class="user__img">`;

    // remove overlay
    closeModal();

    // change username to current username
    profileName.innerHTML = `${activeUser.user}`;

    // display userPage
    userPage.classList.remove("hidden");

    // change userImage to current userImage
    userImg.insertAdjacentHTML("beforebegin", imgs);

    // display greetin with user name
    greeting.textContent = salute();

    // display music player
    player.classList.remove("hidden");
  }, 1500);
};

// GREETINGS based on time
const salute = function () {
  const now = new Date();
  const hours = now.getHours();
  let salutation;
  if (hours >= 5 && hours < 12) {
    salutation = `Good Morning, ${activeUser.user}`;
  } else if (hours > 12 && hours < 18) {
    salutation = `Good afternoon, ${activeUser.user}`;
  } else {
    salutation = `Good evening, ${activeUser.user}`;
  }
  return salutation;
};

class Likes {
  constructor() {
    this.likes = [];
  }

  addLike(id, title, artist, img) {
    const like = { id, title, artist, img };
    this.likes.push(like);
    return like;
  }

  deleteLike(id) {
    const index = this.likes.findIndex((el) => el.id === id);
    this.likes.splice(index, 1);
  }
  //  to check array if song is liked or not
  isLiked(id) {
    return this.likes.find((el) => el.id === id);
  }
  // // to get number of likes
  // getNumLikes() {
  //   return this.likes.length;
  // }
}

// LIKE CONTROLLER
const myLikes = new Likes();

const toggleLikeBtn = (songId) => {
  const iconString = myLikes.isLiked(songId) ? "icon-heart1" : "icon-heart";
  document
    .querySelector(".heart-icon use")
    .setAttribute("href", `img/sprite.svg#${iconString}`);

  document
    .querySelector(".heart-icon2 use")
    .setAttribute("href", `img/sprite.svg#${iconString}`);
};

// PLAY AUDIO
const playAudio = () => {
  audio.play();
  pause.classList.remove("hidden");
  pause2.classList.remove("hidden");
  play.classList.add("hidden");
  play2.classList.add("hidden");
};

play.addEventListener("click", playAudio);
play2.addEventListener("click", playAudio);

// PAUSE AUDIO
const pauseAudio = () => {
  audio.pause();
  play.classList.remove("hidden");
  play2.classList.remove("hidden");
  pause.classList.add("hidden");
  pause2.classList.add("hidden");
};

pause.addEventListener("click", pauseAudio);
pause2.addEventListener("click", pauseAudio);

// DURATION
audio.addEventListener("timeupdate", () => {
  const currentTime = formatTime(audio.currentTime);
  current.textContent = currentTime;

  if (!isNaN(audio.duration)) {
    const dur = formatTime(audio.duration);
    duration.textContent = dur;
  }

  // function to format duration into s
  function formatTime(timeInSec) {
    const min = Math.floor(timeInSec / 60);
    const sec = Math.floor(timeInSec % 60);
    return `${min}:${sec <= 9 ? "0" : ""}${sec}`;
  }
  const mov = (audio.currentTime / audio.duration) * 87;
  const mov2 = (audio.currentTime / audio.duration) * 98;
  progress.style.width = `${mov}%`;
  playerMov.style.width = `${mov2}%`;
});

// function to check if song exist in history
function songExist(song) {
  return history.find((playedSong) => playedSong.id === song.id);
}

// PLAYLIST
// the playlist should contain the list of songs inside it.
// the songs can be accessed via the id of the playlits, thus
// when a playlist cover is clicked,
//the userpage dissapear and a brand new page containing the list of songs in that playlist will be displayed
// CODE IT SO THAT WHEN A PARTICULAR FEATURE IS CLICKED, IT CORRESPONDS TO THE FEATURE OBJECT IN THE ARRAY AND DISPLAY THE SONGS IN THE ARRAY

// Function to populate playlist songs based on selected feature
function populatePlaylistSongs(selectedPlaylistId) {
  PlaylistList.innerHTML = ""; // cleat existing playlist

  const selectedPlaylist = playlist.find(
    (list) => list.id === selectedPlaylistId
  );
  playlistheading.textContent = selectedPlaylist.name;
  fro.textContent = selectedPlaylist.name;

  const songsInPlaylist = playlist_songs.filter(
    (song) => song.playlist_id === selectedPlaylistId
  );

  songsInPlaylist.forEach((song) => {
    const playlistSongItemHTML = generatePlaylistSongItem(song);
    PlaylistList.insertAdjacentHTML("beforeend", playlistSongItemHTML);
  });

  playlistView.classList.remove("hidden"); // show playlist view
}

function generatePlaylistSongItem(song) {
  return `
  <li rel="${song.id}" class="li">
    <a href="${song.id}" data-song="${song.id}" class="playlist__link">
      <figure class="playlist__fig">
          <img src="${song.img}" alt="${song.title}">
      </figure>
      <div class="playlist__data">
          <h4 class="playlist__name">${song.title}</h4>
          <p class="playlist__artist">${song.artist}</p>
      </div>
    </a>

    <div class="view-icons">
      <figure class="playing-gif hidden">
        <img src="img/playing.gif" alt="playing">
      </figure>
      <svg class="view-icon">
        <use xlink:href="img/sprite.svgicon-play2"></use>
      </svg>
    </div>
  </li>
  `;
}

// Handle click events
featureDivs.forEach((featureDiv) => {
  featureDiv.addEventListener("click", () => {
    const selectedPlaylistId = featureDiv.getAttribute("data-playlist-id");
    populatePlaylistSongs(selectedPlaylistId);

    homePage.classList.add("hidden"); // hide homePage view
    // playlistView.classList.remove('hidden'); // display playlistview
  });
});

// Handle close button click event
document.querySelector(".playlist-close").addEventListener("click", () => {
  playlistView.classList.add("hidden"); // hide playlist view
  homePage.classList.remove("hidden"); // hide playlist view
});

//to display the selected playlist song
let currentSindex = 0;
let isplaying = false;

function playSelectedSong(index) {
  const selectedSong = playlist_songs[index];
  currentSong = selectedSong;

  if (!songExist(selectedSong)) {
    history.push(selectedSong);
    historyItem(selectedSong);
  }

  if (selectedSong) {
    (playingName.textContent = selectedSong.title),
      (playerName.textContent = selectedSong.title),
      (playingImg.src = selectedSong.img),
      (playerImg.src = selectedSong.img),
      (playingArtist.textContent = selectedSong.artist),
      (playerArtist.textContent = selectedSong.artist),
      (audio.src = selectedSong.path);
    // playAudio()
    currentSindex = index;
    toggleLikeBtn(selectedSong.id);
    // console.log(selectedSong);
  }
}
playSelectedSong(currentSindex);

// NEXT SONG
function next() {
  currentSindex = (currentSindex + 1) % playlist_songs.length;
  playSelectedSong(currentSindex);
  playAudio();
}

// PREV SONG
function back() {
  currentSindex =
    (currentSindex - 1 + playlist_songs.length) % playlist_songs.length;
  playSelectedSong(currentSindex);
  playAudio();
}

nextSong.addEventListener("click", next);
backSong.addEventListener("click", back);

// ACTIVE
function active(songId) {
  // console.log("active");
  const activeSong = playlist_songs.find((song) => song.id === songId);

  if (activeSong) {
    playing.classList.toggle("hidden");
    playOver.classList.remove("hidden");
    playingName.textContent = activeSong.title;
    playerName.textContent = activeSong.title;
    playingImg.src = activeSong.img;
    playerImg.src = activeSong.img;
    playingArtist.textContent = activeSong.artist;
    playerArtist.textContent = activeSong.artist;
    audio.src = activeSong.path;
  }
}

// to display playingview of selected
PlaylistList.addEventListener("click", (e) => {
  if (e.target.matches(".li")) {
    e.preventDefault();
    const songId = e.target.getAttribute("rel");
    active(songId);
  }
});

// PROLLY  NEED TO CREATE A FUNCTION  SO THAT WHENEVER I CLICK ON ANY OF THIS LI ELEMENTS,
// BE IT HISTORY OR OTHREWISE, IT WILL DISPLAY THE PLAYING VIEW OFTHAT PARTICULAR SONG

const controlLike = () => {
  const currentID = currentSong.id;

  // console.log({id: '❤✔', currentID});

  // user has not yet liked current song
  if (!myLikes.isLiked(currentID)) {
    // add like to array
    const newLike = myLikes.addLike(
      currentID,
      currentSong.title,
      currentSong.artist,
      currentSong.img
    );

    // toggle like button
    toggleLikeBtn(currentID);

    // add like to ui
    renderLike(newLike);

    // user has liked current song
  } else {
    // remove like from array
    myLikes.deleteLike(currentID);

    // toggle like button
    toggleLikeBtn(currentID);

    // remove like from ui
    deleteLike(currentID);
  }
};

window.addEventListener("click", (e) => {
  if (
    e.target.matches(".heart-icon, .heart-icon *, .heart-icon2, .heart-icon2 *")
  ) {
    controlLike();
  }
});

const deleteLike = (id) => {
  const el = document.querySelector(
    `.likes__link[href*="${id}"]`
  ).parentElement;
  if (el) el.parentElement.removeChild(el);
};

const renderLike = (currentSong) => {
  const markup = `
     <li rel="${currentSong.id}" class="likeli">
      <a href="${currentSong.id}" class="playlist__link likes__link">
        <figure class="playlist__fig">
            <img src="${currentSong.img}" alt="${currentSong.title}">
        </figure>
        <div class="playlist__data">
            <h4 class="playlist__name">${currentSong.title}</h4>
            <p class="playlist__artist">${currentSong.artist}</p>
        </div>
      </a>
      <svg class="view-icon" id="unlikeView">
          <use xlink:href="img/sprite.svgicon-heart1"></use>
      </svg>
    </li>
  `;
  likesList.insertAdjacentHTML("beforeend", markup);
};

likesList.addEventListener("click", (e) => {
  if (e.target.matches(".likeli")) {
    e.preventDefault();
    const songId = e.target.getAttribute("rel");
    active(songId);
  }
});

// Function to view Search body and hide home page
const viewSearch = function (e) {
  searchInput.addEventListener("click", (e) => {
    e.preventDefault();
    searchBody.classList.remove("hidden");
    homePage.classList.add("hidden");
    playing.classList.add("hidden");
  });
};

// Function to close Search body
const closeSearch = function (e) {
  searchBody.classList.add("hidden");
  homePage.classList.remove("hidden");
};

// Function to view player body
const viewPlayer = function () {
  playerMain.addEventListener("click", () => {
    playing.classList.remove("hidden");
    homePage.classList.add("hidden");
    player.classList.add("hidden");
    searchBody.classList.add("hidden");
    playOver.classList.remove("hidden");
  });
};

// Function to close player body
const closePlayer = function (e) {
  playing.classList.add("hidden");
  homePage.classList.remove("hidden");
  player.classList.remove("hidden");
  playOver.classList.add("hidden");
  queue.classList.add("hidden");
  playlistView.classList.add("hidden");
  homie.classList.add("nav__item--active");
  likeNav.classList.remove("nav__item--active");
  historyNav.classList.remove("nav__item--active");
};

// To remove Search body with esc
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !searchBody.classList.contains("hidden")) {
    closeSearch();
  }
});

viewSearch();
viewPlayer();

playingClose.addEventListener("click", closePlayer);

/// DISPLAY PAGES
likeNav.addEventListener("click", () => {
  homePage.classList.add("hidden");
  likesPage.classList.remove("hidden");
  historyPage.classList.add("hidden");
  playlistView.classList.add("hidden");

  //to highlight selected
  likeNav.classList.add("nav__item--active");
  homie.classList.remove("nav__item--active");
  historyNav.classList.remove("nav__item--active");
});

historyNav.addEventListener("click", () => {
  homePage.classList.add("hidden");
  historyPage.classList.remove("hidden");
  likesPage.classList.add("hidden");
  playlistView.classList.add("hidden");

  //to highlight selected
  historyNav.classList.add("nav__item--active");
  homie.classList.remove("nav__item--active");
  likeNav.classList.remove("nav__item--active");
});

/// REMOVE PAGES
likesClose.addEventListener("click", () => {
  likeNav.classList.remove("nav__item--active");
  homie.classList.add("nav__item--active");
  homePage.classList.remove("hidden");
  likesPage.classList.add("hidden");
});

historyClose.addEventListener("click", () => {
  historyNav.classList.remove("nav__item--active");
  homie.classList.add("nav__item--active");

  homePage.classList.remove("hidden");
  historyPage.classList.add("hidden");
  playlistView.classList.add("hidden");
});

// HISTORY
function historyItem(currentSong) {
  const markup = `
    <li rel="${currentSong.id}" class="historyli">
      <a href="${currentSong.id}" class="playlist__link history__link">
          <figure class="playlist__fig">
              <img src="${currentSong.img}" alt="${currentSong.title}">
          </figure>
          <div class="playlist__data">
              <h4 class="playlist__name">${currentSong.title}</h4>
              <p class="playlist__artist">${currentSong.artist}</p>
          </div>
      </a>
    </li

  `;
  historyList.insertAdjacentHTML("beforeend", markup);
}

historyList.addEventListener("click", (e) => {
  if (e.target.matches(".historyli")) {
    e.preventDefault();
    const songId = e.target.getAttribute("rel");
    active(songId);
  }
});
