package crud.usuario;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class UtilitariaCrud {

    Boolean validar(List<String> listaUsuario, String usuario) {
        for (int i = 0; i < listaUsuario.size(); i++) {
            if (usuario.equals(listaUsuario.get(i))) {
                return true;
            }
        }
        return false;
    }

    Void menu(List<String> listaUsuario, List<String>listaSenha){
        UtilitariaCrud util = new UtilitariaCrud();
        Scanner input = new Scanner(System.in);
        Integer opcao;
        List<String> listaCadastro = new ArrayList<String>();
        String usuario;
        String senha;

        System.out.println("""
                Bem vindo ao client Cyberwise!!
                Selecione uma opção:
                [1] Fazer login com usuario cadastrado.
                [2] Cadastrar novo usuario.
                """);
        opcao = input.nextInt();
        if (opcao == 1){
            util.login(listaUsuario, listaSenha);

        } else if (opcao == 2) {
            util.cadastro(listaUsuario,listaSenha);
        }else{
            System.out.println("Opção invalida.\n");
            util.menu(listaUsuario, listaSenha);
        }
        return null;
    }

    Boolean login(List<String> listaUsuario, List<String> listaSenha){
        UtilitariaCrud util = new UtilitariaCrud();
        Scanner input = new Scanner(System.in);
        String usuario;
        String senha;

        System.out.println("Insira o usuraio:");
        usuario = input.next();
        System.out.println("Insira a Senha:");
        senha = input.next();

        if (util.validar(listaUsuario, usuario)){
            System.out.println("Login realizado com sucesso.");
            System.out.println("Bem vindo " +usuario+ "!!");
            return true;
        }else{
            System.out.println("Usuario ou Senha invalidos.\n");
            util.menu(listaUsuario,listaSenha);
            return false;
        }

    }

    Void cadastro(List<String> listaUsuario, List<String> listaSenha){
        UtilitariaCrud util = new UtilitariaCrud();
        Scanner input = new Scanner(System.in);
        String usuario;
        String senha;
        String comfirmar;


        System.out.println("Insira um Usuario:");
        usuario = input.next();
        System.out.println("Insira uma Senha:");
        senha = input.next();
        System.out.println("Confirmar a Senha:");
        comfirmar = input.next();

        if (senha.equals(comfirmar)){
            if (util.validar(listaUsuario, usuario)){
                System.out.println("Usuario já esta cadastrado.\n");
                util.menu(listaUsuario,listaSenha);
            }else {
                listaUsuario.add(usuario);
                listaSenha.add(senha);
                System.out.println("Cadastro realizado com sucesso.\n");
                util.menu(listaUsuario, listaSenha);
                return null;
            }
        }else {
            System.out.println("As senhas estão diferentes.\n");
            util.menu(listaUsuario, listaSenha);
            return null;
        }return null;
    }


}




