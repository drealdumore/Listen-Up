// // const featureSongs =  {
// //   'peaceful-sounds': [
// //     {
// //       id: "149262",
// //       artist: "Markotopa",
// //       title: "A call to the soul",
// //       img: "img/rox.jpg",
// //       path: "audio/a-call-to-the-soul-149262.mp3",
// //     },
// //     {
// //       id: "147979",
// //       artist: "SergePavkinMusic",
// //       title: "reflected-light",
// //       img: "img/rox.jpg",
// //       path: "audio/reflected-light-147979.mp3",
// //     },
// //     {
// //       id: "145038",
// //       artist: "Music_For_Videos",
// //       title: "Relaxing",
// //       img: "img/rox.jpg",
// //       path: "audio/relaxing-145038.mp3",
// //     },
// //     {
// //       id: "152722",
// //       artist: "Olexy",
// //       title: "Summer walk",
// //       img: "img/rox.jpg",
// //       path: "audio/summer-walk-152722.mp3",
// //     },
// //     {
// //       id: "160166",
// //       artist: "FASSounds",
// //       title: "Good Night",
// //       img: "img/rox.jpg",
// //       path: "audio/good-night-160166.mp3",
// //     }
// //   ],

// //   'deep-focus': [
// //     {
// //       id: "e12fad232",
// //       artist: "Arizona Zervas",
// //       title: "ROXANNE",
// //       img: "img/rox.jpg",
// //       path: "audio/Arizona Zervas - ROXANNE.mp3",
// //     }
// //   ],

// //   'international-study': [
// //     {
// //       id: "112186",
// //       artist: "Late Coder",
// //       title: "Coding Night",
// //       img: "img/rox.jpg",
// //       path: "audio/coding-night-112186.mp3",
// //     },
// //     {
// //       id: "122698",
// //       artist: "Late Coder",
// //       title: "Meditation Sounds",
// //       img: "img/rox.jpg",
// //       path: "audio/meditation-sounds-122698.mp3",
// //     }
// //   ],

// //   'focus-flow': [
// //     {
// //       id: "36t46",
// //       artist: "Purrple Cat",
// //       title: "Wondering",
// //       img: "img/rox.jpg",
// //       path: "audio/Wondering by Purrple Cat__.mp3",
// //     }
// //   ],

// //   'break-limits': [
// //     {
// //       id: "7kij",
// //       artist: "",
// //       title: "",
// //       img: "img/rox.jpg",
// //       path: "audio/1gotta-constantly-learn.mp4",
// //     }
// //   ],

// //   'enjoy-alone': [
// //     {
// //       id: "ki6546",
// //       artist: "Juice Wrld",
// //       title: "All Alone",
// //       img: "img/rox.jpg",
// //       path: "audio/Juice_WRLD_-_All_Alone.mp3",
// //     }, 
// //     {
// //       id: "ki6546",
// //       artist: "ArrDee",
// //       title: "Come Go",
// //       img: "img/rox.jpg",
// //       path: "audio/ArrDee_Come_Go_(thinkNews.com.ng).mp3",
// //     }
// //   ],
  
// //   'repeat-rewind': [
// //     {
// //       id: "e12fad232",
// //       artist: "Arizona Zervas",
// //       title: "ROXANNE",
// //       img: "img/rox.jpg",
// //       path: "audio/Arizona Zervas - ROXANNE.mp3",
// //     }
// //   ], 

// //   'release-radar': [
// //     {
// //       id: "114806",
// //       artist: "Arizona Zervas",
// //       title: "Teenagers having fun",
// //       img: "img/rox.jpg",
// //       path: "audio/teenagers-having-fun-114806.mp3",
// //     }
// //   ]

// // }



// // Replaced with function {playaudio and pauseaudio}

// // // PLAY AUDIO
// // play.addEventListener("click", () => {
// //   audio.play();
// //   console.log("PLAY");
// //   play.classList.add("hidden");
// //   pause.classList.remove("hidden");
// // });

// // play2.addEventListener("click", () => {
// //   audio.play();
// //   console.log("PLAY");
// //   play2.classList.add("hidden");
// //   pause2.classList.remove("hidden");
// // });

// // // PAUSE AUDIO
// // pause.addEventListener("click", () => {
// //   audio.pause();
// //   console.log("PAUSE");
// //   play.classList.remove("hidden");
// //   pause.classList.add("hidden");
// // });

