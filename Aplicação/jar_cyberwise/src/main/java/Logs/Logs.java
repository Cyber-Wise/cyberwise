package Logs;
    public class Logs {
        private String sistemaOperacional;
        private Integer arquitetura;
        private String hostname;
        private String data;
        private String idMaquina;
        private String mensagem;
        private String logLevel;
        private Integer statusCode;

        public String getSistemaOperacional() {
            return sistemaOperacional;
        }

        public void setSistemaOperacional(String sistemaOperacional) {
            this.sistemaOperacional = sistemaOperacional;
        }

        public Integer getArquitetura() {
            return arquitetura;
        }

        public void setArquitetura(Integer arquitetura) {
            this.arquitetura = arquitetura;
        }

        public String getHostname() {
            return hostname;
        }

        public void setHostname(String hostname) {
            this.hostname = hostname;
        }

        public String getData() {
            return data;
        }

        public void setData(String data) {
            this.data = data;
        }

        public String getIdMaquina() {
            return idMaquina;
        }

        public void setIdMaquina(String idMaquina) {
            this.idMaquina = idMaquina;
        }

        public String getMensagem() {
            return mensagem;
        }

        public void setMensagem(String mensagem) {
            this.mensagem = mensagem;
        }

        public String getLogLevel() {
            return logLevel;
        }

        public void setLogLevel(String logLevel) {
            this.logLevel = logLevel;
        }

        public Integer getStatusCode() {
            return statusCode;
        }

        public void setStatusCode(Integer statusCode) {
            this.statusCode = statusCode;
        }

        public Logs() {

        }
        //
        public Logs(String sistemaOperacional, Integer arquitetura, String hostname, String data, String mensagem, String logLevel, Integer statusCode) {
            this.sistemaOperacional = sistemaOperacional;
            this.arquitetura = arquitetura;
            this.hostname = hostname;
            this.data = data;
            this.mensagem = mensagem;
            this.logLevel = logLevel;
            this.statusCode = statusCode;
        }

        @Override
        public String toString() {
            return """
                {
                Sistema Operacional: %s
                Arquitetura: %d
                hostname: %s
                Data: %s
                Mensagem: %s
                logLevel: %s
                statusCode: %d
                }
                """.formatted(sistemaOperacional, arquitetura, hostname, data, mensagem, logLevel, statusCode);
        }
    }
