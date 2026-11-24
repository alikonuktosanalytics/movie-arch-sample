import { CompanyCard } from '@/components/designSystem/Cards';
import { SECTION_TITLE, VIEW_COMPANY_LABEL } from './const';
import { buildProductionFacts } from './helpers';
import { styles } from './style';
import type { ProductionInfoProps } from './type';

export const ProductionInfo = ({ movie, company, onSelectCompany }: ProductionInfoProps) => (
  <section style={styles.container}>
    <h2 style={styles.title}>{SECTION_TITLE}</h2>
    <dl style={styles.facts}>
      {buildProductionFacts(movie, company).map((fact) => (
        <div key={fact.label} style={{ display: 'contents' }}>
          <dt style={styles.factLabel}>{fact.label}</dt>
          <dd style={styles.factValue}>{fact.value}</dd>
        </div>
      ))}
    </dl>
    {company && (
      <CompanyCard
        name={company.name}
        logoUrl={company.logoUrl}
        subtitle={company.headquarters}
        badge={VIEW_COMPANY_LABEL}
        onPress={() => onSelectCompany(company.id)}
      />
    )}
  </section>
);