// // pause2.addEventListener("click", () => {
// //   audio.pause();
// //   console.log("PAUSE");
// //   play2.classList.remove("hidden");
// //   pause2.classList.add("hidden");
// // });


// /* #pause {
//   display: none;
//   opacity: 0;
//   visibility: 0;
// } */

// /* 

// // PLAY AUDIO

// const playAudio = (() => {
//   audio.play();
//   pause.classList.remove("hidden");
//   play.classList.add("hidden");
// })

// play.addEventListener("click", playAudio)
// play2.addEventListener("click", playAudio)

// // PAUSE AUDIO
// const pauseAudio = () => {
//   audio.pause();
//   console.log('xxxx')
//   play.classList.remove("hidden");
//   pause.classList.add("hidden");
// }

// pause.addEventListener("click", pauseAudio)
// pause2.addEventListener("click", pauseAudio) */


// // TO CLOSE QUEUE ---------------- NONE WORKING YET

// // remove queue ---------not working yet
// // const closeQueue = () => {
// //   const queueClose = document.querySelector(".queue-close");
// //   if (queueClose) {
// //     // queueClose.parentElement.removeChild(queueClose);
// //     queueClose.addEventListener("click", () => {
// //       queue.classList.add("hidden");
// //       console.log('grace')
// //     });
// //   }
// // };

// // closeQueue();


// // // const closeQ = () => {
// // //   const el = document.getElementById("child");
// // //   if (el) {
// // //     el.parentElement.removeChild(el);
// // //     console.log("grace");
// // //   }
// // // };

// // // closeQ();


// // queueClose.addEventListener('click', () => {
// //   console.log('hidd')
// //   queue.classList.add("hidden");

// // })



// /// TO TOGGLE HEARTS --- REPLACED WITH TOGGLEHEARTS FUNCTION

// // outHeart.addEventListener('click', () => {
// //   outHeart.classList.add('hidden')
// //   fullHeart.classList.remove('hidden')
// // })
// // fullHeart.addEventListener('click', () => {
// //   fullHeart.classList.add('hidden')
// //   outHeart.classList.remove('hidden')
// // })


// ///////////////////////
// //////////////////
// /////////
// // NOT USED YET


// // if liked, change heart icon to the thick heart. == if cliked, remove current heart and add the full heart


// // function toggleHearts () {
// //   outHeart.classList.toggle('hidden')
// //   outHeart2.classList.toggle('hidden')
// //   fullHeart.classList.toggle('hidden')
// //   fullHeart2.classList.toggle('hidden')
// // }

// // outHeart.addEventListener('click', toggleHearts)
// // outHeart2.addEventListener('click', toggleHearts)
// // fullHeart.addEventListener('click', toggleHearts)
// // fullHeart2.addEventListener('click', toggleHearts)
// // if cliked, add liked song with its current id into the likes likes menu

// // if liked menu is cliked, add current id to array of liked songs.




// // TO ACCESS LOCALSTORAGE

// // const myLikes = new Likes();

// // // restore liked songs on page load
// // window.addEventListener('load', () => {
// //   const myLikes = new Likes();
// //   myLikes.readStorage();
// //   myLikes.getNumLikes();
// // })




// // FOR REPEAT FUNCTION

// // function toggleRepeat() {
// //   if (repeatMode === "none") {
// //     repeatMode = "all";
// //     console.log("Repeat Mode: All");
// //   } else if (repeatMode === "all") {
// //     repeatMode = "one";
// //     console.log("Repeat Mode: one");
// //   } else {
// //     repeatMode = "none";
// //     console.log("Repeat Mode: one");
// //   }
// // }
// // repeatBtn.addEventListener("click", toggleRepeat);



// // /// TO DISPLAY QUEUE ////  E TUFF 
// // function playQueue() {
// //   if (queue.length > 0) {
// //     const songNext = queue.shift();
// //     playSong(songs.find(song => song.id === songNext.id))
// //     queueUi();
// //   }
// // }

// // const queueUi = () => {
// //   queueList.innerHTML = '';
// //   queueArr.forEach((song) => {
// //     queueItem(song)
// //   })
// // }

// // /// INSIDE THE PLAY SONG FUNCTON
// //  // queueArr.push(currentSong);
// //  queueArr.unshift(currentSong);
// //  // queueItem(currentSong);
// //  console.log('added to queue:', currentSong)
// //  queueUi();



