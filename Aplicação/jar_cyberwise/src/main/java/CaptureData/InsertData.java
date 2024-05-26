package CaptureData;

import AlertManagement.Status;
import org.springframework.jdbc.core.JdbcTemplate;
import Connection.ConnectionLocal;
import Connection.ConnectionServer;

public class InsertData {
    public static void inserirBanco(Monitoring monitoramento, Integer id) {
        ConnectionServer connectionServer = new ConnectionServer();
        JdbcTemplate con = connectionServer.getConexaoDoBanco();

        String status = monitoramento.getStatus().getStatusMaquina();

//        long totalDisco = monitoramento.getTotalDisco();
        Long discoEmUso = monitoramento.getDiscoEmUso();

        Double porcentagemRam = monitoramento.getPorcentagemRam();
        Double ramEmUso = monitoramento.getRamEmUso();

        Double porcentagemDisco = monitoramento.getPorcentagemDisco();
        Double cpuEmUso = monitoramento.getCpuEmUso();

        Double gbEnviados = monitoramento.getGbEnviados();
        Double gbRecebidos = monitoramento.getGbRecebidos();
        Long pacotesEnviados = monitoramento.getPacotesEnviados();
        Long pacotesRecebidos = monitoramento.getPacotesRecebidos();

        try {
            while (true) {

                con.execute("INSERT INTO monitoramento (status_maquina, cpuEmUso, ramEmUso, tamanhoEmUsoDisco," +
                        " gbEnviados, gbRecebidos, pacotesEnviados, pacotesRecebidos, fk_maquina, data_hora) "
                        + "VALUES ('" + status +"', "+ cpuEmUso + ", " + porcentagemRam + ", " + porcentagemDisco + ", " + gbEnviados + ", "
                        + gbRecebidos + "," + pacotesEnviados + ", " + pacotesRecebidos + ", " + id + ", CURRENT_TIMESTAMP)");

//                System.out.println(monitoramento.getRamEmUso());
                CaptureData.pegarDados(id);

                Thread.sleep(5000);
            }
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    public static void inserirAlerta(String componente, Status status, Integer idMaquina){
        ConnectionServer connectionServer = new ConnectionServer();
        JdbcTemplate con = connectionServer.getConexaoDoBanco();

        String criticiade = status.getStatusMaquina();

        con.execute("INSERT INTO alertas VALUES " +
                "(NULL, '" + criticiade +"', CURRENT_TIMESTAMP, '" + componente + "', " + idMaquina +");");

    }
    public static void HistoricoLocal(String componente, Status status, Integer idMaquina){
        ConnectionLocal connectionLocal = new ConnectionLocal();
        JdbcTemplate con = connectionLocal.getConexaoDoBanco();

        String criticiade = status.getStatusMaquina();

        con.execute("INSERT INTO historicoLocal VALUES " +
                "(" + idMaquina +", '" + criticiade +"', CURRENT_TIMESTAMP, '" + componente + "');");

    }
}
