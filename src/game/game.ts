import {
  type AudioState,
  type InputState,
  type RenderState,
} from "atari-monk-atom-engine";
import type { GameState } from "./game-type";
import { updateGameInternal } from "./update-game";
import { createGameInternal } from "./create-game";
import { renderGameInternal } from "./render-game";

export function createGame(
  renderer: RenderState,
  input: InputState,
  audio: AudioState,
): GameState {
  return createGameInternal(renderer, input, audio);
}

export function updateGame(state: GameState, dt: number) {
  updateGameInternal(state, dt);
}

export function renderGame(state: GameState, alpha: number) {
  renderGameInternal(state, alpha);
}
