package maxsane.maxsanewebsite.model.order;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.UUID;

@Table(name="pedido")
@Entity(name="pedido")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private UUID product_id;
    private Integer quantidade;
    private Date data;
    private UUID user_id;

    public Order(RequestOrderDTO requestOrderDTO){
        this.product_id = requestOrderDTO.product_id();
        this.quantidade = requestOrderDTO.quantidade();
        this.data = requestOrderDTO.data();
        this.user_id = requestOrderDTO.user_id();
    }
}
