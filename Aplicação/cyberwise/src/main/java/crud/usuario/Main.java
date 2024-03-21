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
        Integer opcao;
        List<String> listaCadastro = new ArrayList<String>();


        List<String> listaUsuario = new ArrayList<String>();
        listaUsuario.add("davi@mendonca");
        listaUsuario.add("pablo@santos");
        listaUsuario.add("ana@catarina");
        listaUsuario.add("robson@rioki");

        List<String> listaSenha = new ArrayList<String>();
        listaSenha.add("mendoncadavi");
        listaSenha.add("santospablo");
        listaSenha.add("catarinaana");
        listaSenha.add("riokirobson");

        util.menu(listaUsuario, listaSenha);


    }
}
