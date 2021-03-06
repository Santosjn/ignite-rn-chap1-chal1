import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task`
    const task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    } as Task;

    setTasks((oldState) => [...oldState, task]);
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const taskFound = tasks.find((task) => task.id === id);

    if (taskFound) {
      taskFound.done = !taskFound.done;
      const tasksCopy = tasks.slice();

      const index = tasks.findIndex((task) => task.id === id);
      tasksCopy[index] = taskFound;
      setTasks(tasksCopy);
    }
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    setTasks((oldState) => {
      return oldState.filter((task) => task.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
