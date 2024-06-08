package AuthenticateMachine;

import CaptureData.CaptureDataRegister;
import Connection.ConnectionLocal;
import Connection.ConnectionServer;
import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class AuthenticateMachine {
    public static Machine authenticateMachine(Integer codigoAcesso) {
        ConnectionServer connectionServer = new ConnectionServer();
        ConnectionLocal connectionLocal = new ConnectionLocal();
        JdbcTemplate con = connectionServer.getConexaoDoBanco();
        Looca looca = new Looca();
        String idProcessador = looca.getProcessador().getId();

        List<Machine> response = con.query(
                "SELECT id, modelo, hostname, NumeroSerieProcessador FROM maquina WHERE codigoAcesso = ?",
                new BeanPropertyRowMapper<>(Machine.class), codigoAcesso);

        if (response.isEmpty()) {
            System.out.println("Não foi possível encontrar sua máquina, verifique o código de acesso.");
            return null;
        } else {
            Machine machine = response.get(0);
            if (machine.getHostname() == null) {
                CaptureDataRegister.RegistrarDados(machine.getId());
                return machine;
            } else if (machine.getNumeroSerieProcessador().equalsIgnoreCase(idProcessador)) {
                return machine;
            }
            System.out.println("Esse código de acesso não pertence a esta máquina.");
            return null;
        }
    }
}
