package crud.usuario;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        UtilitariaCrud util = new UtilitariaCrud();
        Scanner input = new Scanner(System.in);
        String email;
        String senha;
        Integer opcao;

        System.out.println("""
                Bem vindo ao client Cyberwise!!
                Selecione uma opção:
                [1] Fazer login com usuario cadastrado.
                [2] Cadastrar novo usuario.
                """);
        opcao = input.nextInt();

        if (opcao == 1){
            System.out.println("Insira o Email:");
            email = input.next();
            System.out.println("Insira a Senha:");
            senha = input.next();

            if (util.read(email, senha)){
                System.out.println("Login realizado com sucesso");
            }else System.out.println("Email ou Senha invalidos");


        } else if (opcao == 2) {
            System.out.println("Insira um Email:");
            email = input.nextLine();
            System.out.println("Insira uma Senha:");
            senha = input.nextLine();
            System.out.println("Confirmar a Senha:");
            senha = input.nextLine();

        }else{
            System.out.println("Opção invalida");
        }

    }
}
