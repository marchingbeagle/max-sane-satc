package maxsane.maxsanewebsite.controller;


import maxsane.maxsanewebsite.model.log.LogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/logs")
public class LogController {

    @Autowired
    private LogRepository repository;

    @GetMapping()
    public ResponseEntity getAllLogs(){
        var alllogs = repository.findAll();
        return ResponseEntity.ok(alllogs);
    }
}
