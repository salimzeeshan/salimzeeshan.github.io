interface SectionHeaderProps {
  kicker: string;
  title: string;
  body?: string;
}

export function SectionHeader({ kicker, title, body }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {body ? <p className="section-copy mt-4">{body}</p> : null}
    </div>
  );
}
