package maxsane.maxsanewebsite.model.user;

import jakarta.persistence.*;
import lombok.*;
import java.util.UUID;

@Table(name="user")
@Entity(name="user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String user;
    private String role;
    private String password;
    private String email;
    private String cpf;
    private String phonenumber;

    public User(RequestUserDTO requestUserDTO){
        this.user = requestUserDTO.user();
        this.role = requestUserDTO.role();
        this.password = requestUserDTO.password();
        this.email = requestUserDTO.email();
        this.cpf = requestUserDTO.cpf();
        this.phonenumber = requestUserDTO.phonenumber();
    }
}
