import type {
  RenderState,
  InputState,
  AudioState,
} from "atari-monk-atom-engine";
import type { GameState } from "./game-type";
import { createRect } from "./rect";

export function createGameInternal(
  renderer: RenderState,
  input: InputState,
  audio: AudioState,
): GameState {
  return {
    renderer,
    input,
    audio,
    rect: createRect(960 - 50, 540 - 50, 100, 100),
  };
}
