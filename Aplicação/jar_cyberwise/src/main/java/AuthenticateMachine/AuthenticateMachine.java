package AuthenticateMachine;
import CaptureData.CaptureData;
import CaptureData.CaptureDataRegister;
import Connection.ConnectionLocal;
import Connection.ConnectionServer;
import com.github.britooo.looca.api.core.Looca;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import java.util.List;

public class AuthenticateMachine{
    public static Machine authenticateMachine(Integer codigoAcesso){
     Machine machine = new Machine();

    ConnectionServer connectionServer = new ConnectionServer();
    ConnectionLocal connectionLocal = new ConnectionLocal();
    JdbcTemplate con = connectionServer.getConexaoDoBanco();
    Looca looca = new Looca();
    String idPrcessador = looca.getProcessador().getId();

    List<Machine> response = con.query("SELECT id, modelo, hostname, NumeroSerieProcessador FROM maquina WHERE codigoAcesso = " + codigoAcesso + ";"
            , new BeanPropertyRowMapper<>(Machine.class));

    if(response.isEmpty()) {
        System.out.println("Não foi possível encontrar sua máquina, verifique o código de acesso.");
        return null;
    } else {

        if(response.get(0).getHostname() == null){
            CaptureDataRegister.RegistrarDados(response.get(0).getId());
        }
        else if(response.get(0).getNumeroSerieProcessador().equalsIgnoreCase(idPrcessador)){
        machine.setId(response.get(0).getId());
        return machine;

        }
        System.out.println("Esse código de acesso não pertence a esta máquina.");
        return null;
        }

    }
    }

