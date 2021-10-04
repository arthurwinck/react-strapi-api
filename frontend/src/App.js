import './App.css';
import useFetch from './hooks/useFetch';



const App = () => {
    const [result, loading] = useFetch('http://localhost:1337/usuario-plataformas')

    console.log(result,loading)

    if (loading) {
        return <p>loading...</p>
    }

    if (!loading && result) {

    return (
        <div className="App">
            {result.map(user => (
                <div id={user.id}>
                    <h1>{user.nome}</h1>
                    <p>{user.email}</p>
                </div>
            )
            )}
        </div>
    )

    }

    return <h1>carregando?</h1>
}

export default App;
