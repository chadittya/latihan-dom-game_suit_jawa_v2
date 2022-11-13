// membuat fungsi generate pilihan AI
function aiGenerate() {
  const ai = Math.random();
  if (ai < 0.34) return "thumb";
  if (ai >= 0.34 && ai < 0.67) return "point";
  return "pinky";
}

// membuat fungsi rules suit jawa
function rulesSuit(ai, player) {
  if (player == ai) return "SERI!";
  if (player == "thumb") return ai == "point" ? "MENANG!" : "KALAH!";
  if (player == "point") return ai == "pinky" ? "MENANG!" : "KALAH!";
  if (player == "pinky") return ai == "thumb" ? "MENANG!" : "KALAH!";
}

// // event game
// const pGajah = document.querySelector(".thumb");
// const pOrang = document.querySelector(".point");
// const pSemut = document.querySelector(".pinky");

// pGajah.addEventListener("click", function () {
//   const getAiS = aiGenerate(); //mengambil value atau pilihan ai
//   const getPlayerS = pGajah.className; //mengambil pilihan player dari classnya
//   const gameResult = rulesSuit(getAiS, getPlayerS);
//   //   cek log
//   //   console.log("ai = " + getAiS);
//   //   console.log("player = " + getPlayerS);
//   //   console.log("result = " + gameResult);
//   // ganti gambar ai
//   const aiImg = document.querySelector(".img-ai");
//   aiImg.setAttribute(
//     "src",
//     "https://ik.imagekit.io/chadittya/game-suit-v2/png-" + getAiS + ".png"
//   );
//   const txtResult = document.querySelector(".info");
//   txtResult.innerHTML = gameResult;
//   //   console.log(txtResult);
//   //   ini test code soloku ganti gambar
//   //   if (getAiS == "gajah")
//   //     return (
//   //       aiImg.setAttribute(
//   //         "src",
//   //         "https://ik.imagekit.io/chadittya/game-suit-v2/png-thumb.png"
//   //       ),
//   //       (txtResult.innerHTML = gameResult)
//   //     );
//   //   if (getAiS == "orang")
//   //     return (
//   //       aiImg.setAttribute(
//   //         "src",
//   //         "https://ik.imagekit.io/chadittya/game-suit-v2/png-point.png"
//   //       ),
//   //       (txtResult.innerHTML = gameResult)
//   //     );
//   //   if (getAiS == "semut")
//   //     return (
//   //       aiImg.setAttribute(
//   //         "src",
//   //         "https://ik.imagekit.io/chadittya/game-suit-v2/png-pinky.png"
//   //       ),
//   //       (txtResult.innerHTML = gameResult)
//   //     );
//   // end of code solo untuk ganti gambar
// });

// pOrang.addEventListener("click", function () {
//   const getAiS = aiGenerate(); //mengambil value atau pilihan ai
//   const getPlayerS = pOrang.className; //mengambil pilihan player dari classnya
//   const gameResult = rulesSuit(getAiS, getPlayerS);
//   //   cek log
//   //   console.log("ai = " + getAiS);
//   //   console.log("player = " + getPlayerS);
//   //   console.log("result = " + gameResult);
//   // ganti gambar ai
//   const aiImg = document.querySelector(".img-ai");
//   aiImg.setAttribute(
//     "src",
//     "https://ik.imagekit.io/chadittya/game-suit-v2/png-" + getAiS + ".png"
//   );
//   const txtResult = document.querySelector(".info");
//   txtResult.innerHTML = gameResult;
// });
// pSemut.addEventListener("click", function () {
//   const getAiS = aiGenerate(); //mengambil value atau pilihan ai
//   const getPlayerS = pSemut.className; //mengambil pilihan player dari classnya
//   const gameResult = rulesSuit(getAiS, getPlayerS);
//   //   cek log
//   //   console.log("ai = " + getAiS);
//   //   console.log("player = " + getPlayerS);
//   //   console.log("result = " + gameResult);
//   // ganti gambar ai
//   const aiImg = document.querySelector(".img-ai");
//   aiImg.setAttribute(
//     "src",
//     "https://ik.imagekit.io/chadittya/game-suit-v2/png-" + getAiS + ".png"
//   );
//   const txtResult = document.querySelector(".info");
//   txtResult.innerHTML = gameResult;
// });

// event game yang efektif solo harus tambah class name baru di html
// const getPlayerClick = document.getElementsByClassName("player");
// for (let i = 0; i < getPlayerClick.length; i++) {
//   getPlayerClick[i].addEventListener("click", function () {
//     const getAiItem = aiGenerate();
//     const getPlayerItem = getPlayerClick[i].classList[0];
//     const gameResult = rulesSuit(getAiItem, getPlayerItem);

//     // console.log("ai = " + getAiItem);
//     // console.log("player = " + getPlayerItem);
//     // console.log("result = " + gameResult);

//     const aiImg = document.querySelector(".img-ai");
//     aiImg.setAttribute(
//       "src",
//       "https://ik.imagekit.io/chadittya/game-suit-v2/png-" + getAiItem + ".png"
//     );
//     const txtResult = document.querySelector(".info");
//     txtResult.innerHTML = gameResult;
//   });
// }

// function ai img random animation
function putar() {
  const imgAi = document.querySelector(".img-ai");
  const gambar = ["thumb", "pinky", "point"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgAi.setAttribute(
      "src",
      "https://ik.imagekit.io/chadittya/game-suit-v2/png-" +
        gambar[i++] +
        ".png"
    );
    if (i == gambar.length) i = 0;
  }, 100);
}

// event game yang efektif dari WPU
const choises = document.querySelectorAll("li img");
const aiScore = document.querySelector(".ai");
const plScore = document.querySelector(".pl");
let plCounter = 0;
let aiCounter = 0;
choises.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const getAiItem = aiGenerate();
    const getPlayerItem = pil.className;
    const gameResult = rulesSuit(getAiItem, getPlayerItem);
    putar();
    setTimeout(function () {
      const aiImg = document.querySelector(".img-ai");
      aiImg.setAttribute(
        "src",
        "https://ik.imagekit.io/chadittya/game-suit-v2/png-" +
          getAiItem +
          ".png"
      );
      const txtResult = document.querySelector(".info");
      txtResult.innerHTML = gameResult;
      if (gameResult == "MENANG!") {
        plCounter++;
        plScore.innerHTML = plCounter;
      } else if (gameResult == "KALAH!") {
        aiCounter++;
        aiScore.innerHTML = aiCounter;
      }
    }, 1000);

    // console.log("ai = " + getAiItem);
    // console.log("player = " + getPlayerItem);
    // console.log("result = " + gameResult);
  });
});

//pr + score masing2 player menang berapa kali
