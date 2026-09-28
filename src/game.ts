import {
  clear,
  type AudioState,
  type InputState,
  type RenderState,
} from "atari-monk-atom-engine";
import {
  createRect,
  renderRect,
  updateRect,
  type RectState,
} from "./shared/rect";

export type GameState = {
  renderer: RenderState;
  input: InputState;
  audio: AudioState;
  rect: RectState;
};

export function createGame(
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

export function updateGame(state: GameState, dt: number) {
  updateRect(state.rect, dt);
}

export function renderGame(state: GameState, _alpha: number) {
  const ctx = state.renderer.ctx;

  clear(state.renderer);

  renderRect(state.rect, ctx);
}
