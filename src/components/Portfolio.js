import { useEffect, useState } from 'react';

export const PortfolioComponent = () => {
    function loadRepositories(){
        fetch('https://api.github.com/users/jonwestman/repos')
        .then((response) => response.json())
        .then((data) => {
        setRepositories([...repos, data]);
        });
    }

    const [repos, setRepositories] = useState([]);
    useEffect(() => {loadRepositories();
    }, []); //dependency array which prevents method from autoloading api


    if(repos.length === 0){
        return <p>Loading...</p>
    }

    return (
        <div className='px-2 py-2' id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {repos[0].map((repo) => {
                    return <li key={repo.id}>{repo.name} - {repo.description}</li>
                })}
            </ul>
        </div>
    );

}
