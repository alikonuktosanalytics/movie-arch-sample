import { styles } from './style';
import type { PageHeaderProps } from './type';

export type { PageHeaderProps } from './type';

export const PageHeader = ({ title, subtitle, top, actions }: PageHeaderProps) => (
  <div style={styles.container}>
    {top}
    <div style={styles.row}>
      <div style={styles.titles}>
        <h1 style={styles.title}>{title}</h1>
        {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
      </div>
      {actions}
    </div>
  </div>
);
