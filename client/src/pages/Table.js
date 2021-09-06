import React from 'react';

import MaterialTable from 'material-table';
import Axios from "axios";
import {useState,useEffect} from "react";

export const MysqlTable = () => {

  const [details,setDetails] = useState([]);
  //const [data, setData] = useState([]);  
  useEffect(() => {    
                const getDetails = async () => { 
                  const result = await Axios('http://localhost:8000/retrieve'); 
                  setDetails(result.data);
                } 
                getDetails();  
                console.log(details);    
              },[]);
   
              
const columns = [

      {title:'Rdbms',field:'rdbms'},
      {title:'InstanceName',field:'instance_name'},
      {title:'Port',field:'port'},
      {title:'DbName',field:'db_name'},
      {title:'Status',field:'status'},
      {title:'Distribution',field:'distribution'},
      {title:'Domain',field:'domain'},
      {title:'Environment',field:'environment'},
      {title:'Version',field:'version'},
      {title:'Ha_role',field:'ha_role'},
      {title:'DB_size',field:'db_size'},
      {title:'DbReplicationType',field:'db_replication_type'},
      {title:'DbaSme',field:'dba_sme'},
      {title:'SnGroup',field:'sn_group'},
      {title:'Compliance',field:'compliance'},
      {title:'Comments',field:'comments'},
      {title:'DbDfo',field:'db_dfo'},
      {title:'AppName',field:'app_name'},
      {title:'HostName',field:'host_name'},
  ]

 

 const deleteDetail = (id) => {
    Axios.delete(`http://localhost:8000/deleteMysql/${id}`).then((response) => {
      //setDetails(response.data)
      getDetails();
    });
    
  };


  const getDetails = () => {
      Axios.get("http://localhost:8000/retrieve").then((response) => {
        setDetails(response.data)
      })
    }

   // window.onload = getDetails(); 
  //window.addEventListener("load", getDetails); 
 /*  componentDidMount=()=>{
    Axios.get("http://localhost:8000/retrieve").then(
        response => {
            console.log(response)
            this.setDetails({details:response.data.data})
        }
    )
    .catch(error => {
        console.log(error)
    })
    
}*/


  
  return (
   
      <>
     
          <MaterialTable title="Sample data"
          data = {details}
          //data={data}
          columns = {columns}
          options = {{
              filtering: true,
              exportButton: true,
              selection: true,
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
                  viewColumns:true,
              actionsColumnIndex: 0, addRowPosition: "first"
          }}
          

          editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...details, newRow ]
            Axios.post('http://localhost:8000/createMysql',{
              rdbms: newRow.rdbms,
              instance_name: newRow.instance_name,
              port: newRow.port,
              db_name: newRow.db_name,
              status: newRow.status,
              distribution: newRow.distribution,
              domain: newRow.domain,
              environment: newRow.environment,
              version: newRow.version,
              ha_role: newRow.ha_role,
              db_size: newRow.db_size,
              db_replication_type: newRow.db_replication_type,
              dba_sme: newRow.dba_sme,
              sn_group: newRow.sn_group,
              compliance: newRow.compliance,
              comments: newRow.comments,
              db_dfo: newRow.db_dfo,
              app_name: newRow.app_name,
              host_name: newRow.host_name,
          })
          setTimeout(() => {
              setDetails(updatedRows)
              getDetails()
              resolve()
            }, 1000)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const id = selectedRow.id;
            deleteDetail(id);
            setTimeout(() => {
              resolve()
            }, 1000)
          }),

          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...details]
            updatedRows[index]=updatedRow
            console.log(oldRow)
            Axios.put('http://localhost:8000/updateMysql', { 
                rdbms: updatedRow.rdbms,
                instance_name: updatedRow.instance_name,
                port: updatedRow.port,
                db_name: updatedRow.db_name,
                status: updatedRow.status,
                distribution: updatedRow.distribution,
                domain: updatedRow.domain,
                environment: updatedRow.environment,
                version: updatedRow.version,
                ha_role: updatedRow.ha_role,
                db_size: updatedRow.db_size,
                db_replication_type: updatedRow.db_replication_type,
                dba_sme: updatedRow.dba_sme,
                sn_group: updatedRow.sn_group,
                compliance: updatedRow.compliance,
                comments: updatedRow.comments,
                db_dfo: updatedRow.db_dfo,
                app_name: updatedRow.app_name,
                host_name: updatedRow.host_name, 
                id: oldRow.id
              })
            setTimeout(() => {
              setDetails(updatedRows)
              resolve()
            }, 1000)
          })

    
    
            }}
          
          />
      </>
  )
}



