export function Repositoryitem(props){
    return(
    <li>
        <strong>{props.reposito?.name ?? 'Nada'}</strong>
        <p>{props.reposito?.description ?? 'Nada'}</p>
        <a href="#">Acessar repositorio</a>
    </li>
    )
}