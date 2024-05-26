package ParameterManager;

import Connection.ConnectionServer;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class ParameterQuery {
    public static Parameters BuscarParametros(Integer idMaquina){
        ConnectionServer connectionServer = new ConnectionServer();
        JdbcTemplate con = connectionServer.getConexaoDoBanco();

        List<Parameters> response = con.query("SELECT alertaCPU, criticoCPU, alertaDISCO, criticoDISCO, alertaRAM, criticoRAM " +
                        "FROM parametros JOIN maquina ON maquina.fk_parametros = parametros.id WHERE maquina.id = " + idMaquina + ";"
                , new BeanPropertyRowMapper<>(Parameters.class)
        );
        return response.get(0);

    }
}
