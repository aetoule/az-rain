function Home( {history} ) {
    return (
        <div>
            <h1> Home</h1>
            <button onClick={history.goBack}>Go Back!</button>
        </div>
    )
}

function About () {
    return (
        <div>
            <h1>About></h1>
        </div>
    )
}


