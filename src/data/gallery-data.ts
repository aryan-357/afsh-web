export interface Photo {
  src: string;
  width: number;
  height: number;
  title: string;
  date: string;
  album: string;
}

export const galleryData: Photo[] = [
  {
    src: "https://via.placeholder.com/800x600",
    width: 800,
    height: 600,
    title: "Placeholder Image",
    date: "2023-01-01",
    album: "General"
  }
];
