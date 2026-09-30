import type {
  RenderState,
  InputState,
  AudioState,
} from "atari-monk-atom-engine";
import type { RectState } from "./rect";

export type GameState = {
  renderer: RenderState;
  input: InputState;
  audio: AudioState;
  rect: RectState;
};
