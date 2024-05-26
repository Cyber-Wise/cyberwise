package CaptureData;

import AuthenticateMachine.NewMachine;
import AuthenticateMachine.RegisterMachine;
import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.rede.Rede;
import com.github.britooo.looca.api.group.sistema.Sistema;

import java.util.List;

public class CaptureDataRegister {
    public static void RegistrarDados(Integer id){
    Looca looca = new Looca();
    NewMachine dataMachine = new NewMachine();

    Rede rede = looca.getRede();
    Sistema sistema = looca.getSistema();
    Memoria memoria = looca.getMemoria();
    Processador processador = looca.getProcessador();

    DiscoGrupo grupoDeDiscos = looca.getGrupoDeDiscos();

//    Sistema
        dataMachine.setSistema_operacional(sistema.getSistemaOperacional());
        dataMachine.setFabricante(sistema.getFabricante());

//    Processador
        dataMachine.setNumeroSerieProcessador(processador.getId());
        dataMachine.setNomeProcessador(processador.getNome());

//    Memória
        dataMachine.setRamTotal(memoria.getTotal());

//    Grupo de Disco
        dataMachine.setQtdDisco(grupoDeDiscos.getQuantidadeDeDiscos());
        dataMachine.setDiscoTotal(grupoDeDiscos.getTamanhoTotal());

//    Rede
        dataMachine.setHostname(rede.getParametros().getHostName());

        RegisterMachine.register(dataMachine, id);
    }
}
