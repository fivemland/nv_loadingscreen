/*=================================================================*\
/* By: 			|	Nevera Development  							|
/* FiveM: 		|	https://forum.cfx.re/u/neveradevelopment		|
/* Discord: 	|	https://discord.gg/NeveraDev/tw28AqrgWU  		|
/*=================================================================*/
/* If you have any problems you can contact us via discord. <3     */


var staff_team = [

	{
		"name":"Szerver Tulaj",
		"image":"https://forum.cfx.re/user_avatar/forum.cfx.re/infinity_adam/144/4447132_2.png",
		"rank":"Owner"
	},
	{
		"name":"Szerver admin",
		"image":"https://forum.cfx.re/user_avatar/forum.cfx.re/infinity_adam/144/4447132_2.png",
		"rank":"Admin"
	}

]

const tipsConfig = [
{
    title: "Tipp 1 (rövid)",
    text: "Mindig használd a biztonsági övet, amikor Los Santosban vezetsz.",
    img: "https://placehold.co/314x176/EEE/31343C",
    timeout: 10 // másodperc
},
{
    title: "Tipp 2 (hosszú)",
    text: "Fedezz fel különböző munkákat a szerveren, mint például taxisofőrködés, futárküldetések vagy akár bűnözői tevékenységek. Minden munkának megvannak a maga jutalmai és kockázatai. Ne feledd, hogy oszd be bölcsen az idődet, kerüld a felesleges konfliktusokat, és működj együtt más játékosokkal, hogy maximalizáld a nyereségedet és a lehető legjobban élvezd a szerepjáték élményt. Használd ki a különleges eseményeket és szezonális aktivitásokat, hogy egyedi jutalmakat szerezz. Mindig figyeld a térképet a dinamikus küldetések és spontán lehetőségek miatt, és gondoskodj arról, hogy a karaktered megfelelően fel legyen készülve minden kihívásra. Kapcsolatok építése más játékosokkal új szerepeket és kalandokat is megnyithat, így minden játékalkalom kiszámíthatatlan és izgalmas lehet.",
    img: "https://placehold.co/314x176/EEE/31343C",
    timeout: 10 // másodperc
},
{
    title: "Tipp 3 (üres kép)",
    text: "Legyen tartalék felszerelésed: fegyverek, járművek és elsősegélycsomagok nélkülözhetetlenek a váratlan helyzetek túléléséhez.",
    img: "",
    timeout: 10 // másodperc
},
{
    title: "Tipp 4 (nincs kép)",
    text: "Olvasd el figyelmesen a szerver szabályait, és tartsd be a szerepjáték irányelveit. A szabályok követése mindenki számára jobb élményt biztosít.",
    timeout: 10 // másodperc
},
{
    title: "Tipp 5 (helyi kép)",
    text: "Legyen tartalék felszerelésed: fegyverek, járművek és elsősegélycsomagok nélkülözhetetlenek a váratlan helyzetek túléléséhez.",
    img: "/tips/tip1.jpg",
    timeout: 10 // másodperc
},

];



// Staff Settings
const showStaffTeam = true
const showTipList = true


// orange
// red
// blue
// green
// pink
// purple
const theme = "orange"

// ==== WINTER UPDATE !! ==== \\
const enableWinterUpdate = false
// ==== WINTER UPDATE !! ==== \\


// Text settings
const name = "<strong>FIVEM</strong>LAND"
const underName = "ROLE<b>PLAY</b>"
const desc = "FiveM szerepjáték szerver";


// Social media
const discord = "https://discord.gg/uCt54UV3Sh"  // If = "" then icon will not show up on screen
const instagram = ""	// https://example.com
const youtube = "" 		// https://example.com
const twitter = "" 		// https://example.com
const tiktok = ""  		// https://example.com
const facebook = ""		// https://example.com
const twitch = "" 		// https://example.com
const github = "" 		// https://example.com


// Video Settings
const videoBlur = 0
var videoOpacity = 0.3


// Example link: https://www.youtube.com/watch?v=abcdefgh
const youtubeVideo = ""
const showYoutubeVideo = false

// Local Video
const enableLocalVideo = false

// Local audio
const localAudio = false



// HELP //

//-- YOUTBE
//-- LOCAL AUDIO
// if localAudio is true, then loading will load "audio.mp3" file and play it except youtube audio.
// if localAudio is false, then loading will load youtube audio.

//-- LOCAL VIDEO
// if enableLocalVideo is true, then loading will load "video.webm" file and play it except youtube video.
// If localVideo is enabled, showYoutubeVideo is automatically disabled.

// You can only import a video from either YouTube or local. Local video taking priority.
