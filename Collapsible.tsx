import type { ReactNode } from 'react';

interface CollapsibleProps {
  label: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function Collapsible({ label, children, defaultOpen = false }: CollapsibleProps) {
  return (
    <details className="collapsible fade-in" open={defaultOpen}>
      <summary>{label}</summary>
      <div className="collapsible-content">{children}</div>
    </details>
  );
}