export const MSsqlTable = () => {

  const columns = [
    {title:'Rdbms',field:'rdbms'},
    {title:'SqlVirtualName',field:'sql_virtual_name'},
    {title:'InstanceName',field:'instance_name'},
    {title:'Port',field:'port'},
    {title:'DbName',field:'db_name'},
    {title:'Status',field:'status'},
    {title:'Domain',field:'domain'},
    {title:'Environment',field:'environment'},
    {title:'Version',field:'version'},
    {title:'Ha_role',field:'ha_role'},
    {title:'DB_size',field:'db_size'},
    {title:'DbReplicationType',field:'db_replication_type'},
    {title:'DbaSme',field:'dba_sme'},
    {title:'SnGroup',field:'sn_group'},
    {title:'Compliance',field:'compliance'},
    {title:'Comments',field:'comments'},
    {title:'DbDfo',field:'db_dfo'},
    {title:'AppName',field:'app_name'},
    {title:'HostName',field:'host_name'},
]

    const [details,setDetails] = useState([]);
    useEffect(() => {    
      const getDetails = async () => { 
        const result = await Axios('http://localhost:8000/retrieveMssql'); 
        setDetails(result.data);
      } 
      getDetails();  
      console.log(details);    
    },[]);

    const deleteDetail = (id) => {
      Axios.delete(`http://localhost:8000/deleteMssql/${id}`).then((response) => {
        //setDetails(response.data)
        getDetails();
      });
    };
    const getDetails = () => {
        Axios.get("http://localhost:8000/retrieveMssql").then((response) => {
          setDetails(response.data)
          console.log(response.data)
        })
      }

     // window.onload = getDetails();  
     window.addEventListener("load", getDetails); 
   
    

    return (
        <div> 
            <MaterialTable title="DB_Inv_Mssql"
            data = {details}
            columns = {columns}
            options = {{ filtering: true,
              exportButton: true,
              selection: true,
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
              actionsColumnIndex: 0, addRowPosition: "first"
             
          }}
          editable={{
            onRowAdd: (newRow) => new Promise((resolve, reject) => {
              const updatedRows = [...details, newRow ]
              Axios.post('http://localhost:8000/createMssql',{
                rdbms: newRow.rdbms,
                sql_virtual_name: newRow.sql_virtual_name,
                instance_name: newRow.instance_name,
                port: newRow.port,
                db_name: newRow.db_name,
                status: newRow.status,
                domain: newRow.domain,
                environment: newRow.environment,
                version: newRow.version,
                ha_role: newRow.ha_role,
                db_size: newRow.db_size,
                db_replication_type: newRow.db_replication_type,
                dba_sme: newRow.dba_sme,
                sn_group: newRow.sn_group,
                compliance: newRow.compliance,
                comments: newRow.comments,
                db_dfo: newRow.db_dfo,
                app_name: newRow.app_name,
                host_name: newRow.host_name,
            })
            setTimeout(() => {
                setDetails(updatedRows)
                getDetails()
                resolve()
              }, 1000)
            }),

            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              const id = selectedRow.id;
              deleteDetail(id);
              setTimeout(() => {
                resolve()
              }, 1000)
            }),


            onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
              const index=oldRow.tableData.id;
              const updatedRows=[...details]
              updatedRows[index]=updatedRow
              Axios.put(`http://localhost:8000/updateMssql`, { 
                
                rdbms: updatedRow.rdbms,
                sql_virtual_name: updatedRow.sql_virtual_name,
                instance_name: updatedRow.instance_name,
                port: updatedRow.port,
                db_name: updatedRow.db_name,
                status: updatedRow.status,
                domain: updatedRow.domain,
                environment: updatedRow.environment,
                version: updatedRow.version,
                ha_role: updatedRow.ha_role,
                db_size: updatedRow.db_size,
                db_replication_type: updatedRow.db_replication_type,
                dba_sme: updatedRow.dba_sme,
                sn_group: updatedRow.sn_group,
                compliance: updatedRow.compliance,
                comments: updatedRow.comments,
                db_dfo: updatedRow.db_dfo,
                app_name: updatedRow.app_name,
                host_name: updatedRow.host_name, 
                id: oldRow.id
              })
              setTimeout(() => {
                setDetails(updatedRows)
                resolve()
              }, 1000)
            })
  
          }}
         
            />
        </div>
    )
}






