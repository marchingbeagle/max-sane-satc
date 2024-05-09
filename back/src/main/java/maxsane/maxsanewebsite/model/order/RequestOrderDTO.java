package maxsane.maxsanewebsite.model.order;

import java.util.Date;
import java.util.UUID;

public record RequestOrderDTO (
        UUID product_id,
        Integer quantidade,
        Date data,
        UUID user_id
){}
