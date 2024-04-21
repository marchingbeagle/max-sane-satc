package maxsane.maxsanewebsite.repository;

import maxsane.maxsanewebsite.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, String> {

}
