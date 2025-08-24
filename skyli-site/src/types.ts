// src/types.ts

/** Navigation link used by Navbar */
export interface NavLink {
  label: string;
  path: string;
}

/** A music item that links out to Spotify */
export interface Song {
  id: string;
  title: string;
  imgSource: string;
  spotifyUrl: string;
}

/** A video item to render in VideoBox */
export interface Video {
  id: string;
  title: string;
  videoId: string; // can be raw ID or full URL
}

/** Extracts a YouTube ID from either a raw ID or a full URL */
export function toYouTubeId(input: string): string {
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (url.hostname.includes("youtube.com")) {
      return url.searchParams.get("v") || input;
    }
    if (url.hostname === "youtu.be") {
      return url.pathname.replace("/", "") || input;
    }
  } catch {
    return input;
  }
  return input;
}
