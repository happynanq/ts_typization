import type { ITrack } from "./music.types";

type ExtractArrayType<T> = T extends (infer U)[] ? U : never;

type TrackType = ExtractArrayType<ITrack[]>;

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type TrackGetters = Getters<ITrack>;
