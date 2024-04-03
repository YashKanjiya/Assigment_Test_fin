package com.example.closebacked.Controller;



import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessagesController {

	@GetMapping("/messages")
	public ResponseEntity<List<String>> message(){
		return ResponseEntity.ok(Arrays.asList("first","second"));
	}
}