export const MongoTable = () => {

  const columns = [
  
    {title:'Rdbms',field:'rdbms'},
    {title:'InstanceName',field:'instance_name'},
    {title:'Port',field:'port'},
    {title:'DbName',field:'db_name'},
    {title:'Status',field:'status'},
    {title:'Distribution',field:'distribution'},
    {title:'Domain',field:'domain'},
    {title:'Environment',field:'environment'},
    {title:'Version',field:'version'},
    {title:'Ha_role',field:'ha_role'},
    {title:'DB_size',field:'db_size'},
    {title:'DbReplicationType',field:'db_replication_type'},
    {title:'DbaSme',field:'dba_sme'},
    {title:'SnGroup',field:'sn_group'},
    {title:'Compliance',field:'compliance'},
    {title:'Comments',field:'comments'},
    {title:'Ops Manager',field:'ops_manager'},
    {title:'DbDfo',field:'db_dfo'},
    {title:'AppName',field:'app_name'},
    {title:'HostName',field:'host_name'},
]

    const [details,setDetails] = useState([]);
    useEffect(() => {    
      const getDetails = async () => { 
        const result = await Axios('http://localhost:8000/retrieveMongo'); 
        setDetails(result.data);
      } 
      getDetails();  
      console.log(details);    
    },[]);
    const deleteDetail = (id) => {
      Axios.delete(`http://localhost:8000/deleteMongo/${id}`).then((response) => {
        //setDetails(response.data)
        getDetails();
      });
      
    };
    
    const getDetails = () => {
        Axios.get("http://localhost:8000/retrieveMongo").then((response) => {
          setDetails(response.data)
          console.log(response.data)
        })
      }

      
    //window.onload = getDetails();  
   window.addEventListener("load", getDetails);  

    return (
        <div> 
            <MaterialTable title="DB_Inv_Mongo"
            data = {details}
          columns = {columns}
          options = {{
              filtering: true,
              exportButton: true,
              selection: true,
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
              actionsColumnIndex: 0, addRowPosition: "first"
          }}
          editable={{
            onRowAdd: (newRow) => new Promise((resolve, reject) => {
              const updatedRows = [...details, newRow ]
              console.log(newRow)
              Axios.post('http://localhost:8000/createMongo',{
                rdbms: newRow.rdbms,
                instance_name: newRow.instance_name,
                port: newRow.port,
                db_name: newRow.db_name,
                status: newRow.status,
                distribution: newRow.distribution,
                domain: newRow.domain,
                environment: newRow.environment,
                version: newRow.version,
                ha_role: newRow.ha_role,
                db_size: newRow.db_size,
                db_replication_type: newRow.db_replication_type,
                dba_sme: newRow.dba_sme,
                sn_group: newRow.sn_group,
                compliance: newRow.compliance,
                comments: newRow.comments,
                ops_manager: newRow.ops_manager,
                db_dfo: newRow.db_dfo,
                app_name: newRow.app_name,
                host_name: newRow.host_name,
            })
            setTimeout(() => {
                setDetails(updatedRows)
                getDetails()
                resolve()
              }, 1000)
              
            }),

            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              const id = selectedRow.id;
              deleteDetail(id);
              setTimeout(() => {
                resolve()
              }, 1000)
            }),


            onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
              const index=oldRow.tableData.id;
              const updatedRows=[...details]
              updatedRows[index]=updatedRow
              console.log(oldRow)
              Axios.put(`http://localhost:8000/updateMongo`, { 
                rdbms: updatedRow.rdbms,
                instance_name: updatedRow.instance_name,
                port: updatedRow.port,
                db_name: updatedRow.db_name,
                status: updatedRow.status,
                distribution: updatedRow.distribution,
                domain: updatedRow.domain,
                environment: updatedRow.environment,
                version: updatedRow.version,
                ha_role: updatedRow.ha_role,
                db_size: updatedRow.db_size,
                db_replication_type: updatedRow.db_replication_type,
                dba_sme: updatedRow.dba_sme,
                sn_group: updatedRow.sn_group,
                compliance: updatedRow.compliance,
                comments: updatedRow.comments,
                ops_manager: updatedRow.ops_manager,
                db_dfo: updatedRow.db_dfo,
                app_name: updatedRow.app_name,
                host_name: updatedRow.host_name, 
                id: oldRow.id
              })
              setTimeout(() => {
                setDetails(updatedRows)
                resolve()
              }, 1000)
            })
  
          }}
         
            />
        </div>
    )
}



