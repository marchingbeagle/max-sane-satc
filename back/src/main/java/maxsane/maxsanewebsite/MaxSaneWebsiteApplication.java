package maxsane.maxsanewebsite;

import maxsane.maxsanewebsite.services.EnvLoader;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MaxSaneWebsiteApplication {

	public static void main(String[] args) {
		EnvLoader.load("/etc/secrets/.env");
		SpringApplication.run(MaxSaneWebsiteApplication.class, args);
	}

}
