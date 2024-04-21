package maxsane.maxsanewebsite.services;
import io.github.cdimascio.dotenv.Dotenv;

public class EnvLoader {
    public static void load() {
        Dotenv dotenv = Dotenv.load();
        System.setProperty("spring.datasource.url", dotenv.get("DB_URL"));
        System.setProperty("spring.datasource.username", dotenv.get("DB_USERNAME"));
        System.setProperty("spring.datasource.password", dotenv.get("DB_PASSWORD"));
    }
}

/*
    DB_URL=jdbc:postgresql://localhost:5432/your_database
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
*/