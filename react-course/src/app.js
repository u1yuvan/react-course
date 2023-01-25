import './app.css' 

function App() {
    let msg = 'awesome'
    return (<div>
        <h1 className="header">This is my header</h1>
        <p className="paragraph">This is my first {msg} Component</p>
    </div>);
}

export default App;