// /// queue stand alone. should be called inside the playsong() as queueItem(currentSong)

// // function queueItem(currentSong) {
// //   // to display queue
// //   queueBtn.addEventListener("click", () => {
// //     queue.classList.remove("hidden");
// //   });

// //   const markup = `
// //     <li>
// //         <a href="#55" class="playlist__link">
// //             <figure class="playlist__fig">
// //                 <img src="${currentSong.img}" alt="${currentSong.title}">
// //             </figure>
// //             <div class="playlist__data">
// //                 <h4 class="playlist__name">${currentSong.title}</h4>
// //                 <p class="playlist__artist">${currentSong.artist}</p>
// //             </div>
// //         </a>
// //     </li>
// //   `;
// //   queueList.insertAdjacentHTML("beforeend", markup);

// //   // to close queue
// //   const queueClose = document.querySelector(".queue-close");
// //   queueClose.addEventListener("click", () => {
// //     queue.classList.add("hidden");
// //   });
// // }



// /// USED TO DISPLAY QUEUE AND CREATED DATE

// // QUEUE

// // to display queue
// // queueBtn.addEventListener("click", () => {
// //   queue.classList.remove("hidden");

// //   const markup = `
// //     <li>
// //         <a href="#55" class="playlist__link">
// //             <figure class="playlist__fig">
// //                 <img src="${currentSong.img}" alt="${currentSong.title}">
// //             </figure>
// //             <div class="playlist__data">
// //                 <h4 class="playlist__name">${currentSong.title}</h4>
// //                 <p class="playlist__artist">${currentSong.artist}</p>
// //                 <p class="search__artist">Uploaded: ${currentSong.created_at}</p>
// //             </div>
          
// //         </a>
// //     </li>
// //   `;
// //   queueList.insertAdjacentHTML("beforeend", markup);

// //   // to close queue
// //   const queueClose = document.querySelector(".queue-close");
// //   queueClose.addEventListener("click", () => {
// //     queue.classList.add("hidden");
// //   });
// // });




// // FAVORITES
// const fav = [];

// //favourite = if song is played for more than five times, add it to the fav array




// // data-song="${song.id}" 


// // (function interviewQstn (job) {
// //   if (job === 'teacher') {
// //     return function (name) {
// //       console.log(`what subject do you teach, ${name}`);
// //     }
// //   } else if (job === 'designer') {
// //     return function (name) {
// //       console.log(`${name}, explain UX design`);
// //     }
// //   } else {
// //     return function (name) {
// //       console.log(`what do you do, ${name}`);
// //     }
// //   }
// // })();

// // interviewQstn('teacher')('Jane')
// // interviewQstn('designer')('Jane')
// // interviewQstn('')('Jane')





// // GPT INPLEMENTED PLAYLIST


// // const playlist = [
// //   {
// //     id: "peaceful",
// //     user_id: "007",
// //     name: "peaceful sounds",
// //   },
// //   {
// //     id: "deepfocus",
// //     user_id: "007",
// //     name: "deep focus",
// //   },
// //   {
// //     id: "international",
// //     user_id: "007",
// //     name: "international study",
// //   },
// //   {
// //     id: "focusflow",
// //     user_id: "007",
// //     name: "focus flow",
// //   },
// //   {
// //     id: "breaklimits",
// //     user_id: "007",
// //     name: "break limits",
// //   },
// //   {
// //     id: "enjoyalone",
// //     user_id: "007",
// //     name: "enjoy alone",
// //   },
// // ];

// // const playlist_songs = [
// //   {
// //     playlist_id: "peaceful",
// //     id: "149262",
// //     artist: "Markotopa",
// //     title: "A call to the soul",
// //     img: "img/rox.jpg",
// //     path: "audio/a-call-to-the-soul-149262.mp3",
// //   },
// //   {
// //     playlist_id: "peaceful",
// //     id: "147979",
// //     artist: "SergePavkinMusic",
// //     title: "reflected-light",
// //     img: "img/rox.jpg",
// //     path: "audio/reflected-light-147979.mp3",
// //   },
// //   {
// //     playlist_id: "international",
// //     id: "112186",
// //     artist: "Late Coder",
// //     title: "Coding Night",
// //     img: "img/rox.jpg",
// //     path: "audio/coding-night-112186.mp3",
// //   },
// //   {
// //     playlist_id: "focusflow",
// //     id: "36t46",
// //     artist: "Purrple Cat",
// //     title: "Wondering",
// //     img: "img/rox.jpg",
// //     path: "audio/Wondering by Purrple Cat__.mp3",
// //   },
// // ];