export const OracleTable = () => {

  const columns = [
    
    {title:'InstanceName',field:'instance_name'},
    {title:'DbName',field:'db_name'},
    {title:'Rdbms',field:'rdbms'},
    {title:'Status',field:'status'},
    {title:'Domain',field:'domain'},
    {title:'Environment',field:'environment'},
    {title:'Version',field:'version'},
    {title:'Ha_role',field:'ha_role'},
    {title:'DbDfo',field:'db_dfo'},
    {title:'OracleHome',field:'oracle_home'},
    {title:'PortNumber',field:'port_num'},
    {title:'DbSize',field:'db_size'},
    {title:'DbaSme',field:'dba_sme'},
    {title:'SnGroup',field:'sn_group'},
    {title:'Compliance',field:'compliance'},
    {title:'Comments',field:'comments'},
    {title:'AppName',field:'app_name'},
    {title:'HostName',field:'host_name'},
]

    const [details,setDetails] = useState([]);
    useEffect(() => {    
      const getDetails = async () => { 
        const result = await Axios('http://localhost:8000/retrieveOracle'); 
        setDetails(result.data);
      } 
      getDetails();  
      console.log(details);    
    },[]);
    
    const getDetails = () => {
        Axios.get("http://localhost:8000/retrieveOracle").then((response) => {
          setDetails(response.data)
        })
      }

      const deleteDetail = (id) => {
        Axios.delete(`http://localhost:8000/deleteOracle/${id}`).then((response) => {
          //setDetails(response.data)
          getDetails();
        });
        
      };
   // window.onload = getDetails(); 
   window.addEventListener("load", getDetails);    
    return (
        <div> 
            <MaterialTable title="DB_Inv_Oracle"
            data = {details}
          columns = {columns}
          options = {{
              filtering: true,
              exportButton: true,
              selection: true,
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
              actionsColumnIndex: 0, addRowPosition: "first"
          }}
          editable={{
            onRowAdd: (newRow) => new Promise((resolve, reject) => {
              const updatedRows = [...details, newRow ]
              console.log(newRow)
              Axios.post('http://localhost:8000/createOracle',{
                instance_name:newRow.instance_name,
                db_name:newRow.db_name,
                rdbms:newRow.rdbms,
                status:newRow.status,
                domain:newRow.domain,
                environment:newRow.environment,
                version:newRow.version,
                ha_role:newRow.ha_role,
                db_dfo:newRow.db_dfo,
                oracle_home:newRow.oracle_home,
                port_num:newRow.port_num,
                db_size:newRow.db_size,
                dba_sme:newRow.dba_sme,
                sn_group:newRow.sn_group,
                compliance:newRow.compliance,
                comments:newRow.comments,
                app_name:newRow.app_name,
                host_name:newRow.host_name,
            })
            setTimeout(() => {
                setDetails(updatedRows)
                getDetails()
                resolve()
              }, 1000)
            }),

            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              const id = selectedRow.id;
              deleteDetail(id);
              setTimeout(() => {
                resolve()
              }, 1000)
            }),


            onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
              const index=oldRow.tableData.id;
              const updatedRows=[...details]
              updatedRows[index]=updatedRow
              Axios.put(`http://localhost:8000/updateOracle`, { 
                id: oldRow.id,
                instance_name: updatedRow.instance_name,
                db_name: updatedRow.db_name,
                rdbms: updatedRow.rdbms,
                status: updatedRow.status,
                domain: updatedRow.domain,
                environment: updatedRow.environment,
                version: updatedRow.version,
                ha_role: updatedRow.ha_role,
                db_dfo: updatedRow.db_dfo,
                oracle_home: updatedRow.oracle_home,
                port_num: updatedRow.port_num,
                db_size: updatedRow.db_size,
                dba_sme: updatedRow.dba_sme,
                sn_group: updatedRow.sn_group,
                compliance: updatedRow.compliance,
                comments: updatedRow.comments,
                app_name: updatedRow.app_name,
                host_name: updatedRow.host_name,
              })
              setTimeout(() => {
                setDetails(updatedRows)
                resolve()
              }, 1000)
            })
  
          }}
          
            />
        </div>
    )
}


