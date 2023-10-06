import LoginForm from "./ui/LoginForm";

function App() {
  return <LoginForm onSubmit={(values) => console.log(values)} />;
}

export default App;
