package AuthenticateClient;

public class ClientData {
    private Integer idClient;
    private String nomeClient;
    private String Empresa;

    public Integer getIdClient() {
        return idClient;
    }

    public void setIdClient(Integer idClient) {
        this.idClient = idClient;
    }

    public String getNomeClient() {
        return nomeClient;
    }

    public void setNomeClient(String nomeClient) {
        this.nomeClient = nomeClient;
    }

    public String getEmpresa() {
        return Empresa;
    }

    public void setEmpresa(String empresa) {
        Empresa = empresa;
    }
    @Override
    public String toString() {
        return "ClientData{" +
                "idClient=" + idClient +
                ", nomeClient='" + nomeClient + '\'' +
                ", Empresa='" + Empresa + '\'' +
                '}';
    }
}
