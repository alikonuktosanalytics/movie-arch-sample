import type { EpisodeRef } from '../../type';
import { NONE_LABELS } from './const';
import type { NavigatorDirection } from './type';

/** "S01E03 · ...And the Bag's in the River" or a friendly end-of-list text. */
export const getNavigatorText = (direction: NavigatorDirection, episode: EpisodeRef | null): string =>
  episode ? `${episode.code} · ${episode.title}` : NONE_LABELS[direction];