// // const playlistDiv = document.querySelector(".playlist");
// // const PlaylistList = document.getElementById(".playlist__list");

// // // function to generate playlist item Html
// // function generatePlaylistItemHTML(playlist) {
// //   return `
// //     <li>
// //       <a href="${playlist.id}" class="playlist__link">
// //         <figure class="playlist__fig">
// //           <img src="img/alecmonopoly-0003.jpg" alt="${playlist.name}" />
// //         </figure>
// //         <div class="playlist__data">
// //           <h4 class="playlist__name">${playlist.name}</h4>
// //           <p class="playlist__artist">${playlist.name}</p>
// //         </div>
// //       </a>
// //       <div class="view-icons">
// //         <figure class="playing-gif">
// //           <img src="img/playing.gif" alt="playing">
// //         </figure>
// //         <!--<svg class="view-icon">
// //           <use xlink:href="img/sprite.svg#icon-download"></use>
// //         </svg> -->
// //         <svg class="view-icon">
// //           <use xlink:href="img/sprite.svg#icon-play2"></use>
// //         </svg>
// //       </div>
// //       <button class="playlist__remove">&times;</button>
// //     </li>
// //   `;
// // }

// // // function to generate playlist item Html
// // function generatePlaylistSongItemHTML(song) {
// //   return `
// //     <li>
// //       <a href="${song.id}" class="playlist__link">
// //         <figure class="playlist__fig">
// //           <img src="img/alecmonopoly-0003.jpg" alt="${song.title}" />
// //         </figure>
// //         <div class="playlist__data">
// //           <h4 class="playlist__name">${song.title}</h4>
// //           <p class="playlist__artist">${song.artist}</p>
// //         </div>
// //       </a>
// //       <div class="view-icons">
// //         <figure class="playing-gif">
// //           <img src="img/playing.gif" alt="playing">
// //         </figure>
// //         <!--<svg class="view-icon">
// //           <use xlink:href="img/sprite.svg#icon-download"></use>
// //         </svg> -->
// //         <svg class="view-icon">
// //           <use xlink:href="img/sprite.svg#icon-play2"></use>
// //         </svg>
// //       </div>
// //       <button class="playlist__remove">&times;</button>
// //     </li>
// //   `;
// // }


// // // populate playlist when page loads
// // function populatePlaylists() {
// //   playlistDiv.innerHTML = '';

// //   playlist.forEach((list) => {
// //     const playlistHtml = generatePlaylistItemHTML(list);
// //     playlistDiv.insertAdjacentHTML("beforeend", playlistHtml)
// //   })
// // }

// // // populate playlist song based on selected playlist
// // function populatePlaylistsSongs(selectedPlaylist) {
// //   PlaylistList.innerHTML = '';
  
// //   const songsInPlaylist = playlist_songs.filter((song) => song.playlist_id === selectedPlaylist.id)

// //   songsInPlaylist.forEach((song) => {
// //     const playlistSongItemHTML = generatePlaylistSongItemHTML(song);
// //     PlaylistList.insertAdjacentHTML('beforeend', playlistSongItemHTML)
// //   })
// // }

// // // populate playlist when page loads
// // populatePlaylists();

// // PlaylistList.addEventListener('click', (e) => {
// //   if (e.target.matches('.playlist__link')) {
// //     e.preventDefault();
// //     const playlistId = e.target.getAttribute('href').substring(1);
// //     const selectedPlaylist = playlist.find((list) => list.id === playlistId);
// //     populatePlaylistSongs(selectedPlaylist);
// //   }
// // })



// /// another one 

// // features.forEach((feature) => {
// //   feature.addEventListener('click', () => {
// //     console.log('1step')

// //     // CODE IT SO THAT WHEN A PARTICULAR FEATURE IS CLICKED, IT CORRESPONDS TO THE FEATURE OBJECT IN THE ARRAY AND DISPLAY TGHE SONGS IN THE ARRAY


// //   })
// // })

// // // To generate playlistList
// // function generatePlaylistList(playlist) {
// //   return `
// //     <div class="playlist__data">
// //       <a href="${playlist.id}" class="playlist__link">
// //       <h4 class="playlist__name">${playlist.name}</h4>
// //     </div>
// //   `;
// // }

