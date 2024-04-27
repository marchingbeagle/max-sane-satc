package maxsane.maxsanewebsite.model.log;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Table(name="logs")
@Entity(name="log")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Log {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String data_log;
    private String log;

    public Log(RequestLogDTO requestLogDTO){
        this.data_log = requestLogDTO.data_log();
        this.log = requestLogDTO.log();
    }
}