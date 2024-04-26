package maxsane.maxsanewebsite.model.user;

import java.util.UUID;

public record RequestUserDTO(UUID id, String user, String role, String password, String email, String cpf, String phonenumber) {
}