function Welcome(props) {
  return <h1>Halo, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Fahmi" />;
root.render(element);
