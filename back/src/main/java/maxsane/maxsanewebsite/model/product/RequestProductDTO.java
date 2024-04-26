package maxsane.maxsanewebsite.model.product;

import java.util.UUID;

public record RequestProductDTO(
        UUID id,
        String product_name,
        String category,
        String image,
        String description,
        int use_case
){}
