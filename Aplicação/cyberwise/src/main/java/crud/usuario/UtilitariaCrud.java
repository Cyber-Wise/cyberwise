package crud.usuario;

import java.util.ArrayList;
import java.util.List;

public class UtilitariaCrud {

    Boolean validar(List<String> listaUsuario, List<String> listaSenha, String usuario, String senha) {
        for (int i = 0; i < listaUsuario.size(); i++) {
            if (usuario.equals(listaUsuario.get(i)) && senha.equals(listaSenha.get(i))) {
                return true;
            }
        }
        return false;
    }

    Boolean cadastrar(String usuario, String senha){

       // if (validar(senha, usuario) == false){
   //         listaUsuario.add(usuario);
     //       listaSenha().add(senha);
            return true;
        //}
        //return false;
    }


}




