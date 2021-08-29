export function Repositoryitem(props) {
    return (
        <li>
            <strong>{props.repositoryyy.name}</strong>
            <p>{props.repositoryyy.description}</p>
            <a href={props.repositoryyy.html_url}>Acessar repositorio</a>
        </li>
    );
}
