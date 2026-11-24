import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SEPARATOR } from './const';
import { styles } from './style';
import type { SeriesBreadcrumbProps } from './type';

/** Shared by SeriesList, SeasonsList and EpisodeDetail → lives in SeriesModule/components. */
export const SeriesBreadcrumb = ({ items }: SeriesBreadcrumbProps) => (
  <nav aria-label="Breadcrumb">
    <ol style={styles.list}>
      {items.map((item, index) => (
        <Fragment key={`${item.label}-${index}`}>
          {index > 0 && (
            <li aria-hidden style={styles.separator}>
              {SEPARATOR}
            </li>
          )}
          <li>
            {item.to ? (
              <Link to={item.to} className="tappable" style={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" style={styles.current}>
                {item.label}
              </span>
            )}
          </li>
        </Fragment>
      ))}
    </ol>
  </nav>
);
