import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import TodoListItem from "../components/TodoListItem";
import NewTodoForm from "../components/NewTodoForm";
import { auth } from "../firebase"
import "./styles.css"
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [user, setuser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, async (currentuser) => {
      setuser(currentuser.email)
      try {
        const q = query(collection(db, currentuser.email));
        onSnapshot(q, (querySnapshot) => {
          let list = [];
          querySnapshot.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          });
          setTodos(list);
        });
      } catch (error) {
        console.log(error);
      }

    });

  }, []);


  const onComplete = async (todo) => {
    console.log(todo);
    await updateDoc(doc(db, user, todo.id), { completed: !todo.completed });
  };
  const onDelete = async (id) => {
    await deleteDoc(doc(db, user, id));
  };

  if (!todos) return <h2>Loading</h2>

  return (
    <>
      <Navbar email={user} />
      <NewTodoForm email={user} todos={todos} />
      <div className="list_wrapper">

        {todos.length ?
          <div>
            {todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onComplete={onComplete}
                onDelete={onDelete}
              />
            )
            )}
          </div>
          : <div className="no_todos" >
            No Todos yet
          </div>}



      </div>
    </>
  );
};

export default Home;
