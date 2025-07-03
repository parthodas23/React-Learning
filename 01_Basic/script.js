const h1 = React.createElement("h1", null, "Hello From React");
const parent = document.querySelector(".root");
const root = ReactDOM.createRoot(parent);
root.render(h1);
