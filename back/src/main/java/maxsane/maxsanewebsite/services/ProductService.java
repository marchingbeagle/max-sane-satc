package maxsane.maxsanewebsite.services;

import jakarta.persistence.EntityNotFoundException;
import maxsane.maxsanewebsite.model.product.Product;
import maxsane.maxsanewebsite.model.product.ProductRepository;
import maxsane.maxsanewebsite.model.product.RequestProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public ResponseEntity updateProduct(RequestProductDTO data) {
        Optional<Product> optionalProduct = repository.findById(data.id());
        if(optionalProduct.isPresent()){
            Product product = optionalProduct.get();
            product.setProduct_name(data.product_name());
            product.setCategory(data.category());
            product.setImage(data.image());
            return ResponseEntity.ok(product);
        }

        return ResponseEntity.ok("Product not founded");
    }
}
