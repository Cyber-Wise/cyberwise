package CapturarDados;

public class Componentes {

//    discos
    private long totalDisco;
    private long tamanhoDisponivel;

//    Ram
    private Double totalRam;
    private Double ramDisponivel;

//    CPU
    private Double cpuEmUso;


    public long getTotalDisco() {
        return totalDisco;
    }

    public void setTotalDisco(long totalDisco) {
        this.totalDisco = totalDisco;
    }

    public long getTamanhoDisponivel() {
        return tamanhoDisponivel;
    }

    public void setTamanhoDisponivel(long tamanhoDisponivel) {
        this.tamanhoDisponivel = tamanhoDisponivel;
    }

    public Double getTotalRam() {
        return totalRam;
    }

    public void setTotalRam(Double totalRam) {
        this.totalRam = totalRam;
    }

    public Double getRamDisponivel() {
        return ramDisponivel;
    }

    public void setRamDisponivel(Double ramDisponivel) {
        this.ramDisponivel = ramDisponivel;
    }

    public Double getCpuEmUso() {
        return cpuEmUso;
    }

    public void setCpuEmUso(Double cpuEmUso) {
        this.cpuEmUso = cpuEmUso;
    }


}

