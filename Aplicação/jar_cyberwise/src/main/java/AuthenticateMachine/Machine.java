package AuthenticateMachine;
public class Machine {
    private Integer id;
    private String modelo;
    private String hostname;
    private String numeroSerieProcessador;

    public String getNumeroSerieProcessador() {
        return numeroSerieProcessador;
    }

    public void setNumeroSerieProcessador(String numeroSerieProcessador) {
        this.numeroSerieProcessador = numeroSerieProcessador;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }


    @Override
    public String toString() {
        return "Machine{" +
                "id=" + id +
                ", modelo='" + modelo + '\'' +
                ", hostname='" + hostname + '\'' +
                ", numeroSerieProcessador='" + numeroSerieProcessador + '\'' +
                '}';
    }
}
