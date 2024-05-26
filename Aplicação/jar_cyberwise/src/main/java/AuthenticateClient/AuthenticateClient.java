package AuthenticateClient;

import Connection.ConnectionLocal;
import Connection.ConnectionServer;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class AuthenticateClient {
    public static Boolean authenticateClient(String email, String senha){

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
            return false;
        } else {
            System.out.println("Logado com sucesso");
            System.out.println("Bem Vindo(a) " + response.get(0).getNomeClient());
            return true;
        }
    }
}
