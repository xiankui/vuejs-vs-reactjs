import React from "react";
import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
};

export const TodoItem = ({ todo, onToggle }: Props) => (
  <li className="flex justify-between items-center p-2 border-b">
    <span
      onClick={() => onToggle(todo.id)}
      className={
        todo.completed
          ? "line-through text-gray-400 cursor-pointer w-full"
          : "cursor-pointer w-full"
      }
    >
      {todo.text}
    </span>
  </li>
);
