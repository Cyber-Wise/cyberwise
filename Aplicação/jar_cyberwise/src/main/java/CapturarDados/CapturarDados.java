package CapturarDados;

import Conversor.ConversorByte;
import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import com.github.britooo.looca.api.group.discos.Volume;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.processos.Processo;
import com.github.britooo.looca.api.group.processos.ProcessoGrupo;
import com.github.britooo.looca.api.group.rede.Rede;
import com.github.britooo.looca.api.group.servicos.Servico;
import com.github.britooo.looca.api.group.servicos.ServicoGrupo;
import com.github.britooo.looca.api.group.sistema.Sistema;
//import com.github.britooo.looca.api.group.temperatura.Temperatura;

import java.util.ArrayList;
import java.util.List;

public class CapturarDados {
    public static void pegarDados(Integer id) {
        Looca looca = new Looca();
        Componentes componentes = new Componentes();
        Rede rede = looca.getRede();

//        Sistema sistema = looca.getSistema();
        Memoria memoria = looca.getMemoria();
        Processador processador = looca.getProcessador();
//        Temperatura temperatura = looca.getTemperatura();

        DiscoGrupo grupoDeDiscos = looca.getGrupoDeDiscos();
//        ServicoGrupo grupoDeServicos = looca.getGrupoDeServicos();
//        ProcessoGrupo grupoDeProcessos = looca.getGrupoDeProcessos();


        //GRUPOS
        List<Disco> discos = grupoDeDiscos.getDiscos();
//        List<Servico> servicos = grupoDeServicos.getServicos();
//        List<Processo> processos = grupoDeProcessos.getProcessos();

//        Disco
        List<Volume> volume = grupoDeDiscos.getVolumes();


        long tamanhoDisponivel;
                for(Volume vol : volume){
                    tamanhoDisponivel = vol.getDisponivel();
                    componentes.setTamanhoDisponivel(tamanhoDisponivel);
//                    System.out.println(componentes.getTotalDisco());

                }

        long tamanho;
        for (Disco disco : discos) {
            tamanho = disco.getTamanho();
            componentes.setTotalDisco(tamanho);
        }

//        Ram
        Double totalRam;
        totalRam = ConversorByte.bytesToGB(memoria.getTotal());
//        System.out.println(ConversorByte.bytesToGB(memoria.getTotal()));
        componentes.setTotalRam(totalRam);

        Double ramDisponivel;
        ramDisponivel = ConversorByte.bytesToGB(memoria.getDisponivel());
        componentes.setRamDisponivel(ramDisponivel);

//        CPU
        Double cpuEmUso = processador.getUso();
        componentes.setCpuEmUso(cpuEmUso);
//        System.out.println(sistema.toString());

        InsertDados.inserirBanco(componentes, id);

    }


}

