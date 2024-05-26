package CaptureData;

import ParameterManager.ParameterAnalyzer;
import Converter.ConverterByte;
import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import com.github.britooo.looca.api.group.discos.Volume;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.rede.Rede;
import com.github.britooo.looca.api.group.rede.RedeInterface;

import java.util.List;

public class CaptureData {
    public static void pegarDados(Integer id) {
        Looca looca = new Looca();
        Monitoring monitoramento = new Monitoring();
        Rede rede = looca.getRede();

        Memoria memoria = looca.getMemoria();
        Processador processador = looca.getProcessador();

        DiscoGrupo grupoDeDiscos = looca.getGrupoDeDiscos();
//        ProcessoGrupo grupoDeProcessos = looca.getGrupoDeProcessos();

        //GRUPOS
        List<Disco> discos = grupoDeDiscos.getDiscos();
        List<Volume> volume = grupoDeDiscos.getVolumes();
//        List<Processo> processos = grupoDeProcessos.getProcessos();

//        Disco
        Long discoEmUso = null;
        for(Volume vol : volume){
            discoEmUso = vol.getTotal() - vol.getDisponivel();
            monitoramento.setDiscoEmUso(discoEmUso);
        }

        Long tamanho = null;
        for (Disco disco : discos) {
            tamanho = disco.getTamanho();
            monitoramento.setTotalDisco(tamanho);
        }

        Double pocentagemDisco = ((double)discoEmUso / (double)tamanho) * 100;
        monitoramento.setPorcentagemDisco(pocentagemDisco);

//        rede
        List<RedeInterface> redeInterfaces = rede.getGrupoDeInterfaces().getInterfaces();
        for (RedeInterface redeAtual : redeInterfaces){
            if(redeAtual.getNome().equals("wlan1")){
                redeAtual.getNome();
                monitoramento.setGbEnviados(ConverterByte.bytesToGB(redeAtual.getBytesEnviados()));
                monitoramento.setGbRecebidos(ConverterByte.bytesToGB(redeAtual.getBytesRecebidos()));
                monitoramento.setPacotesEnviados(redeAtual.getPacotesEnviados());
                monitoramento.setPacotesRecebidos(redeAtual.getPacotesRecebidos());
            }
        }

//        Ram
        Double ramEmUso;
        ramEmUso = ConverterByte.bytesToGB(memoria.getEmUso());
        monitoramento.setRamEmUso(ramEmUso);
        Double porcentagemRam = ((double)memoria.getEmUso() / (double)memoria.getTotal()) * 100;
        monitoramento.setPorcentagemRam(porcentagemRam);

//        CPU
        Double cpuEmUso = processador.getUso();
        monitoramento.setCpuEmUso(cpuEmUso);


        ParameterAnalyzer.AnalisarDados(monitoramento, id);
    }
}

