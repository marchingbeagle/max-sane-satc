package maxsane.maxsanewebsite.controller;

import jakarta.transaction.Transactional;
import maxsane.maxsanewebsite.model.product.Product;
import maxsane.maxsanewebsite.model.product.ProductRepository;
import maxsane.maxsanewebsite.model.product.RequestProductDTO;
import maxsane.maxsanewebsite.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private ProductService productService;

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

    @PutMapping()
    @Transactional
    public ResponseEntity updateProduct(@RequestBody @Validated RequestProductDTO data){
        return productService.updateProduct(data);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteProduct(@PathVariable UUID id){
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
