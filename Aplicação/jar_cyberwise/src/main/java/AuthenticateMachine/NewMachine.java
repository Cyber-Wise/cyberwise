package AuthenticateMachine;

public class NewMachine extends Machine{
    private Integer id;
    private String Sistema_operacional;
    private String Fabricante;
    private String numeroSerieProcessador;
    private String nomeProcessador;
    private Long ramTotal;
    private Integer qtdDisco;
    private Long discoTotal;
    private String hostname;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSistema_operacional() {
        return Sistema_operacional;
    }

    public void setSistema_operacional(String sistema_operacional) {
        Sistema_operacional = sistema_operacional;
    }

    public String getFabricante() {
        return Fabricante;
    }

    public void setFabricante(String fabricante) {
        Fabricante = fabricante;
    }

    public String getNumeroSerieProcessador() {
        return numeroSerieProcessador;
    }

    public void setNumeroSerieProcessador(String numeroSerieProcessador) {
        this.numeroSerieProcessador = numeroSerieProcessador;
    }

    public String getNomeProcessador() {
        return nomeProcessador;
    }

    public void setNomeProcessador(String nomeProcessador) {
        this.nomeProcessador = nomeProcessador;
    }

    public Long getRamTotal() {
        return ramTotal;
    }

    public void setRamTotal(Long ramTotal) {
        this.ramTotal = ramTotal;
    }

    public Integer getQtdDisco() {
        return qtdDisco;
    }

    public void setQtdDisco(Integer qtdDisco) {
        this.qtdDisco = qtdDisco;
    }

    public Long getDiscoTotal() {
        return discoTotal;
    }

    public void setDiscoTotal(Long discoTotal) {
        this.discoTotal = discoTotal;
    }

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }
}
