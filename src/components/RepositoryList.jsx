import { Repositoryitem } from "./RepositoryItem";

const repoItem = {
    name: 'unformmmm',
    description: 'Uma descrição',
    link: 'https://github.com/ismael-albert'
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
              <Repositoryitem repoItem={repoItem}/>      
            </ul>
        </section>
    )
}