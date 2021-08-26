export function Repositoryitem(props){
    return(
    <li>
        <strong>{props.repoItem?.name ?? 'Nada'}</strong>
        <p>{props.repoItem?.description ?? 'Nada'}</p>
        <a href="#">Acessar repositorio</a>
    </li>
    )
}