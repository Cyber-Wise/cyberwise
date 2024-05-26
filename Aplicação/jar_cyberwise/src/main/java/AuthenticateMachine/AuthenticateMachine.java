package AuthenticateMachine;
import CaptureData.CaptureData;
import CaptureData.CaptureDataRegister;
import Connection.ConnectionLocal;
import Connection.ConnectionServer;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import java.util.List;

public class AuthenticateMachine{
    public static Machine authenticateMachine(Integer codigoAcesso){
     Machine machine = new Machine();

    ConnectionServer connectionServer = new ConnectionServer();
    ConnectionLocal connectionLocal = new ConnectionLocal();
    JdbcTemplate con = connectionServer.getConexaoDoBanco();

    List<Machine> response = con.query("SELECT id, modelo, hostname FROM maquina WHERE codigoAcesso = " + codigoAcesso + ";"
            , new BeanPropertyRowMapper<>(Machine.class));

    if(response.isEmpty()) {
        return null;
    } else {

        if(response.get(0).getHostname() == null){
            CaptureDataRegister.RegistrarDados(response.get(0).getId());
        }

        machine.setId(response.get(0).getId());
        return machine;
        }

    }
    }

