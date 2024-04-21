package maxsane.maxsanewebsite.model;

import jakarta.persistence.*;
import lombok.*;

@Table(name="product")
@Entity(name="product")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "idProduct")
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private String idProduct;
    private String Product;
    private String Imagem;
    private String Category;
}
