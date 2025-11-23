export type TID = string;
export type TImageUrl = string;

export type TStatus = "idle" | "loading" | "succeeded" | "failed";

type TBase = {
  id: TID;
  createdAt: string;
  updatedAt: string;
};
export type TArtist = {
  name: string;
  image: TImageUrl;
  isVerified: boolean;
} & TBase;

export interface IBase {
  id: TID;
  name: string;
  createdAd: string;
  updatedAt: string;
  image: TImageUrl;
  isVerified: boolean;
}

export interface IArtist extends IBase {
  name: string;
  image: TImageUrl;
  isVerified: boolean;
}

export interface ITrack extends IBase {
  artist: IArtist;
  title: string;
  duration: number;
  isPublish: boolean;
  audioUrl: string;
}
