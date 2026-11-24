export interface MovieCardProps {
  title: string;
  posterUrl?: string;
  year: number;
  rating: number;
  genres?: string[];
  onPress?: () => void;
}

export interface SeriesCardProps {
  title: string;
  posterUrl?: string;
  years: string;
  rating: number;
  seasonsLabel: string;
  network?: string;
  onPress?: () => void;
}

export interface ActorCardProps {
  name: string;
  photoUrl?: string;
  subtitle?: string;
  onPress?: () => void;
}

export interface CompanyCardProps {
  name: string;
  logoUrl?: string;
  subtitle?: string;
  badge?: string;
  onPress?: () => void;
}
