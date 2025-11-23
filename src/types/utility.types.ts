import type { IBase, ITrack, TID } from "./music.types";
import type { IPlaylist } from "./playlist.types";

function updateTrack(
  trackId: TID,
  data: Partial<Omit<ITrack, keyof IBase>>
): void {
  console.log("Updating track: ", trackId, data);
}

interface IUser {
  name?: string;
  age?: number;
  city?: string;
}

export type TUserProfile = Required<IUser>;
export type TMainUserProfile = Pick<TUserProfile, "name" | "age">;

type TUserDictionary = Record<string, string>;

export const userDict: TUserDictionary = {
  man: "Мужчина",
};

type LockPlaylist = Readonly<IPlaylist>;

type updateTrackResponse = ReturnType<typeof updateTrack>;
type TUpdateParams = Parameters<typeof updateTrack>;