// // // To generate playlistList songs
// // function generatePlaylistListItem(song) {
// //   return `
// //     <li>
// //       <a href="${song.id}" class="playlist__link">
// //         <figure class="playlist__fig">
// //           <img src="img/alecmonopoly-0003.jpg" alt="${song.title}" />
// //         </figure>
// //         <div class="playlist__data">
// //           <h4 class="playlist__name">${song.title}</h4>
// //           <p class="playlist__artist">${song.artist}</p>
// //         </div>
// //       </a>
// //     </li>
// //   `;
// // }


// // // add songs to playlist when page loads // for the faetures tho
// // function addPlaylistSongs() {
// //   PlaylistList.innerHTML = '';

// //   playlist.forEach((list) => {
// //     const playlistHtml = generatePlaylistList(list)
// //     PlaylistList.insertAdjacentHTML('beforeend', playlistHtml)
// //   })
// // }

// // addPlaylistSongs();


// // again ooo


// // const features = document.querySelectorAll(".feature");
// // const PlaylistList = document.getElementById(".playlist__list");


// // // function to add songs to playlist based on features
// // function addPlaylistSongs() {
// //   // PlaylistList.innerHTML = '';
// //   const songs = featureSongs[feature];
// //   if (!songs) {
// //     return;
// //   }

// //   songs.forEach((song) => {
//     // const markup = `
//     //   <li>
//     //     <a href="#55" class="playlist__link" data-song="${song.id}>
//     //       <figure class="playlist__fig">
//     //         <img src="${song.img}" alt="${song.title}" />
//     //       </figure>
//     //       <div class="playlist__data">
//     //         <h4 class="playlist__name">${song.title}</h4>
//     //         <p class="playlist__artist">${song.artist}</p>
//     //       </div>
//     //     </a>
//     //     <div class="view-icons">
//     //       <svg class="view-icon">
//     //         <use xlink:href="img/sprite.svg#icon-download"></use>
//     //       </svg>
//     //       <svg class="view-icon">
//     //         <use xlink:href="img/sprite.svg#icon-play2"></use>
//     //       </svg>
//     //     </div>
//     //     <button class="playlist__remove">&times;</button>
//     //   </li>
//     // `;
// //     PlaylistList.insertAdjacentHTML('beforeend', markup);
// //   })
// // }



// // const selectedFeature = feature.getAttribute('data-feature');
// // addPlaylistSongs();

// // // handle feature clicks
// // features.forEach((feature) => {
// //   feature.addEventListener('click', () => {
// //     const selectedFeature = feature.getAttribute('data-feature');
// //     addPlaylistSongs(selectedFeature);
// //   })
// // })




// // Function to populate playlist songs based on selected feature
// // function populatePlaylistSongs(selectedPlaylistId) {
// //   PlaylistList.innerHTML = ''; // cleat existing playlist

// //   const selectedPlaylist = playlist.find((list) => list.id === selectedPlaylistId)
// //   playlistheading.textContent = selectedPlaylist.name;

// //   const songsInPlaylist = playlist_songs.filter((song) => song.playlist_id === selectedPlaylistId);

// //   songsInPlaylist.forEach((song) => {
// //     const playlistSongItemHTML = generatePlaylistSongItem(song);
// //     PlaylistList.insertAdjacentHTML('beforeend', playlistSongItemHTML)
// //   });

// //   playlistView.style.display = 'block'; // show playlist view
// // }

// // function generatePlaylistSongItem(song) {
// //   return `

// //   <li>
// //     <a href="#${song.id}" data-song="${song.id} class="playlist__link history__link">
// //       <figure class="playlist__fig">
// //           <img src="${song.img}" alt="${song.title}">
// //       </figure>
// //       <div class="playlist__data">
// //           <h4 class="playlist__name">${song.title}</h4>
// //           <p class="playlist__artist">${song.artist}</p>
// //       </div>
// //     </a>

// //     <div class="view-icons">
// //       <figure class="playing-gif">
// //         <img src="img/playing.gif" alt="playing">
// //       </figure>
// //       <svg class="view-icon">
// //         <use xlink:href="img/sprite.svg#icon-play2"></use>
// //       </svg>
// //     </div>
// //     <button class="playlist__remove">&times;</button>
// //   </li>
// //   `;
// // }

