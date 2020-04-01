package com.example.rest.webservice.restfulwebservices.repsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.example.rest.webservice.restfulwebservices.entity.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{

	List<Todo> findByusername(String username);
	
}

//insert into todo(id,username,description,target_date,is_done)
//values(100009,'Pritam','aaaa',sysdate(),false);
