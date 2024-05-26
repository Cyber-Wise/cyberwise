package CaptureData;

import AlertManagement.Status;

public class Monitoring {

    //    discos
    private long totalDisco;
    private long discoEmUso;
    private Double porcentagemDisco;

    //    Ram
    private Double totalRam;
    private Double ramEmUso;
    private Double porcentagemRam;

    //    CPU
    private Double cpuEmUso;

    //    Rede
    private Double gbEnviados;
    private Double gbRecebidos;
    private Long pacotesEnviados;
    private Long pacotesRecebidos;

    //    Status
    private Status status;

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Double getPorcentagemDisco() {
        return porcentagemDisco;
    }

    public void setPorcentagemDisco(Double porcentagemDisco) {
        this.porcentagemDisco = porcentagemDisco;
    }

    public long getTotalDisco() {
        return totalDisco;
    }

    public void setTotalDisco(long totalDisco) {
        this.totalDisco = totalDisco;
    }

    public long getDiscoEmUso() {
        return discoEmUso;
    }

    public void setDiscoEmUso(long discoEmUso) {
        this.discoEmUso = discoEmUso;
    }

    public Double getTotalRam() {
        return totalRam;
    }

    public void setTotalRam(Double totalRam) {
        this.totalRam = totalRam;
    }

    public Double getRamEmUso() {
        return ramEmUso;
    }

    public void setRamEmUso(Double ramEmUso) {
        this.ramEmUso = ramEmUso;
    }

    public Double getPorcentagemRam() {
        return porcentagemRam;
    }

    public void setPorcentagemRam(Double porcentagemRam) {
        this.porcentagemRam = porcentagemRam;
    }

    public Double getCpuEmUso() {
        return cpuEmUso;
    }

    public void setCpuEmUso(Double cpuEmUso) {
        this.cpuEmUso = cpuEmUso;
    }

    public Double getGbEnviados() {
        return gbEnviados;
    }

    public void setGbEnviados(Double gbEnviados) {
        this.gbEnviados = gbEnviados;
    }

    public Double getGbRecebidos() {
        return gbRecebidos;
    }

    public void setGbRecebidos(Double gbRecebidos) {
        this.gbRecebidos = gbRecebidos;
    }

    public Long getPacotesEnviados() {
        return pacotesEnviados;
    }

    public void setPacotesEnviados(Long pacotesEnviados) {
        this.pacotesEnviados = pacotesEnviados;
    }

    public Long getPacotesRecebidos() {
        return pacotesRecebidos;
    }

    public void setPacotesRecebidos(Long pacotesRecebidos) {
        this.pacotesRecebidos = pacotesRecebidos;
    }
}

