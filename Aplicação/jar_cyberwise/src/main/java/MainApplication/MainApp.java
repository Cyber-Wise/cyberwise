package MainApplication;

import AuthenticateMachine.AuthenticateMachine;
import AuthenticateMachine.Machine;
import CaptureData.CaptureData;
import Connection.ConnectionLocal;
import Connection.ConnectionServer;
import org.springframework.jdbc.core.JdbcTemplate;
import AuthenticateClient.AuthenticateClient;
import java.util.Scanner;

public class MainApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Jar iniciando...");

        System.out.println("Insira seu email:");
        String email = scanner.nextLine();

        System.out.println("Insira sua senha:");
        String senha = scanner.nextLine();

        Boolean logado = AuthenticateClient.authenticateClient(email, senha);

        if(logado){
            Integer codigoAcesso;


            System.out.println("Insira o código de acesso da máquina:");
            codigoAcesso = scanner.nextInt();

            Machine maquinaAutenticada = AuthenticateMachine.authenticateMachine(codigoAcesso);

            if(maquinaAutenticada != null){
                System.out.println("Deseja começar o monitoramento? (s/n)");
                String retorno = scanner.next();

                if(retorno.equalsIgnoreCase("S")){
                    System.out.println("Monitoramento iniciado.");
                    System.out.println("Pressione (crtl + c) para interromper.");
                    CaptureData.pegarDados(maquinaAutenticada.getId());
                }
                else if(retorno.equalsIgnoreCase("N")){
                    System.out.println("Até mais ;)");
                }
            }else{
                System.out.println("Não foi possível encontrar sua máquina, verifique o código de acesso.");
            }
        }

    }
}