// // // Handle click events
// // featureDivs.forEach((featureDiv) => {
// //   featureDiv.addEventListener('click', () => {
// //     const selectedPlaylistId = featureDiv.getAttribute('data-playlist-id');
// //     populatePlaylistSongs(selectedPlaylistId);
// //   });
// // });

// // // Handle close button click event
// // document.querySelector('.playlist-close').addEventListener('click', () => {
// //   playlistView.style.display = 'none'; // hide playlist view
// //   // homePage.classList.remove("hidden");
// //   // historyPage.classList.add("hidden");
// //   // playlistView.classList.add("hidden");
// // })



// // display claerlikesmodal

// // function clearLikesModal(currentSong) {
// //   return`
// //     <div class="clear-likes">
// //       <h3 class="clearhead">Remove from Liked Songs?</h3>
// //       <p class="clear-p">${currentSong.title} by ${currentSong.artist}</p>
// //       <button class="btn-clearfull">Remove</button>
// //       <button class="btn-clearout">Cancel</button>
// //     </div>
// //   `;
// // }

// // unlikeView.addEventListener("click", () => {
// //   const likesListModal = clearLikesModal(currentSong)


    
// //   likesList.insertAdjacentHTML("afterbegin", likesListModal);

// //   const clearout = document.querySelector(".btn-clearout");
// //   const clearLike = document.querySelector(".btn-clearfull");
// //   const clearLikeModal = document.querySelector(".clear-likes");

// //   clearout.addEventListener("click", () => {
// //     setTimeout(() => {
// //       clearLikeModal.classList.add("hidden");
// //     }, 200);
// //   });

// //   clearLike.addEventListener("click", () => {
// //     deleteLike(currentSong.id);
// //     myLikes.deleteLike(currentSong.id);
// //     toggleLikeBtn(currentSong.id);
// //     clearLikeModal.classList.add("hidden");
// //   });
// // });


// //another one
// // unlikeView.addEventListener("click", () => {
// //   return`
// //       <div class="clear-likes">
// //         <h3 class="clearhead">Remove from Liked Songs?</h3>
// //         <p class="clear-p">${currentSong.title} by ${currentSong.artist}</p>
// //         <button class="btn-clearfull">Remove</button>
// //         <button class="btn-clearout">Cancel</button>
// //       </div>
// //     `;


    
// //   likesList.insertAdjacentHTML("beforeend", markup);

// //   const clearout = document.querySelector(".btn-clearout");
// //   const clearLike = document.querySelector(".btn-clearfull");
// //   const clearLikeModal = document.querySelector(".clear-likes");

// //   clearout.addEventListener("click", () => {
// //     setTimeout(() => {
// //       clearLikeModal.classList.add("hidden");
// //     }, 200);
// //   });

// //   clearLike.addEventListener("click", () => {
// //     deleteLike(currentSong.id);
// //     myLikes.deleteLike(currentSong.id);
// //     toggleLikeBtn(currentSong.id);
// //     clearLikeModal.classList.add("hidden");
// //   });
// // });


// // markup to dispplay and remove claerlikemodal
// // const markup = `
//     //     <div class="clear-likes">
//     //       <h3 class="clearhead">Remove from Liked Songs?</h3>
//     //       <p class="clear-p">${currentSong.title} by ${currentSong.artist}</p>
//     //       <button class="btn-clearfull">Remove</button>
//     //       <button class="btn-clearout">Cancel</button>
//     //     </div>
//     //   `;
//     // likesList.insertAdjacentHTML("beforeend", markup);

//     // const clearout = document.querySelector(".btn-clearout");
//     // const clearLike = document.querySelector(".btn-clearfull");
//     // const clearLikeModal = document.querySelector(".clear-likes");

//     // clearout.addEventListener("click", () => {
//     //   setTimeout(() => {
//     //     clearLikeModal.classList.add("hidden");
//     //   }, 200);
//     // });

//     // clearLike.addEventListener("click", () => {
//     //   deleteLike(currentSong.id);
//     //   myLikes.deleteLike(currentSong.id);
//     //   toggleLikeBtn(currentSong.id);
//     //   clearLikeModal.classList.add("hidden");
//     // });



    
//   // unlikeView.addEventListener("click", () => {
//   //   deleteLike(currentSong.id);
//   //   myLikes.deleteLike(currentSong.id);
//   //   toggleLikeBtn(currentSong.id);
//   //   controlLike()
//   // });