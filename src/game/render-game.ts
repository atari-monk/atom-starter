import { clear } from "atari-monk-atom-engine";
import type { GameState } from "./game-type";
import { renderRect } from "./rect";

export function renderGameInternal(state: GameState, _alpha: number) {
  const ctx = state.renderer.ctx;
  clear(state.renderer);
  renderRect(state.rect, ctx);
}
