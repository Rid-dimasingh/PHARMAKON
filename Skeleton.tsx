interface SkeletonProps {
  lines?: number;
}

export function Skeleton({ lines = 3 }: SkeletonProps) {
  return (
    <div className="skeleton-wrapper" aria-hidden="true">
      {Array.from({ length: lines }).map((_, index) => (
        <div className="skeleton-line" key={index} />
      ))}
    </div>
  );
}
