package maxsane.maxsanewebsite.controller;

import maxsane.maxsanewebsite.model.user.RequestUserDTO;
import maxsane.maxsanewebsite.model.user.User;
import maxsane.maxsanewebsite.model.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping()
    public ResponseEntity getAllUsers(){
        var allUsers = repository.findAll();
        return ResponseEntity.ok(allUsers);
    }

    @PostMapping()
    public ResponseEntity registerUser(@RequestBody @Validated RequestUserDTO data){
        User newUser = new User(data);
        repository.save(newUser);
        return ResponseEntity.ok().build();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable UUID id){
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
