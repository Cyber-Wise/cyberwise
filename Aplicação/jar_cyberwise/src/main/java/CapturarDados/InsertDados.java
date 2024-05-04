package CapturarDados;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import ConexaoBanco.Conexao;

import java.util.List;

public class InsertDados {
    public static void inserirBanco(Componentes componentes, Integer id) {
        Conexao conexao = new Conexao();
        JdbcTemplate con = conexao.getConexaoDoBanco();


        long totalDisco = componentes.getTotalDisco();
        long tamanhoDisponivel = componentes.getTamanhoDisponivel();

        Double totalRam = componentes.getTotalRam();
        Double ramDisponivel = componentes.getRamDisponivel();

        Double cpuEmUso = componentes.getCpuEmUso();

        try {

            while (true) {

                con.execute("INSERT INTO monitoramento (cpuEmUso, ramDisponivel, tamanhoDisponivelDisco, fk_maquina, data_hora) " +
                        "VALUES ("+ cpuEmUso + ", " + ramDisponivel + ", " + tamanhoDisponivel + ", " + id + ", CURRENT_TIMESTAMP)");
//         lembrar de colocar rede

//         con.execute("INSERT INTO monitoramento (dadosCPU, dadosRAM, dadosDISCO, dadosREDE, fk_maquina, data_hora) " +
//                 "VALUES ("+ cpuEmUso + ", " + ramDisponivel + ", " + tamanhoDisponivel + ", 4.2, 1, CURRENT_TIMESTAMP)");

//         List<Componentes> componentesDoBanco = con.query("SELECT * FROM monitoramento", new BeanPropertyRowMapper<>(Componentes.class));
                System.out.println("Coletando...");

                Thread.sleep(5000);
            }
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }


    }
}
