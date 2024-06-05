package AuthenticateClient;

import Connection.ConnectionLocal;
import Connection.ConnectionServer;
import com.github.britooo.looca.api.core.Looca;
import Logs.Logs;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class AuthenticateClient {
    public static Boolean authenticateClient(String email, String senha){
        Looca looca = new Looca();
        Logs log = new Logs();

        ConnectionServer connectionServer = new ConnectionServer();
        JdbcTemplate con = connectionServer.getConexaoDoBanco();

//        ConnectionLocal connectionLocal = new ConnectionLocal();
//        JdbcTemplate con = connectionLocal.getConexaoDoBanco();

        List<ClientData> response = con.query("SELECT funcionario.id AS idClient, funcionario.nome AS nomeClient, funcionario.fk_empresa, empresa.nome AS Empresa FROM funcionario " +
                        "JOIN empresa ON funcionario.fk_empresa = empresa.id WHERE email = '" + email + "' AND senha = '" + senha + "';"
                , new BeanPropertyRowMapper<>(ClientData.class)
        );

        if(response.isEmpty()) {
            System.out.println("Email ou senha inválidos!");

            String data;
            log.setSistemaOperacional(looca.getSistema().getSistemaOperacional());
            log.setArquitetura(looca.getSistema().getArquitetura());
            log.setHostname(looca.getRede().getParametros().getHostName());
            data = new SimpleDateFormat("dd/mm/yyyy HH:mm:ss.SSS").format(new Date());
            log.setData(data);
            log.setMensagem("Erro no login");
            log.setLogLevel("Error");
            log.setStatusCode(401);

//            System.out.println(log.toString().replace("idMaquina: null\n", "").replace("\t",""));

            try(FileWriter writer = new FileWriter(".\\erro.txt", true)){
                writer.write(log.toString().replace("idMaquina: null\n", "").replace("\t",""));
            }catch(IOException u){
                System.out.println("Erro ao gerar log" + u.getMessage());
            }

            return false;
        } else {
            System.out.println("Logado com sucesso");
            System.out.println("Bem Vindo(a) " + response.get(0).getNomeClient());

            String data;
            log.setSistemaOperacional(looca.getSistema().getSistemaOperacional());
            log.setArquitetura(looca.getSistema().getArquitetura());
            log.setHostname(looca.getRede().getParametros().getHostName());
            data = new SimpleDateFormat("dd/mm/yyyy HH:mm:ss.SSS").format(new Date());
            log.setData(data);
            log.setMensagem("Login realizado com sucesso");
            log.setLogLevel("Info");
            log.setStatusCode(200);

//            System.out.println(log.toString().replace("idMaquina: null\n", "").replace("\t",""));

            try(FileWriter writer = new FileWriter(".\\erro.txt", true)){
                writer.write(log.toString().replace("idMaquina: null\n", "").replace("\t",""));
            }catch(IOException u){
                System.out.println("Erro ao gerar log" + u.getMessage());
            }

            return true;
        }
    }
}
