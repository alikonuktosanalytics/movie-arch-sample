export type IconName =
  | 'film'
  | 'tv'
  | 'users'
  | 'building'
  | 'bookmark'
  | 'search'
  | 'alert'
  | 'compass'
  | 'inbox'
  | 'arrowLeft'
  | 'arrowRight'
  | 'check'
  | 'plus'
  | 'star'
  | 'trash';

export type IconShape =
  | { type: 'path'; d: string }
  | { type: 'circle'; cx: number; cy: number; r: number }
  | { type: 'rect'; x: number; y: number; width: number; height: number; rx: number };

export interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}
