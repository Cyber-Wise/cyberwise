package AlertManagement;

import org.slf4j.LoggerFactory;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.io.OutputStream;

public class SendAlert {

    private static final String WEBHOOK_URL = "https://hooks.slack.com/services/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";

    
    public static void sendSlackAlert(String componente, Integer idMaquina, String status) {
        var logger = LoggerFactory.getLogger("slack-alert-service");
        try {
            String message = String.format(":warning: *Alerta:*\nComponente *%s* da máquina *%d* está em estado *%s*!", componente, idMaquina, status);
            String payload = String.format("{\"text\": \"%s\"}", message);

            URL url = new URL(WEBHOOK_URL);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setDoOutput(true);
            connection.setRequestProperty("Content-Type", "application/json; utf-8");
            connection.setRequestProperty("Accept", "application/json");

            try (OutputStream os = connection.getOutputStream()) {
                byte[] input = payload.getBytes(StandardCharsets.UTF_8);
                os.write(input, 0, input.length);
            }

            int responseCode = connection.getResponseCode();
            if (responseCode == 200) {
                logger.info("Alerta enviado para o Slack com sucesso!");
            } else {
                logger.error("Erro ao enviar alerta para o Slack: Código de resposta {}", responseCode);
            }

        } catch (IOException e) {
            logger.error("Erro ao enviar alerta para o Slack: {}", e.getMessage(), e);
        }

        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            logger.error("Erro ao esperar antes de enviar o próximo alerta: {}", e.getMessage(), e);
            Thread.currentThread().interrupt();
        }
    }
}
