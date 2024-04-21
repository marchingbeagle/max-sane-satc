package maxsane.maxsanewebsite.model.product;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Table(name="product")
@Entity(name="product")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String product_name;
    private String image;
    private String category;

    public Product(RequestProductDTO requestProductDTO){
        this.product_name = requestProductDTO.product_name();
        this.category = requestProductDTO.category();
        this.image = requestProductDTO.image();
    }
}
