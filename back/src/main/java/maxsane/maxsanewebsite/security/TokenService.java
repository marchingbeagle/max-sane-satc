package maxsane.maxsanewebsite.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import io.github.cdimascio.dotenv.Dotenv;
import maxsane.maxsanewebsite.model.user.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {
    @Value("${JWT_TOKEN}")
    private String JWT_TOKEN;

    public String generateToken(User user){
        //Dotenv dotenv = Dotenv.load();
        try{
            Algorithm algorithm = Algorithm.HMAC256(JWT_TOKEN);
            String token = JWT.create()
                    .withIssuer("max-sane")
                    .withSubject(user.getEmail())
                    .withExpiresAt(generateExpirationDate())
                    .sign(algorithm);
            return token;
        }catch (JWTCreationException exception){
            throw new RuntimeException("Error while generating token", exception);
        }
    }

    public String validateToken(String token){
        //Dotenv dotenv = Dotenv.load();

        try{
            Algorithm algorithm = Algorithm.HMAC256(JWT_TOKEN);
            return JWT.require(algorithm)
                    .withIssuer("max-sane")
                    .build()
                    .verify(token)
                    .getSubject();
        }catch (JWTVerificationException exception){
            return "";
        }
    }

    private Instant generateExpirationDate(){
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}
