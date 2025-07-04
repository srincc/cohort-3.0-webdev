import "./App.css";
import { RecoilRoot,useRecoilValue, useRecoilStateLoadable } from "recoil";
import { todosAtomFamily } from "./atoms";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback = "loading..">
        <Todo id={1} />
        <Todo id={2} />
      </Suspense>
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  // todo = {
    //   contents,
    //   state
    // }
    
  // const todo = useRecoilValue(todosAtomFamily(id));


  if (todo.state === "loading") {
    return <div>loading...</div>;
  } else {
    return (
      <>
        {todo.contents.title}
        <br />
        {todo.contents.completed}
        <br />
        {todo.contents.userId}
        <br />
      </>
    );
  }
}

export default App;
