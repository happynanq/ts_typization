import type { IBase, ITrack, TID, TImageUrl } from "./music.types";

export interface IPlaylist extends IBase {
  name: string;
  description?: string;
  tracks: ITrack[];
  coverImage: TImageUrl;
  owner: {
    id: TID;
    displayName: string;
    isPremium: boolean;
  };
  isPublic: boolean;
  followers: number;
}
