
export default function StatCard({
  title, value, subtitle, icon: Icon, tone
}) {
  return (
    <article className={`stat-card ${tone}`}>
      <div className="stat-icon">
        <Icon size={23} />
      </div>
      <div className="stat-content">
        <p>{title}</p>
        <h2>{value}</h2>
        <span>{subtitle}</span>
      </div>
    </article>
  );
}
