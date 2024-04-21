package maxsane.maxsanewebsite.controller;

import maxsane.maxsanewebsite.model.product.Product;
import maxsane.maxsanewebsite.model.product.ProductRepository;
import maxsane.maxsanewebsite.model.product.RequestProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @GetMapping()
    public ResponseEntity getAllProducts(){
        var allProduct = repository.findAll();
        return ResponseEntity.ok(allProduct);
    }

    @PostMapping()
    public ResponseEntity registerProduct(@RequestBody @Validated RequestProductDTO data){
        Product newProduct = new Product(data);
        repository.save(newProduct);
        return ResponseEntity.ok().build();
    }
}
