export default function Card({ title, description }: { title: string; description: string }) {
    return (
      <div className="">
        <h2 className="label-primary">{title}</h2>
        <p className="label-secondary">{description}</p>
      </div>
    );
  }
  