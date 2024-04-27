package maxsane.maxsanewebsite.model.log;

import java.util.UUID;

public record RequestLogDTO(
        UUID id,
        String data_log,
        String log
){}