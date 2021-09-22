const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require("cors");

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: "prameela",
    host: "dgphxutldb001.phx.gapinc.dev",
    password: "password",
    database: "dsot_dev",
});

app.get('/retrieve',(req,res) => {
    db.query('SELECT * FROM DB_Inv_Mysql',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})
 

app.post('/createMysql',(req,res) => {
    console.log(req.body)
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const distribution = req.body.distribution
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name

    db.query('INSERT INTO DB_Inv_Mysql(rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Insererted..")
        }
    });

});

app.delete("/deleteMysql/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    db.query("DELETE FROM DB_Inv_Mysql WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.put("/updateMysql",(req,res) => {
    console.log(req.body)
    const id = req.body.id
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const distribution = req.body.distribution
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name

    db.query('UPDATE DB_Inv_Mysql SET rdbms=?,instance_name=?,port=?,db_name=?,status=?,distribution=?,domain=?,environment=?,version=?,ha_role=?,db_size=?,db_replication_type=?,dba_sme=?,sn_group=?,compliance=?,comments=?,db_dfo=?,app_name=?,host_name=? where id = ? ',[rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name,id],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
});




app.get('/retrieveMssql',(req,res) => {
    db.query('SELECT * FROM DB_Inv_Mssql',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})
app.post('/createMssql',(req,res) => {
    console.log(req.body)
    const rdbms = req.body.rdbms
    const sql_virtual_name = req.body.sql_virtual_name
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name

    db.query('INSERT INTO DB_Inv_Mssql(rdbms,sql_virtual_name,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [rdbms,sql_virtual_name,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Inserted..")
        }
    });

});

app.delete("/deleteMssql/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM DB_Inv_Mssql WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.put("/updateMssql",(req,res) => {
   console.log(req.body)
   const id = req.body.id
    const rdbms = req.body.rdbms
    const sql_virtual_name = req.body.sql_virtual_name
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name
    
    db.query(`UPDATE DB_Inv_Mssql SET rdbms=?,sql_virtual_name=?,instance_name=?,port=?,db_name=?,status=?,domain=?,environment=?,version=?,ha_role=?,db_size=?,db_replication_type=?,dba_sme=?,sn_group=?,compliance=?,comments=?,db_dfo=?,app_name=?,host_name=? where id = ? `,[rdbms,sql_virtual_name,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name,id],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})


app.get('/retrieveMongo',(req,res) => {
    db.query('SELECT * FROM DB_Inv_Mongo',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

app.post('/createMongo',(req,res) => {
    console.log(req.body)
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const distribution = req.body.distribution
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const ops_manager = req.body.ops_manager
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name

    db.query('INSERT INTO DB_Inv_Mongo(rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,ops_manager,db_dfo,app_name,host_name) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,ops_manager,db_dfo,app_name,host_name], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Inserted..")
        }
    });

});

app.delete("/deleteMongo/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    db.query("DELETE FROM DB_Inv_Mongo WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.put("/updateMongo",(req,res) => {
   console.log(req.body)
   const id = req.body.id;
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const distribution = req.body.distribution
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const ops_manager = req.body.ops_manager
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name
    
    db.query(`UPDATE DB_Inv_Mongo SET rdbms=?,instance_name=?,port=?,db_name=?,status=?,distribution=?,domain=?,environment=?,version=?,ha_role=?,db_size=?,db_replication_type=?,dba_sme=?,sn_group=?,compliance=?,comments=?,ops_manager=?,db_dfo=?,app_name=?,host_name=? where id = ? `,[rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,ops_manager,db_dfo,app_name,host_name,id],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})



app.get('/retrieveOracle',(req,res) => {
    db.query('SELECT * FROM DB_Inv_Oracle',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})
app.post('/createOracle',(req,res) => {
    const instance_name = req.body.instance_name
    const db_name = req.body.db_name
    const rdbms = req.body.rdbms
    const status = req.body.status
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_dfo = req.body.db_dfo
    const oracle_home = req.body.oracle_home
    const port_num = req.body.port_num
    const db_size = req.body.db_size
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const app_name = req.body.app_name
    const host_name = req.body.host_name

    db.query('INSERT INTO DB_Inv_Oracle(instance_name,db_name,rdbms,status,domain,environment,version,ha_role,db_dfo,oracle_home,port_num,db_size,dba_sme,sn_group,compliance,comments,app_name,host_name) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [instance_name,db_name,rdbms,status,domain,environment,version,ha_role,db_dfo,oracle_home,port_num,db_size,dba_sme,sn_group,compliance,comments,app_name,host_name], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Inserted..")
        }
    });

});

app.delete("/deleteOracle/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM DB_Inv_Oracle WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


app.put("/updateOracle",(req,res) => {
    const id = req.body.id;
    const instance_name = req.body.instance_name
    const db_name = req.body.db_name
    const rdbms = req.body.rdbms
    const status = req.body.status
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_dfo = req.body.db_dfo
    const oracle_home = req.body.oracle_home
    const port_num = req.body.port_num
    const db_size = req.body.db_size
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const app_name = req.body.app_name
    const host_name = req.body.host_name
    
    db.query(`UPDATE DB_Inv_Oracle SET instance_name=?,db_name=?,rdbms=?,status=?,domain=?,environment=?,version=?,ha_role=?,db_dfo=?,oracle_home=?,port_num=?,db_size=?,dba_sme=?,sn_group=?,compliance=?,comments=?,app_name=?,host_name=? where id = ? `,[instance_name,db_name,rdbms,status,domain,environment,version,ha_role,db_dfo,oracle_home,port_num,db_size,dba_sme,sn_group,compliance,comments,app_name,host_name,id],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})



app.post('/createPostgres',(req,res) => {
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name
    const distribution = req.body.distribution

    db.query('INSERT INTO DB_Inv_Postgresql(rdbms,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name,distribution) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [rdbms,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name,distribution], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Inserted..")
        }
    });

});

app.get('/retrievePostgres',(req,res) => {
    db.query('SELECT * FROM DB_Inv_Postgresql',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

app.put("/updatePostgres",(req,res) => {
    const id = req.body.id;
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name
    const distribution = req.body.distribution
    
    db.query(`UPDATE DB_Inv_Postgresql SET rdbms=?,instance_name=?,port=?,db_name=?,status=?,domain=?,environment=?,version=?,ha_role=?,db_size=?,db_replication_type=?,dba_sme=?,sn_group=?,compliance=?,comments=?,db_dfo=?,app_name=?,host_name=?,distribution=? where id = ? `,[rdbms,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name,distribution,id],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})

app.delete("/deletePostgres/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM DB_Inv_Postgresql WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  app.post('/createApp',(req,res) => {
    console.log(req.body)
	const app_name=req.body.app_name
    const app_key = req.body.app_key
    const current_state = req.body.current_state
    const reporting_name = req.body.reporting_name
    const brief_func = req.body.brief_func
    const apm_owner = req.body.apm_owner
    const app_type = req.body.app_type
    const app_tech = req.body.app_tech
    const db_tech = req.body.db_tech
    const no_users = req.body.no_users
    const availability = req.body.availability
    const oper_impact = req.body.oper_impact
    const revenue_impact = req.body.revenue_impact
    const stores_or_custimpact = req.body.stores_or_custimpact
    

    db.query('INSERT INTO App_Inv(app_name,app_key,current_state,reporting_name,brief_func,apm_owner,app_type,app_tech,db_tech,no_users,availability,oper_impact,revenue_impact,stores_or_custimpact) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [app_name,app_key,current_state,reporting_name,brief_func,apm_owner,app_type,app_tech,db_tech,no_users,availability,oper_impact,revenue_impact,stores_or_custimpact], 
    (err, result) => {
        if(err){
            console.log(err)
    
        }else{
            res.send("Insererted..")
        }
    });

});

app.get('/retrieveApp',(req,res) => {
    db.query('SELECT * FROM App_Inv',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

app.put("/updateApp",(req,res) => {
    console.log(req.body)
    const oldapp_name=req.body.oldapp_name
    const newapp_name=req.body.newapp_name
    const app_key = req.body.app_key
    const current_state = req.body.current_state
    const reporting_name = req.body.reporting_name
    const brief_func = req.body.brief_func
    const apm_owner = req.body.apm_owner
    const app_type = req.body.app_type
    const app_tech = req.body.app_tech
    const db_tech = req.body.db_tech
    const no_users = req.body.no_users
    const availability = req.body.availability
    const oper_impact = req.body.oper_impact
    const revenue_impact = req.body.revenue_impact
    const stores_or_custimpact = req.body.stores_or_custimpact
    db.query(`UPDATE App_Inv SET app_name=?,app_key=?,current_state=?,reporting_name=?,brief_func=?,apm_owner=?,app_type=?,app_tech=?,db_tech=?,no_users=?,availability=?,oper_impact=?,revenue_impact=?,stores_or_custimpact=? where app_name = ? `,[newapp_name,app_key,current_state,reporting_name,brief_func,apm_owner,app_type,app_tech,db_tech,no_users,availability,oper_impact,revenue_impact,stores_or_custimpact,oldapp_name],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})

app.delete("/deleteApp/:app_name", (req, res) => {
    const app_name1 = req.params.app_name;
    //console.log(id)
    db.query("DELETE FROM App_Inv WHERE app_name = ?", app_name1, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


app.listen(8000, () => {
    console.log("Running in 8000")
});