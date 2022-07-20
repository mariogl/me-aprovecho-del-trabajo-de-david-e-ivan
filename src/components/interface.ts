export interface IComponent {
  element: HTMLElement;

  render?: () => void;
}
export interface FilmData {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
}
