package maxsane.maxsanewebsite.controller;

import maxsane.maxsanewebsite.model.order.Order;
import maxsane.maxsanewebsite.model.order.OrderRepository;
import maxsane.maxsanewebsite.model.order.RequestOrderDTO;
import maxsane.maxsanewebsite.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private OrderService orderService;

    @GetMapping()
    public ResponseEntity getAllOrders(){
        var allOrders = repository.findAll();
        return ResponseEntity.ok(allOrders);
    }

    @GetMapping("{uuid}")
    public ResponseEntity getOrderById(@PathVariable @Validated UUID uuid){
        var order = repository.findById(uuid);
        return ResponseEntity.ok(order.get());
    }

    @PostMapping()
    public ResponseEntity registerOrder(@RequestBody @Validated RequestOrderDTO data){
        Order newOrder = new Order(data);
        repository.save(newOrder);
        return ResponseEntity.ok().build();
    }

}
