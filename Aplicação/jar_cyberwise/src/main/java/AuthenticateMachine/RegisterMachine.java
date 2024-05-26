package AuthenticateMachine;

import Connection.ConnectionServer;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class RegisterMachine {
    public static void register(NewMachine dadosMaquina, Integer id){
        ConnectionServer connectionServer = new ConnectionServer();
        JdbcTemplate con = connectionServer.getConexaoDoBanco();

        con.execute("UPDATE maquina SET " +
                        "sistemaOperacional = '" + dadosMaquina.getSistema_operacional() + "'," +
                        " fabricante = '" + dadosMaquina.getFabricante() + "'," +
                        " NumeroSerieProcessador = '" + dadosMaquina.getNumeroSerieProcessador() + "'," +
                        " ramTotal = '" + dadosMaquina.getRamTotal() + "'," +
                        " qtdDisco = '" + dadosMaquina.getQtdDisco() + "'," +
                        " discoTotal = '" + dadosMaquina.getDiscoTotal() + "'," +
                        " hostname = '" + dadosMaquina.getHostname() + "'" +
                        " WHERE id = " + id + ";");

    }
}
