export default function ProjectCard({ title }) {
  return (
    <div className="card border p-6 rounded-xl transition hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  )
}