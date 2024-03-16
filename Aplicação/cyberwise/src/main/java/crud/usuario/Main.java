package crud.usuario;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        UtilitariaCrud util = new UtilitariaCrud();
        Scanner input = new Scanner(System.in);
        String usuario;
        String senha;
        String comfirmar;
        Integer opcao;

        List<String> listaUsuario = new ArrayList<String>();
        listaUsuario.add("davi@mendonca.com");
        listaUsuario.add("pablo@santos.com");
        listaUsuario.add("ana@catarina.com");
        listaUsuario.add("robson@rioki.com");

        List<String> listaSenha = new ArrayList<String>();
        listaSenha.add("mendoncadavi");
        listaSenha.add("santospablo");
        listaSenha.add("catarinaana");
        listaSenha.add("riokirobson");

        System.out.println("""
                Bem vindo ao client Cyberwise!!
                Selecione uma opção:
                [1] Fazer login com usuario cadastrado.
                [2] Cadastrar novo usuario.
                """);
        opcao = input.nextInt();

        if (opcao == 1){
            System.out.println("Insira o usuraio:");
            usuario = input.next();
            System.out.println("Insira a Senha:");
            senha = input.next();

            if (util.validar(listaUsuario, listaSenha, usuario, senha)){
                System.out.println("Login realizado com sucesso.");
            }else{
                System.out.println("Usuario ou Senha invalidos.");
                //main();
            }


        } else if (opcao == 2) {
            System.out.println("Insira um Usuario:");
            usuario = input.next();
            System.out.println("Insira uma Senha:");
            senha = input.next();
            System.out.println("Confirmar a Senha:");
            comfirmar = input.next();
            if (senha.equals(comfirmar)){
                listaUsuario.add(usuario);
                listaSenha.add(senha);
                System.out.println("Cadastro realizado com sucesso.");
                System.out.println(listaUsuario);
            }else System.out.println("Senhas diferentes.");

        }else{
            System.out.println("Opção invalida.");
        }

    }
}
