import CapturarDados.CapturarDados;
import ConexaoBanco.Conexao;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Scanner;

public class Monitoramento {
    public static void main(String[] args) {
        Conexao conexao = new Conexao();
        JdbcTemplate con = conexao.getConexaoDoBanco();

        Scanner scanner = new Scanner(System.in);

        System.out.println("Jar iniciando...");
        System.out.println("Insira seu numero de série");
        Integer numeroSerie = scanner.nextInt();

     List<Maquina> lista = con.query("SELECT maquina.id, maquina.modelo FROM maquina WHERE numSerie = " + numeroSerie + ";"
             , new BeanPropertyRowMapper<>(Maquina.class));

        if(lista.isEmpty()) {
            System.out.println("Codigo de acesso invalido!");
        } else {

            System.out.println(lista.get(0).getId());
            System.out.println("Logado com sucesso");
            System.out.println("Dados sendo coletados");
            System.out.println("Pressione (crtl + c) para interromper");

            CapturarDados.pegarDados(lista.get(0).getId());

        }





    }
}
