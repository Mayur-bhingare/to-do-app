import Header from "./components/Header";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <main className="container-fluid">
        <section className="row">
          <section className="col-6 m-auto mt-5">
            <Header />
            <InputBox />
            <TodoList />
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
