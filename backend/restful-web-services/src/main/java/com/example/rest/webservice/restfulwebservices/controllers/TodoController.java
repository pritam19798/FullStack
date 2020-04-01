package com.example.rest.webservice.restfulwebservices.controllers;

import java.net.URI;
import java.util.List;

import com.example.rest.webservice.restfulwebservices.entity.Todo;
import com.example.rest.webservice.restfulwebservices.entity.TodoHardCodedService;
import com.example.rest.webservice.restfulwebservices.repsitory.TodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class TodoController{

    @Autowired
    private TodoHardCodedService todoService;
    
    @Autowired
    private TodoRepository todoRepository;
    

    @GetMapping("/user/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){

        //return todoService.findAll();
    	return todoRepository.findByusername(username);

    }


    @GetMapping("/user/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username,@PathVariable long id){

        //return todoService.findById(id);
    	return todoRepository.findById(id).get();

    }

    @DeleteMapping("/user/{name}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String name,@PathVariable long id){

        //Todo todo=todoService.deleteById(id);
    	todoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
        //return ResponseEntity.notFound().build();

    }

    @PutMapping("/user/{name}/todos/{id}")
    public ResponseEntity<Todo> putTodo(@PathVariable String name,@PathVariable long id,@RequestBody Todo todo){

//        Todo updatedTodo=todoService.save(todo);
    	Todo updatedTodo=todoRepository.save(todo);
        return new ResponseEntity<Todo>(updatedTodo,HttpStatus.OK);

    }

    @PostMapping("/user/{name}/todos")
    public ResponseEntity<Void> saveTodo(@PathVariable String name,@RequestBody Todo todo){
    	
    	todo.setUsername(name);
//        Todo createdTodo=todoService.save(todo);
    	Todo createdTodo=todoRepository.save(todo);
        URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return  ResponseEntity.created(uri).build();

    }


}