export const PostgresTable = () => {

  const columns = [
    {title:'Rdbms',field:'rdbms'},
    {title:'InstanceName',field:'instance_name'},
    {title:'Port',field:'port'},
    {title:'DbName',field:'db_name'},
    {title:'Status',field:'status'},
    {title:'Domain',field:'domain'},
    {title:'Environment',field:'environment'},
    {title:'Version',field:'version'},
    {title:'Ha_role',field:'ha_role'},
    {title:'DbSize',field:'db_size'},
    {title:'DbReplication',field:'db_replication_type'},
    {title:'DbaSme',field:'dba_sme'},
    {title:'SnGroup',field:'sn_group'},
    {title:'Compliance',field:'compliance'},
    {title:'Comments',field:'comments'},
    {title:'DbDfo',field:'db_dfo'},
    {title:'AppName',field:'app_name'},
    {title:'HostName',field:'host_name'},
    {title:'Distribution',field:'distribution'},
]

    const [details,setDetails] = useState([]);
    useEffect(() => {    
      const getDetails = async () => { 
        const result = await Axios('http://localhost:8000/retrievePostgres'); 
        setDetails(result.data);
      } 
      getDetails();  
      console.log(details);    
    },[]);
    
    const getDetails = () => {
        Axios.get("http://localhost:8000/retrievePostgres").then((response) => {
          setDetails(response.data)
          console.log(response.data)
        })
      }

      const deleteDetail = (id) => {
        
        Axios.delete(`http://localhost:8000/deletePostgres/${id}`).then((response) => {
         // setDetails(response.data)
          getDetails();
        });
        
      };
    //window.onload = getDetails(); 
    window.addEventListener("load", getDetails);  
    return (
        <div> 
            <MaterialTable title="DB_Inv_Postgresql"
            data = {details}
            columns = {columns}
            options = {{
              grouping:true,
              filtering: true,
              exportAllData: true,
              pageSizeOptions:[5,10,20,30,40,50,60],
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
              exportButton: true,
              
              actionsColumnIndex: 0, addRowPosition: "first"
          }}
          editable={{
            onRowAdd: (newRow) => new Promise((resolve, reject) => {
              const updatedRows = [...details, newRow ]
              console.log(newRow)
              Axios.post('http://localhost:8000/createPostgres',{
                rdbms: newRow.rdbms,
                instance_name: newRow.instance_name,
                port: newRow.port,
                db_name: newRow.db_name,
                status: newRow.status,
                domain: newRow.domain,
                environment: newRow.environment,
                version: newRow.version,
                ha_role: newRow.ha_role,
                db_size: newRow.db_size,
                db_replication_type: newRow.db_replication_type,
                dba_sme: newRow.dba_sme,
                sn_group: newRow.sn_group,
                compliance: newRow.compliance,
                comments: newRow.comments,
                db_dfo: newRow.db_dfo,
                app_name: newRow.app_name,
                host_name: newRow.host_name,
                distribution: newRow.distribution,
            })
            setTimeout(() => {
                setDetails(updatedRows)
                getDetails()
                resolve()
              }, 1000)
              
            }),

            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              const id = selectedRow.id;
              deleteDetail(id);
              setTimeout(() => {
                resolve()
              }, 1000)
            }),


            onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
              const index=oldRow.tableData.id;
              const updatedRows=[...details]
              updatedRows[index]=updatedRow
              Axios.put(`http://localhost:8000/updatePostgres`, {  
                id: oldRow.id,
                rdbms: updatedRow.rdbms,
                instance_name: updatedRow.instance_name,
                port: updatedRow.port,
                db_name: updatedRow.db_name,
                status: updatedRow.status,
                domain: updatedRow.domain,
                environment: updatedRow.environment,
                version: updatedRow.version,
                ha_role: updatedRow.ha_role,
                db_size: updatedRow.db_size,
                db_replication_type: updatedRow.db_replication_type,
                dba_sme: updatedRow.dba_sme,
                sn_group: updatedRow.sn_group,
                compliance: updatedRow.compliance,
                comments: updatedRow.comments,
                db_dfo: updatedRow.db_dfo,
                app_name: updatedRow.app_name,
                host_name: updatedRow.host_name,
                distribution: updatedRow.distribution,
              })
              setTimeout(() => {
                setDetails(updatedRows)
                resolve()
              }, 1000)
            })
  
          }}
        
            />
        </div>
    )
}



