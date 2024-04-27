package maxsane.maxsanewebsite.services;

import maxsane.maxsanewebsite.model.user.RequestUserDTO;
import maxsane.maxsanewebsite.model.user.User;
import maxsane.maxsanewebsite.model.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    public User createUser(RequestUserDTO data) {
        String hashedPassword = passwordEncoder.encode(data.password());
        User user = new User();

        user.setUser_name(data.user_name());
        user.setPassword(hashedPassword);
        user.setCpf(data.cpf());
        user.setEmail(data.email());
        user.setPhonenumber(data.email());
        user.setRole(data.role());

        return user;
    }
}
