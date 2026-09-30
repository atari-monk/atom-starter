import "./style.css";
import {
  createAudioState,
  createInputState,
  createLoop,
  createRenderState,
  loadAudio,
  playMusicAfterGesture,
  startLoop,
} from "atari-monk-atom-engine";
import { createGame, updateGame, renderGame } from "./game/game";

const renderer = createRenderState("canvas");
const input = createInputState();

const audio = createAudioState();

(async () => {
  await loadAudio(audio, "bg", "./sounds/bg.mp3");
})();

const game = createGame(renderer, input, audio);

const overlay = document.getElementById("start-overlay");
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

overlay?.addEventListener("click", async () => {
  overlay.style.display = "none";
  canvas.style.display = "block";

  await playMusicAfterGesture(audio, "bg", 0.5);
});

const loop = createLoop(
  (dt) => updateGame(game, dt),
  (alpha) => renderGame(game, alpha),
);

startLoop(loop);
