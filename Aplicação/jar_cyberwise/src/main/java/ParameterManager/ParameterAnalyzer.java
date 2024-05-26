package ParameterManager;

import AlertManagement.Status;
import CaptureData.InsertData;
import CaptureData.Monitoring;

public class ParameterAnalyzer {
    public static void AnalisarDados(Monitoring components, Integer idMaquina){
        Parameters parametrosMaquina = ParameterQuery.BuscarParametros(idMaquina);

//      Dados Looca
       Double cpuEmUso = components.getCpuEmUso();
       Double porcentagemRam = components.getPorcentagemRam();
       Double porcentagemDisco = components.getPorcentagemDisco();

//       Double gbEnviados = components.getGbEnviados();
//       Double gbRecebidos = components.getGbRecebidos();
//       Long pacotesEnviados = components.getPacotesEnviados();
//       Long pacotesRecebidos = components.getPacotesRecebidos();

//      Parâmetros do banco
       Double alertaCpu = parametrosMaquina.getAlertaCPU();
       Double criticoCpu = parametrosMaquina.getCriticoCPU();
       Double alertaRam = parametrosMaquina.getAlertaRAM();
       Double criticoRam = parametrosMaquina.getCriticoRAM();
       Double alertaDisco = parametrosMaquina.getAlertaDISCO();
       Double criticoDisco = parametrosMaquina.getCriticoDISCO();

       String componente = "null";

//       Cpu
       components.setStatus(Status.NORMAL);
       if(cpuEmUso >= alertaCpu && cpuEmUso < criticoCpu) {
           components.setStatus(Status.ALERTA);
           componente = "Cpu";
       }

       else if(cpuEmUso >= criticoCpu){
           componente = "Cpu";
           components.setStatus(Status.CRITICO);
        }

       if(componente.equals("Cpu") && components.getStatus() != Status.NORMAL) {
           InsertData.inserirAlerta(componente, components.getStatus(), idMaquina);
           InsertData.HistoricoLocal(componente, components.getStatus(), idMaquina);
       }


//       Ram
       if(porcentagemRam >= alertaRam && porcentagemRam < criticoRam) {
           components.setStatus(Status.ALERTA);
           componente = "Ram";
       }
        else if(porcentagemRam >= criticoRam) {
           components.setStatus(Status.CRITICO);
           componente = "Ram";
       }

        if(componente.equals("Ram") && components.getStatus() != Status.NORMAL){
            InsertData.inserirAlerta(componente, components.getStatus(), idMaquina);
            InsertData.HistoricoLocal(componente, components.getStatus(), idMaquina);
        }


//       Disco
       if(porcentagemDisco >= alertaDisco && porcentagemDisco < criticoDisco){
           components.setStatus(Status.ALERTA);
           componente = "Disco";
       }
        else if(porcentagemDisco >= criticoDisco){
            components.setStatus(Status.CRITICO);
            componente = "Disco";
       }

        if(componente.equals("Disco") && components.getStatus() != Status.NORMAL) {
            InsertData.inserirAlerta(componente, components.getStatus(), idMaquina);
            InsertData.HistoricoLocal(componente, components.getStatus(), idMaquina);
        }

        InsertData.inserirBanco(components, idMaquina);
    }
}