export const AppTable = () => {

  const columns = [
    {title:'AppName',field:'app_name'},
    {title:'AppKey',field:'app_key'},
    {title:'CurrentState',field:'current_state'},
    {title:'ReportingName',field:'reporting_name'},
    {title:'BriefFunc',field:'brief_func'},
    {title:'ApmOwner',field:'apm_owner'},
    {title:'AppType',field:'app_type'},
    {title:'AppTech',field:'app_tech'},
    {title:'DbTech',field:'db_tech'},
    {title:'NoUsers',field:'no_users'},
    {title:'Availability',field:'availability'},
    {title:'OperImpact',field:'oper_impact'},
    {title:'RevenueImpact',field:'revenue_impact'},
    {title:'StoresOrCustImpact',field:'stores_or_custimpact'},
   
]

    const [details,setDetails] = useState([]);
    useEffect(() => {    
      const getDetails = async () => { 
        const result = await Axios('http://localhost:8000/retrieveApp'); 
        setDetails(result.data);
      } 
      getDetails();  
      console.log(details);    
    },[]);
    
    const getDetails = () => {
        Axios.get("http://localhost:8000/retrieveApp").then((response) => {
          setDetails(response.data)
          console.log(response.data)
        })
      }

      const deleteDetail = (app_name) => {
        Axios.delete(`http://localhost:8000/deleteApp/${app_name}`).then((response) => {
          //setDetails(response.data)
          getDetails();
        });
        
      };
   // window.onload = getDetails();  
   window.addEventListener("load", getDetails);   
    return (
        <div> 
            <MaterialTable title="App_Inv"
            data = {details}
            columns = {columns}
         
            options = {{
              filtering: true,
              pageSizeOptions:[5,10,20,30,40,50,60],
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
                         
                exportAllData: true,
              exportButton: true,
             
              addRowPosition: "first",
              grouping:true
          }}
          editable={{
            onRowAdd: (newRow) => new Promise((resolve, reject) => {
              const updatedRows = [...details, newRow ]
              Axios.post('http://localhost:8000/createApp',{
                app_name:newRow.app_name,
                app_key: newRow.app_key,
                current_state: newRow.current_state,
                reporting_name: newRow.reporting_name,
                brief_func: newRow.brief_func,
                apm_owner: newRow.apm_owner,
                app_type: newRow.app_type,
                app_tech: newRow.app_tech,
                db_tech: newRow.db_tech,
                no_users: newRow.no_users,
                availability: newRow.availability,
                oper_impact: newRow.oper_impact,
                revenue_impact: newRow.revenue_impact,
                stores_or_custimpact: newRow.stores_or_custimpact
            })
            setTimeout(() => {
                setDetails(updatedRows)
                getDetails()
                resolve()
              }, 1000)
            }),

            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              const app_name = selectedRow.app_name;
              deleteDetail(app_name);
              setTimeout(() => {
                resolve()
              }, 1000)
            }),


            onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
              const index=oldRow.tableData.app_name;
              const updatedRows=[...details]
              updatedRows[index]=updatedRow  //index---
              //console.log(oldRow)
              Axios.put(`http://localhost:8000/updateApp`, { 
                
                app_key: updatedRow.app_key,
                current_state: updatedRow.current_state,
                reporting_name: updatedRow.reporting_name,
                brief_func: updatedRow.brief_func,
                apm_owner: updatedRow.apm_owner,
                app_type: updatedRow.app_type,
                app_tech: updatedRow.app_tech,
                db_tech: updatedRow.db_tech,
                no_users: updatedRow.no_users,
                availability: updatedRow.availability,
                oper_impact: updatedRow.oper_impact,
                revenue_impact: updatedRow.revenue_impact,
                stores_or_custimpact: updatedRow.stores_or_custimpact,
                app_name:oldRow.app_name
                })
              setTimeout(() => {
                setDetails(updatedRows)
                getDetails() ///---extra
                resolve()
              }, 1000)
            })
  
          }}
         
            />
        </div>
    )
}

