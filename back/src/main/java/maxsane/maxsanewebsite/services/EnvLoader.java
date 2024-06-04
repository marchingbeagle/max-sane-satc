package maxsane.maxsanewebsite.services;
import io.github.cdimascio.dotenv.Dotenv;
import io.github.cdimascio.dotenv.DotenvException;

public class EnvLoader {
    public static void load() {
        try {
            Dotenv dotenv = Dotenv.load();
            String dbUrl = dotenv.get("DB_URL");
            String dbUsername = dotenv.get("DB_USERNAME");
            String dbPassword = dotenv.get("DB_PASSWORD");

            if (dbUrl == null || dbUsername == null || dbPassword == null) {
                throw new IllegalArgumentException("Missing required environment variables");
            }

            System.setProperty("spring.datasource.url", dbUrl);
            System.setProperty("spring.datasource.username", dbUsername);
            System.setProperty("spring.datasource.password", dbPassword);
        } catch (DotenvException | IllegalArgumentException e) {
            System.err.println("Error loading environment variables: " + e.getMessage());
            System.exit(1);
        }
    }
}

/*
    DB_URL=jdbc:postgresql://localhost:5432/your_database
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
*/
