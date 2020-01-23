import styleStr from "./style";

enum speed {
  normal = 50,
  fast = 10,
  slow = 100
}

interface events {
  ["#play"]: "play";
  ["#pause"]: "pause";
  ["#slow"]: "slow";
  ["#normal"]: "normal";
  ["#fast"]: "fast";
}

type event = "play" | "pause" | "slow" | "normal" | "fast";

const player = {
  id: 0,
  counter: 1,
  textContent: "",
  isPlaying: false,
  speed: 50,
  buttons: {
    btnPlay: document.querySelector("#play")!,
    btnPause: document.querySelector("#pause")!,
    btnSlow: document.querySelector("#slow")!,
    btnNormal: document.querySelector("#normal")!,
    btnFast: document.querySelector("#fast")!
  },
  events: {
    "#play": "play",
    "#pause": "pause",
    "#slow": "slow",
    "#normal": "normal",
    "#fast": "fast"
  },
  bindEvents: () => {
    Object.keys(player.events as events).forEach((selector: keyof events) => {
      const event = player.events[selector] as event;
      document.querySelector(selector)!.addEventListener("click", () => {
        player[event]();
      });
    });
  },
  ui: {
    textContainer: document.querySelector("#text-content")!,
    cssContainer: document.querySelector("#css-content")!
  },
  play: () => {
    if (player.isPlaying) {
      player.pause();
    }
    player.isPlaying = true;
    player.id = setInterval(() => {
      if (player.counter < styleStr.length) {
        const char = styleStr[player.counter];
        player.textContent +=
          char === "\n" ? "<br>" : char === " " ? "&nbsp;" : char;

        player.ui.textContainer.innerHTML = player.textContent;
        player.ui.textContainer.scrollTop =
          player.ui.textContainer.scrollHeight;

        player.ui.cssContainer.textContent = styleStr.substring(
          0,
          player.counter
        );

        player.counter++;
      } else {
        player.pause();
      }
    }, player.speed);
  },
  pause: () => {
    player.isPlaying = false;
    clearInterval(player.id);
  },
  slow: () => {
    player.speed = speed.slow;
    player.play();
  },
  normal: () => {
    player.speed = speed.normal;
    player.play();
  },
  fast: () => {
    player.speed = speed.fast;
    player.play();
  },
  init: () => {
    player.bindEvents();
    player.play();
  }
};

export default player;
