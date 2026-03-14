import type { RiskLevel } from '../types/domain';

interface StatusBadgeProps {
  level: RiskLevel;
}

const labels: Record<RiskLevel, string> = {
  safe: 'Safe',
  adjust: 'Adjust Dosage',
  toxic: 'Toxic / Ineffective',
  unknown: 'Unknown',
};

export function StatusBadge({ level }: StatusBadgeProps) {
  return <span className={`status-badge status-${level}`}>{labels[level]}</span>;
}
