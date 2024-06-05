var database = require("../database/config");

function maquinasEmpresa(empresa) {
  console.log("Acessei dashboardModel dados")
  var query = `
    SELECT 
        m.id AS maquina_id,
        m.modelo,
        m.codigoAcesso,
        m.sistemaOperacional,
        m.fabricante,
        m.NumeroSerieProcessador,
        m.hostname,
        mon.status_maquina,
        mon.data_hora,
        p.nome AS nome_parametro
    FROM 
        maquina m
    JOIN 
        parametros p ON m.fk_parametros = p.id
    JOIN 
        monitoramento mon ON m.id = mon.fk_maquina
    JOIN 
        (
            SELECT 
                fk_maquina, 
                MAX(data_hora) AS ultima_data_hora
            FROM 
                monitoramento
            GROUP BY 
                fk_maquina
        ) ult_mon ON mon.fk_maquina = ult_mon.fk_maquina AND mon.data_hora = ult_mon.ultima_data_hora
    WHERE 
        m.fk_empresa = ${empresa};
  `;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function maquinasComProblemas(empresa) {
  console.log("Acessei dashboardModel")
  var query = `SELECT 
    alertas.id AS idAlerta, 
    alertas.criticidade, 
    alertas.data_hora, 
    alertas.componente, 
    maquina.id AS idMaquina, 
    maquina.modelo, 
    maquina.NumeroSerieProcessador AS numSerie, 
    maquina.fk_parametros, 
    maquina.fk_empresa AS idEmpresa 
  FROM 
    alertas 
  JOIN 
    maquina 
  ON 
    alertas.fk_maquina = maquina.id 
  WHERE 
    maquina.fk_empresa = ${empresa} 
    AND alertas.data_hora >= DATEADD(MINUTE, -0.05, GETDATE());`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function notificacao(empresa) {
  console.log("Acessei dashboardModel")
  var query = `SELECT 
    alertas.id AS idAlerta, 
    alertas.criticidade, 
    alertas.data_hora, 
    alertas.componente, 
    maquina.id AS idMaquina, 
    maquina.modelo, 
    maquina.NumeroSerieProcessador AS numSerie, 
    maquina.fk_parametros, 
    maquina.fk_empresa AS idEmpresa 
  FROM 
    alertas 
  JOIN 
    maquina 
  ON 
    alertas.fk_maquina = maquina.id 
  WHERE 
    maquina.fk_empresa = ${empresa}
  ORDER BY 
    alertas.data_hora DESC
  OFFSET 0 ROWS FETCH NEXT 20 ROWS ONLY;`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function totalDeMaquinas(empresa) {
  console.log("Acessei dashboardModel")
  var query = `select COUNT(*) as contador from maquina where fk_empresa = ${empresa};`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function componentesEmEstadoCritico(empresa) {
  console.log("Acessei dashboardModel")
  var query = `SELECT 
    COUNT(DISTINCT m.id) AS quantidade_maquinas_com_critico
  FROM 
    maquina m
  JOIN 
    alertas al ON m.id = al.fk_maquina
  WHERE 
    al.data_hora >= DATEADD(SECOND, -5, GETDATE())
    AND al.criticidade = 'Critico'
    AND m.fk_empresa = ${empresa};`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function componentesEmEstadoAlerta(empresa) {
  console.log("Acessei dashboardModel")
  var query = `SELECT 
    COUNT(DISTINCT m.id) AS quantidade_maquinas_com_alerta
  FROM 
    maquina m
  JOIN 
    alertas al ON m.id = al.fk_maquina
  WHERE 
    al.data_hora >= DATEADD(SECOND, -5, GETDATE())
    AND al.criticidade = 'Alerta'
    AND m.fk_empresa = ${empresa};`;
  return database.executar(query);
}

function maquinasComProblemasDeRede(empresa) {
  console.log("Acessei dashboardModel")
  var query = `SELECT 
    COUNT(DISTINCT m.id) AS quantidade_maquinas_com_alerta_rede
  FROM 
    maquina m
  JOIN 
    alertas al ON m.id = al.fk_maquina
  WHERE 
    al.componente = 'Rede'
    AND m.fk_empresa = ${empresa}
    AND al.data_hora >= DATEADD(SECOND, -5, GETDATE());`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function maquinasComPoucoEspaco(empresa) {
  console.log("Acessei dashboardModel")
  var query = `
    SELECT COUNT(DISTINCT m.id) AS maquinas_com_alerta_disco
    FROM 
        maquina m
    JOIN 
        (SELECT 
             mon1.fk_maquina, 
             MAX(mon1.data_hora) AS ultima_data_hora 
         FROM 
             monitoramento mon1 
         GROUP BY 
             mon1.fk_maquina
        ) ult_mon ON m.id = ult_mon.fk_maquina
    JOIN 
        monitoramento mon ON mon.fk_maquina = ult_mon.fk_maquina AND mon.data_hora = ult_mon.ultima_data_hora
    JOIN 
        alertas al ON m.id = al.fk_maquina AND al.componente = 'Disco'
    WHERE 
        al.data_hora = (SELECT MAX(al2.data_hora) 
                        FROM alertas al2 
                        WHERE al2.fk_maquina = m.id 
                          AND al2.componente = 'Disco')
        AND mon.data_hora >= DATEADD(MINUTE, -0.05, GETDATE())
        AND m.fk_empresa = ${empresa};
  `;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function maquinasComPoucaRam(empresa) {
  console.log("Acessei dashboardModel")
  var query = `SELECT COUNT(DISTINCT m.id) AS maquinas_com_alerta_ram
  FROM 
      maquina m
  JOIN 
      (SELECT 
           mon1.fk_maquina, 
           MAX(mon1.data_hora) AS ultima_data_hora 
       FROM 
           monitoramento mon1 
       GROUP BY 
           mon1.fk_maquina
      ) ult_mon ON m.id = ult_mon.fk_maquina
  JOIN 
      monitoramento mon ON mon.fk_maquina = ult_mon.fk_maquina AND mon.data_hora = ult_mon.ultima_data_hora
  JOIN 
      alertas al ON m.id = al.fk_maquina AND al.componente = 'Ram'
  WHERE 
      al.data_hora = (SELECT MAX(al2.data_hora) 
                      FROM alertas al2 
                      WHERE al2.fk_maquina = m.id 
                        AND al2.componente = 'Ram')

      AND m.fk_empresa = ${empresa}
      AND m.fk_empresa = ${empresa} AND al.data_hora >= DATEADD(SECOND, -10, GETDATE());
  `;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function listaDeMaquinasComPoucoEspaco(empresa) {
  console.log("Acessei dashboardModel")
  var query = `SELECT 
    DISTINCT m.id AS maquina_id,
    m.codigoAcesso,
    m.modelo,
    m.sistemaOperacional,
    m.fabricante,
    m.NumeroSerieProcessador,
    m.ramTotal,
    m.qtdDisco,
    m.discoTotal,
    m.hostname,
    mon.status_maquina,
    p.nome AS nome_parametro
  FROM 
    maquina m
  JOIN 
    alertas al ON m.id = al.fk_maquina
  JOIN
    monitoramento mon ON m.id = mon.fk_maquina AND al.data_hora >= mon.data_hora
  JOIN
    parametros p ON m.fk_parametros = p.id
  WHERE 
    al.componente = 'Disco'
    AND m.fk_empresa = ${empresa} AND al.data_hora >= DATEADD(SECOND, -5, GETDATE());
  `;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function listaDeMaquinasComPoucaRam(empresa) {
  console.log("Acessei dashboardModel")
  var query = `SELECT 
    DISTINCT m.id AS maquina_id,
    m.codigoAcesso,
    m.modelo,
    m.sistemaOperacional,
    m.fabricante,
    m.NumeroSerieProcessador,
    m.ramTotal,
    m.qtdDisco,
    m.discoTotal,
    m.hostname,
    mon.status_maquina,
    p.nome AS nome_parametro
  FROM 
    maquina m
  JOIN 
    alertas al ON m.id = al.fk_maquina
  JOIN
    monitoramento mon ON m.id = mon.fk_maquina AND al.data_hora >= mon.data_hora
  JOIN
    parametros p ON m.fk_parametros = p.id
  WHERE 
    al.componente = 'RAM'
    AND m.fk_empresa = ${empresa}
    AND al.data_hora >= DATEADD(SECOND, -5, GETDATE());
  `;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function listaDeMaquinasProblemaRede(empresa) {
  console.log("Acessei dashboardModel")
  var query = `SELECT 
    DISTINCT m.id AS maquina_id,
    m.codigoAcesso,
    m.modelo,
    m.sistemaOperacional,
    m.fabricante,
    m.NumeroSerieProcessador,
    m.ramTotal,
    m.qtdDisco,
    m.discoTotal,
    m.hostname,
    mon.status_maquina,
    p.nome AS nome_parametro
  FROM 
    maquina m
  JOIN 
    alertas al ON m.id = al.fk_maquina
  JOIN
    monitoramento mon ON m.id = mon.fk_maquina AND al.data_hora >= mon.data_hora
  JOIN
    parametros p ON m.fk_parametros = p.id
  WHERE 
    al.componente = 'Rede'
    AND m.fk_empresa = ${empresa}
    AND al.data_hora >= DATEADD(SECOND, -5, GETDATE());
  `;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function listaDeAlertas(empresa) {
  console.log("Acessei dashboardModel")
  var query = ` SELECT 
    m.id AS idMaquina, 
    m.modelo, 
    m.NumeroSerieProcessador AS numSerie, 
    SUM(CASE WHEN a.componente = 'CPU' THEN 1 ELSE 0 END) AS alertasCPU,
    SUM(CASE WHEN a.componente = 'RAM' THEN 1 ELSE 0 END) AS alertasRAM,
    SUM(CASE WHEN a.componente = 'DISCO' THEN 1 ELSE 0 END) AS alertasDISCO,
    SUM(CASE WHEN a.componente = 'REDE' THEN 1 ELSE 0 END) AS alertasREDE
  FROM 
    maquina m
  LEFT JOIN 
    alertas a ON m.id = a.fk_maquina
  WHERE 
    m.fk_empresa = ${empresa}
  GROUP BY 
    m.id, 
    m.modelo, 
    m.NumeroSerieProcessador;
  `;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

//dash especifica

function informacoesAnalytics(empresa, idMaquinaSelecionada) {
  console.log("Acessei dashboardModel", idMaquinaSelecionada)
  var query = `SELECT 
    maquina.id AS idMaquina,
    maquina.modelo,
    parametros.nome,
    parametros.alertaCPU,
    parametros.criticoCPU,
    parametros.alertaDISCO,
    parametros.criticoDISCO,
    parametros.alertaRAM,
    parametros.criticoRAM
  FROM 
    maquina
  JOIN 
    parametros 
  ON 
    maquina.fk_parametros = parametros.id
  WHERE 
    maquina.fk_empresa = ${empresa}
    AND maquina.id = ${idMaquinaSelecionada};
  `;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function dadosAtual(idMaquinaSelecionada) {
  console.log("Acessei dashboardModel", idMaquinaSelecionada)
  var query = `SELECT monitoramento.*, maquina.hostname
  FROM monitoramento
  JOIN maquina ON monitoramento.fk_maquina = maquina.id
  WHERE monitoramento.fk_maquina = ${idMaquinaSelecionada}
  ORDER BY monitoramento.data_hora DESC
  OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY;
  `;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

module.exports = { 
  listaDeMaquinasComPoucoEspaco,
    maquinasComProblemas,
    listaDeMaquinasComPoucaRam,
    totalDeMaquinas,
    dadosAtual,
    listaDeMaquinasProblemaRede,
    maquinasComPoucaRam,
    maquinasComProblemasDeRede,
    maquinasEmpresa,
    componentesEmEstadoCritico,
    listaDeAlertas,
    informacoesAnalytics,
    maquinasComPoucoEspaco,
    componentesEmEstadoAlerta,
    notificacao
};
