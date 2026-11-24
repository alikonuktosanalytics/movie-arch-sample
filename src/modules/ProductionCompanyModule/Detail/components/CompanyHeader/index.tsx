import { Avatar } from '@/components/designSystem/Artwork';
import { Badge } from '@/components/designSystem/Badge';
import { LOGO_SIZE, USER_CREATED_BADGE } from './const';
import { buildCompanyFacts } from './helpers';
import { styles } from './style';
import type { CompanyHeaderProps } from './type';

export const CompanyHeader = ({ company, stats }: CompanyHeaderProps) => (
  <section style={styles.container}>
    <Avatar name={company.name} imageUrl={company.logoUrl} size={LOGO_SIZE} shape="rounded" fit="contain" />
    <div style={styles.content}>
      <div style={styles.titleRow}>
        <h1 style={styles.name}>{company.name}</h1>
        {company.isUserCreated && <Badge label={USER_CREATED_BADGE} tone="primary" />}
      </div>
      <p style={styles.description}>{company.description}</p>
      <div style={styles.facts}>
        {buildCompanyFacts(company, stats).map((fact) => (
          <div key={fact.label} style={styles.fact}>
            <span style={styles.factLabel}>{fact.label}</span>
            <span style={styles.factValue}>{fact.value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
