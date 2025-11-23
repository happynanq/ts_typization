import type { ITrack } from "./music.types";

const recentlyPlayed: ITrack[] = [];

const topTracks: ReadonlyArray<ITrack[]> = []; // Массив ридонли

type TAudioVisualizerBar = [frequency: number, height: number];

const bars: TAudioVisualizerBar[] = [
  [60, 0.8],
  [120, 0.6],
  [180, 0.9],
  [60, 0.8],
];

type TTImeFormat = [minute: number, seconds: number];
