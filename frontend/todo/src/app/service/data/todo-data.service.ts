import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retriveAllTodo(name){

    return this.http.get<Todo[]>(`http://localhost:8080/user/${name}/todos`)
    //console.log("execute")

  }

  deleteTodo(name,id){
    return this.http.delete(`http://localhost:8080/user/${name}/todos/${id}`)
  }

  retriveTodo(name,id){

    return this.http.get<Todo>(`${API_URL}/user/${name}/todos/${id}`)
    //console.log("execute")

  }


  updateTodo(name,id,todo){

    return this.http.put(`${API_URL}/user/${name}/todos/${id}`,todo)
    //console.log("execute")

  }
  creatTodo(name,todo){
    return this.http.post(`${API_URL}/user/${name}/todos`,todo)
    //console.log("execute")

  }

}
