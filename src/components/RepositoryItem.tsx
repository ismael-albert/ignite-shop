interface RepositoryitemProps {
  repositoryyy: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function Repositoryitem(props: RepositoryitemProps) {
  return (
    <li>
      <strong>{props.repositoryyy.name}</strong>
      <p>{props.repositoryyy.description}</p>
      <a href={props.repositoryyy.html_url}>Acessar repositorio</a>
    </li>
  );
}
