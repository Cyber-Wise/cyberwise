package Connection;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class ConnectionServer {
    private JdbcTemplate conexaoDoBanco;

    public ConnectionServer(){
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setUrl("jdbc:mysql://localhost:3306/cyberwise");
        dataSource.setUsername("root");
//        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
//        dataSource.setUrl("jdbc:sqlserver://34.197.164.143:1433;databaseName=cyberwise");
//        dataSource.setUsername("cyberwise");
//        dataSource.setPassword("cyber100");
       dataSource.setPassword("0511");


        // Apenas para teste.
//        dataSource.setUrl("jdbc:sqlserver://localhost:1433;databaseName=cyberwise");
//        dataSource.setUsername("root");
//        dataSource.setPassword("1513");
//        dataSource.setPassword("0511");

        conexaoDoBanco = new JdbcTemplate(dataSource);
    }

    public JdbcTemplate getConexaoDoBanco() {
        return conexaoDoBanco;
    }
}
