import type { ITrack } from "./music.types";

const audioElement = document.getElementById(
  "audio"
) as HTMLAudioElement | null;

const progressBar = document.querySelector(
  ".progress"
) as HTMLDivElement | null;

interface ISpotifyResponse {
  track: ITrack[];
}

export async function fetchTrack(): Promise<ITrack[]> {
  const response = await fetch("/api/track");
  const data = (await response.json()) as ISpotifyResponse;
  return data.track;
}
