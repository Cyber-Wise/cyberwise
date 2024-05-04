public class Maquina {
    private Integer id;
    private String modelo;

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

    @Override
    public String toString() {
        return "Maquina{" +
                "id = " + id +
                ", modelo = '" + modelo + '\'' +
                '}';
    }
}
