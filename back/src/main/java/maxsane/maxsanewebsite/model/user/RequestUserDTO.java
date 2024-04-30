package maxsane.maxsanewebsite.model.user;

import java.util.UUID;

public record RequestUserDTO(
        UUID id,
        String user_name,
        UserRole role,
        String password,
        String email,
        String cpf,
        String phonenumber
) {}

