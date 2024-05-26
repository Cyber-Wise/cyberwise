package AlertManagement;

public enum Status {
    NORMAL("Normal"),
    ALERTA("Alerta"),
    CRITICO("Critico");

    private final String statusMaquina;

    Status(String statusMaquina) {
        this.statusMaquina = statusMaquina;
    }

    public String getStatusMaquina() {
        return statusMaquina;
    }
}
