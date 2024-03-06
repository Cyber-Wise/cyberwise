package crud.usuario;

import java.util.ArrayList;
import java.util.List;

public class UtilitariaCrud {

    Boolean validarLogin(String email, String senha){
        List<String> emailValido = new ArrayList<String>();
        emailValido.add("davi@mendonca.com");
        emailValido.add("pablo@santos.com");
        emailValido.add("ana@catarina.com");
        emailValido.add("robson@rioki.com");

        List<String> senhaValida = new ArrayList<String>();
        senhaValida.add("mendoncadavi");
        senhaValida.add("santospablo");
        senhaValida.add("catarinaana");
        senhaValida.add("riokirobson");

        for (int i = 0; i < emailValido.size(); i++) {
            if (email.equals(emailValido.get(i)) && senha.equals(senhaValida.get(i))){
                return true;
            }
        }

        return false;
    };

}
