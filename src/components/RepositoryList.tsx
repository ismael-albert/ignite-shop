import { useState, useEffect } from "react";
import { Repositoryitem } from "./RepositoryItem";
import "../styles/repositories.scss";

//https://api.github.com/users/ismael-albert/repos
interface Repository {
  name: string;
  description: string;
  html_url: string;
}
export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ismael-albert/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <Repositoryitem key={repository.name} repositoryyy={repository} />
          );
        })}
      </ul>
    </section>
  );
}
