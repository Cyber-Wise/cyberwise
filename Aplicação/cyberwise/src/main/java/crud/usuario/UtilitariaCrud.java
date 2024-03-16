package crud.usuario;

import java.util.ArrayList;
import java.util.List;

public class UtilitariaCrud {
    List<String> listaEmail(){
        List<String> listaEmail = new ArrayList<String>();
        listaEmail.add("davi@mendonca.com");
        listaEmail.add("pablo@santos.com");
        listaEmail.add("ana@catarina.com");
        listaEmail.add("robson@rioki.com");

        return listaEmail;
    }
    List<String> listaSenha(){
        List<String> listaSenha = new ArrayList<String>();
        listaSenha.add("mendoncadavi");
        listaSenha.add("santospablo");
        listaSenha.add("catarinaana");
        listaSenha.add("riokirobson");

        return listaSenha;

    }

    Boolean validar(String email, String senha) {
        for (int i = 0; i < listaEmail().size(); i++) {
            if (email.equals(listaEmail().get(i)) && senha.equals(listaSenha().get(i))) {
                return true;
            }
        }
        return false;
    }

    Boolean cadastrar(String email, String senha){

        if (validar(senha, email) ==  false){
            listaEmail().add(email);
            listaSenha().add(senha);
            return true;
        }
        return false;
    }


}




