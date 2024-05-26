package Connection;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class ConnectionLocal {
    private JdbcTemplate conexaoDoBanco1;

    public ConnectionLocal(){
        BasicDataSource dataSource1 = new BasicDataSource();
        dataSource1.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource1.setUrl("jdbc:mysql://localhost:3306/CyberwiseClient");
        dataSource1.setUsername("root");
//        dataSource1.setUsername("cyberwise");
//        dataSource1.setPassword("cyber100");
        dataSource1.setPassword("1513");

        conexaoDoBanco1 = new JdbcTemplate(dataSource1);
    }

    public JdbcTemplate getConexaoDoBanco() {
        return conexaoDoBanco1;
    }
}
