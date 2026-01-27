export interface Photo {
  src: string;
  width: number;
  height: number;
  title: string;
  date: string; // YYYY-MM-DD
  album: string;
}

export const galleryData: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1542332205-4da5d5c1920e?q=80&w=2000&auto=format&fit=crop",
    width: 2000,
    height: 1333,
    title: "School Sports Day",
    date: "2023-11-15",
    album: "Sports Events"
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
    width: 2000,
    height: 1333,
    title: "Classroom Learning",
    date: "2023-10-20",
    album: "Academics"
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop",
    width: 2000,
    height: 1333,
    title: "Graduation Ceremony",
    date: "2023-05-15",
    album: "Events"
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop",
    width: 2000,
    height: 1333,
    title: "Library Time",
    date: "2023-09-05",
    album: "Facilities"
  }
];
