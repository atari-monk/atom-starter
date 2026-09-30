import type { GameState } from "./game-type";
import { updateRect } from "./rect";

export function updateGameInternal(state: GameState, dt: number) {
  updateRect(state.rect, dt);
}
