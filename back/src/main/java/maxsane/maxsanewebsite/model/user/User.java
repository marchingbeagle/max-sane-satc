package maxsane.maxsanewebsite.model.user;

import jakarta.persistence.*;
import lombok.*;
import java.util.UUID;

@Table(name="users")
@Entity(name="users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String user_name;
    private String role;
    private String password;
    private String email;
    private String cpf;
    private String phonenumber;

    public User(RequestUserDTO requestUserDTO){
        this.user_name = requestUserDTO.user_name();
        this.role = requestUserDTO.role();
        this.password = requestUserDTO.password();
        this.email = requestUserDTO.email();
        this.cpf = requestUserDTO.cpf();
        this.phonenumber = requestUserDTO.phonenumber();
    }
}
