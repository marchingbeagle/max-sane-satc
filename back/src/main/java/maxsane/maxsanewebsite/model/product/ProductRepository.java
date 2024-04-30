package maxsane.maxsanewebsite.model.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {

}
