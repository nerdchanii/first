import { Circle } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import todoService from "../../../services/todo.service";
import todosState from "../../../store/todosState";
import TodoListPresenter from "../UI/presenter/TodoListPresenter";

type Props = {};

const TodoListContainer = (props: Props) => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await todoService.getTodos();
      if (response.result) setTodos(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <LinearProgress />;

  return <TodoListPresenter todos={todos} />;
};

export default TodoListContainer;
