import React from 'react';

import MaterialTable from 'material-table';
import Axios from "axios";
import {useState,useEffect} from "react";
import MyDialog from './MyDialog';
import { Button, TextField, Paper } from "@material-ui/core";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Add as AddIcon } from "@material-ui/icons";

export const MysqlTable = () => {

  const [details,setDetails] = useState([]);
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

    window.addEventListener("load", getDetails);   
    const [isDialogOpen1, setIsDialogOpen1] = useState(false);
   const [isDialogOpen2, setIsDialogOpen2] = useState(false);
   const [dialogid, setDialogid] = useState('');
   const [dialogrdbms, setDialogrdbms] = useState('');
   const [dialoginstance_name, setDialoginstance_name] = useState('');
   const [dialogport, setDialogport] = useState('');
   const [dialogdb_name,setDialogdb_name]=useState('');
   const [dialogstatus,setDialogstatus]=useState('');
   const [dialogdistribution,setDialogdistribution]=useState('');
   const [dialogdomain,setDialogdomain]=useState('');
   const [dialogenvironment,setDialogenvironment]=useState('');
   const [dialogversion,setDialogversion]=useState('');
   const [dialogha_role,setDialogha_role]=useState('');
   const [dialogdb_size,setDialogdb_size]=useState('');
   const [dialogdb_replication_type,setDialogdb_replication_type]=useState('');
   const [dialogdba_sme,setDialogdba_sme]=useState('');
   const [dialogsn_group,setDialogsn_group]=useState('');
   const [dialogcompliance,setDialogcompliance]=useState('');
   const [dialogcomments,setDialogcomments]=useState('');
   const [dialogdb_dfo,setDialogdb_dfo]=useState('');
   const [dialogapp_name,setDialogapp_name]=useState('');
   const [dialoghost_name,setDialoghost_name]=useState('');
   const handleDialogClose1 = event => {
    setIsDialogOpen1(false);
  }

  const handleDialogClose2 = event => {
    setIsDialogOpen2(false);
  }
   const handlerdbms = event => {
    setDialogrdbms(event.target.value);
  }
  const handleinstance_name= event => {
    setDialoginstance_name(event.target.value);
  }
  const handleport = event => {
    setDialogport(event.target.value);
  }
  const handledb_name = event => {
    setDialogdb_name(event.target.value);
  }
  const handlestatus = event => {
    setDialogstatus(event.target.value);
  }
  const handledistribution = event => {
    setDialogdistribution(event.target.value);
  }
  const handledomain = event => {
    setDialogdomain(event.target.value);
  }
  const handleenvironment = event => {
    setDialogenvironment(event.target.value);
  }
  const handleversion = event => {
    setDialogversion(event.target.value);
  }
  const handleha_role = event => {
    setDialogha_role(event.target.value);
  }
  const handledb_size = event => {
    setDialogdb_size(event.target.value);
  }
  const handledb_replication_type= event => {
    setDialogdb_replication_type(event.target.value);
  }
  const handledba_sme= event => {
    setDialogdba_sme(event.target.value);
  }
  const handlesn_group= event => {
    setDialogsn_group(event.target.value);
  }
  const handlecompliance= event => {
    setDialogcompliance(event.target.value);
  }
  const handlecomments= event => {
    setDialogcomments(event.target.value);
  }
  const handledb_dfo= event => {
    setDialogdb_dfo(event.target.value);
  }
  const handleapp_name= event => {
    setDialogapp_name(event.target.value);
  }
  const handlehost_name= event => {
    setDialoghost_name(event.target.value);
  }

  const refreshPage=()=>{
    window.location.reload();
  }
  const handleUpdateRow = event => {
    if(!dialogrdbms||!dialoginstance_name||!dialogport||!dialogdistribution||!dialogdomain||!dialogenvironment||!dialogversion||!dialogsn_group||!dialogapp_name||!dialoghost_name)
    {
      alert("Enter mandatory fields");
      return;
    }
    setDetails(
     // {...details,[ event.app_name]: dialogapp_name ,[event.app_key]:dialogapp_key}
      {...details,[event.target.name]:event.target.value},
     
      );
       Axios.put('http://localhost:8000/updateMysql', { 
                id:dialogid,
                rdbms: dialogrdbms,
                instance_name: dialoginstance_name,
                port: dialogport,
                db_name: dialogdb_name,
                status: dialogstatus,
                distribution: dialogdistribution,
                domain: dialogdomain,
                environment: dialogenvironment,
                version: dialogversion,
                ha_role: dialogha_role,
                db_size: dialogdb_size,
                db_replication_type: dialogdb_replication_type,
                dba_sme: dialogdba_sme,
                sn_group: dialogsn_group,
                compliance: dialogcompliance,
                comments: dialogcomments,
                db_dfo: dialogdb_dfo,
                app_name: dialogapp_name,
                host_name: dialoghost_name, 
              })
              refreshPage();
            }
  const handleAddnewRow=event=>{
    if(!dialogrdbms||!dialoginstance_name||!dialogport||!dialogdistribution||!dialogdomain||!dialogenvironment||!dialogversion||!dialogsn_group||!dialogapp_name||!dialoghost_name)
    {
      alert("Enter mandatory fields");
      return;
    }
    Axios.post('http://localhost:8000/createMysql',{
      
                rdbms: dialogrdbms,
                instance_name: dialoginstance_name,
                port: dialogport,
                db_name: dialogdb_name,
                status: dialogstatus,
                distribution: dialogdistribution,
                domain: dialogdomain,
                environment: dialogenvironment,
                version: dialogversion,
                ha_role: dialogha_role,
                db_size: dialogdb_size,
                db_replication_type: dialogdb_replication_type,
                dba_sme: dialogdba_sme,
                sn_group: dialogsn_group,
                compliance: dialogcompliance,
                comments: dialogcomments,
                db_dfo: dialogdb_dfo,
                app_name: dialogapp_name,
                host_name: dialoghost_name, })
                setDetails(
                  //getDetails(); 
                  // Here you can add the new row to whatever index you want
                  //[{ id: dialogId, app_name: dialogapp_name ,app_key:dialogapp_key}, ...details]
               {...details,[event.target.name]:event.target.value},
              
               );
               refreshPage();
               alert("successfully Added!"); 
  }
  useEffect(() => {
    // Closes dialog after saving
    if (isDialogOpen1) {
      setIsDialogOpen1(false);
    }
    if (isDialogOpen2) {
      setIsDialogOpen2(false);
    }
  }, [details]);
                            
  const initialset=(rowData)=>{
    setDialogid(rowData.id);
    if (!isDialogOpen1) {
      setDialogrdbms(rowData.rdbms);
      setDialoginstance_name(rowData.instance_name);
      setDialogport(rowData.port);
      setDialogdb_name(rowData.db_name);
      setDialogstatus(rowData.status);
      setDialogdistribution(rowData.distribution);
      setDialogdomain(rowData.domain);
      setDialogenvironment(rowData.environment);
      setDialogversion(rowData.version);
      setDialogha_role(rowData.ha_role);
      setDialogdb_size(rowData.db_size);
      setDialogdb_replication_type(rowData.db_replication_type);
      setDialogdba_sme(rowData.dba_sme);
      setDialogsn_group(rowData.sn_group);
      setDialogcompliance(rowData.compliance);
      setDialogcomments(rowData.commnets);
      setDialogdb_dfo(rowData.db_dfo);
      setDialogapp_name(rowData.app_name);
      setDialoghost_name(rowData.host_name);
  
              }
            }
const initialset1=()=>{
setDialogid("-");
if (!isDialogOpen1) {
  setDialogrdbms("-");
  setDialoginstance_name("-");
  setDialogport("-");
  setDialogdb_name("-");
  setDialogstatus("-");
  setDialogdistribution("-");
  setDialogdomain("-");
  setDialogenvironment("-");
  setDialogversion("-");
  setDialogha_role("-");
  setDialogdb_size("-");
  setDialogdb_replication_type("-");
  setDialogdba_sme("-");
  setDialogsn_group("-");
  setDialogcompliance("-");
  setDialogcomments("-");
  setDialogdb_dfo("-");
  setDialogapp_name("-");
  setDialoghost_name("-");

          }
        }
const actions = [
  {
    icon: () => <FaIcons.FaEdit/>,
    tooltip: 'Edit Details',
    //isFreeAction: true,
    onClick: (event, rowData) => {
  
      initialset(rowData);
      
      setIsDialogOpen1(true);
      
    },
  },
  {
    icon: () => <AddIcon />,
    tooltip: 'Add',
    isFreeAction: true,
    onClick: (event, rowData) => {
      initialset1();
      setIsDialogOpen2(true);
    },
  }
];
  return (
   
      <>
     
          <MaterialTable title="Mysql data"
          data = {details}
          columns = {columns}
          actions={actions}
          options = {{
              filtering: true,
              pagesize:10,
              exportButton: true,
              exportAllData: true,
              columnsButton:true,
              grouping:true,
              maxBodyHeight: '500px',
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
                           pageSizeOptions:[10,20,40,60,100],
                  viewColumns:true,
              actionsColumnIndex: 0, addRowPosition: "first"
          }}
          

          editable={{
         /* onRowAdd: (newRow) => new Promise((resolve, reject) => {
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
          }),*/
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const id = selectedRow.id;
            deleteDetail(id);
            setTimeout(() => {
              resolve()
            }, 1000)
          }),

          /*onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
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
*/
    
    
            }}
          
          />
<MyDialog title="Edit Details" isOpen={isDialogOpen1} onClose={handleDialogClose1}>
        <Paper style={{ padding: '2em' }}>
          <div><TextField value={dialogrdbms} onInput={handlerdbms} label="RDBMS"  required/></div>
          <div><TextField value={dialoginstance_name} onInput={handleinstance_name}  label="Instance-Name" required/></div>
          <div><TextField value={dialogport} onInput={handleport} label="Port" required/></div>
          <div><TextField value={dialogdb_name} onInput={handledb_name} label="DB-Name" /></div>
          <div><TextField value={dialogstatus} onInput={handlestatus} label="Status" /></div>
          <div><TextField value={dialogdistribution} onInput={handledistribution} label="Distribution" required /></div>
          <div><TextField value={dialogdomain} onInput={handledomain} label="Domain" required /></div>
          <div><TextField value={dialogenvironment} onInput={handleenvironment} label="Environment" required/></div>
          <div><TextField value={dialogversion} onInput={handleversion} label="Version" required /></div>
          <div><TextField value={dialogha_role} onInput={handleha_role} label="HA-Role" /></div>
          <div><TextField value={dialogdb_size} onInput={handledb_size} label="DB-Size" /></div>
          <div><TextField value={dialogdb_replication_type} onInput={handledb_replication_type} label="DB-Replication-Type" /></div>
          <div><TextField value={dialogdba_sme} onInput={handledba_sme} label="DBA-SME" /></div>
          <div><TextField value={dialogsn_group} onInput={handlesn_group} label="SN-Group" required /></div>
          <div><TextField value={dialogcompliance} onInput={handlecompliance} label="Compliance" /></div>
          <div><TextField value={dialogcomments} onInput={handlecomments} label="Comments" /></div>
          <div><TextField value={dialogdb_dfo} onInput={handledb_dfo} label="DB-DFO" /></div>
          <div><TextField value={dialogapp_name} onInput={handleapp_name} label="App-Name" required /></div>
          <div><TextField value={dialoghost_name} onInput={handlehost_name} label="Host-Name" host_name required/></div>
          <div><pre>           </pre></div>
          
          <div className="h3color">
          
          <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
          <h4>there's nothing to enter in </h4>
          <h4>mandatory fields </h4>
          
       
       </div>
          <div style={{ marginTop: '3em' }}>
            <Button onClick={handleUpdateRow}>Save</Button>
            <Button onClick={handleDialogClose1}>Cancel</Button>
          </div>
        </Paper>
      </MyDialog>   
      <MyDialog title="Add Details" isOpen={isDialogOpen2} onClose={handleDialogClose2}>
        <Paper style={{ padding: '2em' }}>
          <div><TextField value={dialogrdbms} onInput={handlerdbms} label="RDBMS" /></div>
          <div><TextField value={dialoginstance_name} onInput={handleinstance_name}  label="Instance-Name" /></div>
          <div><TextField value={dialogport} onInput={handleport} label="Port" /></div>
          <div><TextField value={dialogdb_name} onInput={handledb_name} label="DB-Name" /></div>
          <div><TextField value={dialogstatus} onInput={handlestatus} label="Status" /></div>
          <div><TextField value={dialogdistribution} onInput={handledistribution} label="Distribution" /></div>
          <div><TextField value={dialogdomain} onInput={handledomain} label="Domain" /></div>
          <div><TextField value={dialogenvironment} onInput={handleenvironment} label="Environment" /></div>
          <div><TextField value={dialogversion} onInput={handleversion} label="Version" /></div>
          <div><TextField value={dialogha_role} onInput={handleha_role} label="HA-Role" /></div>
          <div><TextField value={dialogdb_size} onInput={handledb_size} label="DB-Size" /></div>
          <div><TextField value={dialogdb_replication_type} onInput={handledb_replication_type} label="DB-Replication-Type" /></div>
          <div><TextField value={dialogdba_sme} onInput={handledba_sme} label="DBA-SME" /></div>
          <div><TextField value={dialogsn_group} onInput={handlesn_group} label="SN-Group" /></div>
          <div><TextField value={dialogcompliance} onInput={handlecompliance} label="Compliance" /></div>
          <div><TextField value={dialogcomments} onInput={handlecomments} label="Comments" /></div>
          <div><TextField value={dialogdb_dfo} onInput={handledb_dfo} label="DB-DFO" /></div>
          <div><TextField value={dialogapp_name} onInput={handleapp_name} label="App-Name" /></div>
          <div><TextField value={dialoghost_name} onInput={handlehost_name} label="Host-Name" /></div>
          <div><pre>           </pre></div>
          <div className="h3color">
          
          <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
          <h4>there's nothing to enter in </h4>
               <h4>mandatory fields </h4></div>
          <div style={{ marginTop: '3em' }}>
            <Button onClick={handleAddnewRow}>Save</Button>
            <Button onClick={handleDialogClose2}>Cancel</Button>
          </div>
        </Paper>
      </MyDialog>   
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
     const [isDialogOpen1, setIsDialogOpen1] = useState(false);
     const [isDialogOpen2, setIsDialogOpen2] = useState(false);
   const [dialogid, setDialogid] = useState('');
   const [dialogrdbms, setDialogrdbms] = useState('');
   const [dialogsql_virtual_name, setDialogsql_virtual_name] = useState('');
   const [dialoginstance_name, setDialoginstance_name] = useState('');
   const [dialogport, setDialogport] = useState('');
   const [dialogdb_name,setDialogdb_name]=useState('');
   const [dialogstatus,setDialogstatus]=useState('');
   const [dialogdomain,setDialogdomain]=useState('');
   const [dialogenvironment,setDialogenvironment]=useState('');
   const [dialogversion,setDialogversion]=useState('');
   const [dialogha_role,setDialogha_role]=useState('');
   const [dialogdb_size,setDialogdb_size]=useState('');
   const [dialogdb_replication_type,setDialogdb_replication_type]=useState('');
   const [dialogdba_sme,setDialogdba_sme]=useState('');
   const [dialogsn_group,setDialogsn_group]=useState('');
   const [dialogcompliance,setDialogcompliance]=useState('');
   const [dialogcomments,setDialogcomments]=useState('');
   const [dialogdb_dfo,setDialogdb_dfo]=useState('');
   const [dialogapp_name,setDialogapp_name]=useState('');
   const [dialoghost_name,setDialoghost_name]=useState('');
   const handleDialogClose1 = event => {
    setIsDialogOpen1(false);
  }

  const handleDialogClose2 = event => {
    setIsDialogOpen2(false);
  }
  const handlerdbms=event=>{
    setDialogrdbms(event.target.value);
  }
  const handlesql_virtual_name= event => {
    setDialogsql_virtual_name(event.target.value);
  }
  const handleinstance_name= event => {
    setDialoginstance_name(event.target.value);
  }
  const handleport = event => {
    setDialogport(event.target.value);
  }
  const handledb_name = event => {
    setDialogdb_name(event.target.value);
  }
  const handlestatus = event => {
    setDialogstatus(event.target.value);
  }

  const handledomain = event => {
    setDialogdomain(event.target.value);
  }
  const handleenvironment = event => {
    setDialogenvironment(event.target.value);
  }
  const handleversion = event => {
    setDialogversion(event.target.value);
  }
  const handleha_role = event => {
    setDialogha_role(event.target.value);
  }
  const handledb_size = event => {
    setDialogdb_size(event.target.value);
  }
  const handledb_replication_type= event => {
    setDialogdb_replication_type(event.target.value);
  }
  const handledba_sme= event => {
    setDialogdba_sme(event.target.value);
  }
  const handlesn_group= event => {
    setDialogsn_group(event.target.value);
  }
  const handlecompliance= event => {
    setDialogcompliance(event.target.value);
  }
  const handlecomments= event => {
    setDialogcomments(event.target.value);
  }
  const handledb_dfo= event => {
    setDialogdb_dfo(event.target.value);
  }
  const handleapp_name= event => {
    setDialogapp_name(event.target.value);
  }
  const handlehost_name= event => {
    setDialoghost_name(event.target.value);
  }

  const refreshPage=()=>{
    window.location.reload();
  }
    
  const handleUpdateRow = event => {
    if(!dialoginstance_name||!dialogdb_name||!dialogenvironment||!dialogversion||!dialogdba_sme||!dialogsn_group||!dialoghost_name)
    {
      alert("Enter mandatory details");
      return;
    }
    setDetails(
     // {...details,[ event.app_name]: dialogapp_name ,[event.app_key]:dialogapp_key}
      {...details,[event.target.name]:event.target.value},
     
      );
       Axios.put('http://localhost:8000/updateMssql', { 
                id:dialogid,
                rdbms: dialogrdbms,
                sql_virtual_name: dialogsql_virtual_name,
                instance_name: dialoginstance_name,
                port: dialogport,
                db_name: dialogdb_name,
                status: dialogstatus,
                domain: dialogdomain,
                environment: dialogenvironment,
                version: dialogversion,
                ha_role: dialogha_role,
                db_size: dialogdb_size,
                db_replication_type: dialogdb_replication_type,
                dba_sme: dialogdba_sme,
                sn_group: dialogsn_group,
                compliance: dialogcompliance,
                comments: dialogcomments,
                db_dfo: dialogdb_dfo,
                app_name: dialogapp_name,
                host_name: dialoghost_name, 
              })
              refreshPage();
              alert("successfully Edited!");
            }
  const handleAddnewRow=event=>{ 
    if(!dialoginstance_name||!dialogdb_name||!dialogenvironment||!dialogversion||!dialogdba_sme||!dialogsn_group||!dialoghost_name)
    {
      alert("Enter mandatory details");
      return;
    }
    Axios.post('http://localhost:8000/createMssql',{
      rdbms: dialogrdbms,
                sql_virtual_name: dialogsql_virtual_name,
                instance_name: dialoginstance_name,
                port: dialogport,
                db_name: dialogdb_name,
                status: dialogstatus,
                domain: dialogdomain,
                environment: dialogenvironment,
                version: dialogversion,
                ha_role: dialogha_role,
                db_size: dialogdb_size,
                db_replication_type: dialogdb_replication_type,
                dba_sme: dialogdba_sme,
                sn_group: dialogsn_group,
                compliance: dialogcompliance,
                comments: dialogcomments,
                db_dfo: dialogdb_dfo,
                app_name: dialogapp_name,
                host_name: dialoghost_name, 
  })
  setDetails(
    //getDetails(); 
    // Here you can add the new row to whatever index you want
    //[{ id: dialogId, app_name: dialogapp_name ,app_key:dialogapp_key}, ...details]
 {...details,[event.target.name]:event.target.value},

 );
 refreshPage();
 alert("successfully Added!");
  }
  useEffect(() => {
    // Closes dialog after saving
    if (isDialogOpen1) {
      setIsDialogOpen1(false);
    }
    if (isDialogOpen2) {
      setIsDialogOpen2(false);
    }
  }, [details]);
                            
  const initialset=(rowData)=>{
    setDialogid(rowData.id);
    if (!isDialogOpen1) {
      setDialogrdbms(rowData.rdbms);
      setDialogsql_virtual_name(rowData.sql_virtual_name);
      setDialoginstance_name(rowData.instance_name);
      setDialogport(rowData.port);
      setDialogdb_name(rowData.db_name);
      setDialogstatus(rowData.status);
      setDialogdomain(rowData.domain);
      setDialogenvironment(rowData.environment);
      setDialogversion(rowData.version);
      setDialogha_role(rowData.ha_role);
      setDialogdb_size(rowData.db_size);
      setDialogdb_replication_type(rowData.db_replication_type);
      setDialogdba_sme(rowData.dba_sme);
      setDialogsn_group(rowData.sn_group);
      setDialogcompliance(rowData.compliance);
      setDialogcomments(rowData.commnets);
      setDialogdb_dfo(rowData.db_dfo);
      setDialogapp_name(rowData.app_name);
      setDialoghost_name(rowData.host_name);
  
              }
            }
const initialset1=()=>{
  setDialogid();
  if (!isDialogOpen1) {
    setDialogrdbms("-");
    setDialogsql_virtual_name("-");
    setDialoginstance_name("-");
    setDialogport("-");
    setDialogdb_name("-");
    setDialogstatus("-");
    setDialogdomain("-");
    setDialogenvironment("-");
    setDialogversion("-");
    setDialogha_role("-");
    setDialogdb_size("-");
    setDialogdb_replication_type("-");
    setDialogdba_sme("-");
    setDialogsn_group("-");
    setDialogcompliance("-");
    setDialogcomments("-");
    setDialogdb_dfo("-");
    setDialogapp_name("-");
    setDialoghost_name("-");

            }
          }
const actions = [
  {
    icon: () => <FaIcons.FaEdit/>,
    tooltip: 'Edit Details',
    //isFreeAction: true,
    onClick: (event, rowData) => {
  
      initialset(rowData);
      
      setIsDialogOpen1(true);
      
    },
  },
  {
    icon: () => <AddIcon />,
    tooltip: 'Add',
    isFreeAction: true,
    onClick: (event, rowData) => {
      initialset1();
      setIsDialogOpen2(true);
    },
  }
];
    return (
        <div> 
            <MaterialTable title="MSSQL Inventory"
            data = {details}
            columns = {columns}
            actions={actions}
            options = {{ filtering: true,
              exportButton: true,
              pagesize:10,
              exportAllData: true,
              columnsButton:true,
              maxBodyHeight: '500px',
              grouping:true,
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
                           pageSizeOptions:[10,20,40,60,100],
              actionsColumnIndex: 0, addRowPosition: "first"
             
          }}
          editable={{
           /* onRowAdd: (newRow) => new Promise((resolve, reject) => {
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
            }),*/

            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              const id = selectedRow.id;
              deleteDetail(id);
              setTimeout(() => {
                resolve()
              }, 1000)
            }),


           /* onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
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
            })*/
  
          }}
         
            />
        <MyDialog title="Edit Details" isOpen={isDialogOpen1} onClose={handleDialogClose1}>
        <Paper style={{ padding: '2em' }}>
          <div><TextField value={dialogrdbms} onInput={handlerdbms} label="RDBMS" /></div>
          <div><TextField value={dialogsql_virtual_name} onInput={handlesql_virtual_name}  label="sql-virtual-Name" /></div>
          <div><TextField value={dialoginstance_name} onInput={handleinstance_name}  label="Instance-Name" required /></div>
          <div><TextField value={dialogport} onInput={handleport} label="Port" /></div>
          <div><TextField value={dialogdb_name} onInput={handledb_name} label="DB-Name" required/></div>
          <div><TextField value={dialogstatus} onInput={handlestatus} label="Status" /></div>
          <div><TextField value={dialogdomain} onInput={handledomain} label="Domain" /></div>
          <div><TextField value={dialogenvironment} onInput={handleenvironment} label="Environment" required /></div>
          <div><TextField value={dialogversion} onInput={handleversion} label="Version" required/></div>
          <div><TextField value={dialogha_role} onInput={handleha_role} label="HA-Role" /></div>
          <div><TextField value={dialogdb_size} onInput={handledb_size} label="DB-Size" /></div>
          <div><TextField value={dialogdb_replication_type} onInput={handledb_replication_type} label="DB-Replication-Type" /></div>
          <div><TextField value={dialogdba_sme} onInput={handledba_sme} label="DBA-SME" required/></div>
          <div><TextField value={dialogsn_group} onInput={handlesn_group} label="SN-Group" required/></div>
          <div><TextField value={dialogcompliance} onInput={handlecompliance} label="Compliance" /></div>
          <div><TextField value={dialogcomments} onInput={handlecomments} label="Comments" /></div>
          <div><TextField value={dialogdb_dfo} onInput={handledb_dfo} label="DB-DFO" /></div>
          <div><TextField value={dialogapp_name} onInput={handleapp_name} label="App-Name" /></div>
          <div><TextField value={dialoghost_name} onInput={handlehost_name} label="Host-Name" required/></div>
          <div><pre>           </pre></div>
          
          <div className="h3color">
          
          <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
          <h4>there's nothing to enter in </h4>
          <h4>mandatory fields </h4>
          
       
       </div>
          <div style={{ marginTop: '3em' }}>
            <Button onClick={handleUpdateRow}>Save</Button>
            <Button onClick={handleDialogClose1}>Cancel</Button>
          </div>
        </Paper>
      </MyDialog>       
      <MyDialog title="Add Details" isOpen={isDialogOpen2} onClose={handleDialogClose2}>
        <Paper style={{ padding: '2em' }}>
          <div><TextField value={dialogrdbms} onInput={handlerdbms} label="RDBMS" /></div>
          <div><TextField value={dialogsql_virtual_name} onInput={handlesql_virtual_name}  label="sql-virtual-Name" /></div>
          <div><TextField value={dialoginstance_name} onInput={handleinstance_name}  label="Instance-Name" required/></div>
          <div><TextField value={dialogport} onInput={handleport} label="Port" /></div>
          <div><TextField value={dialogdb_name} onInput={handledb_name} label="DB-Name" required /></div>
          <div><TextField value={dialogstatus} onInput={handlestatus} label="Status" /></div>
          <div><TextField value={dialogdomain} onInput={handledomain} label="Domain" /></div>
          <div><TextField value={dialogenvironment} onInput={handleenvironment} label="Environment" required/></div>
          <div><TextField value={dialogversion} onInput={handleversion} label="Version" required/></div>
          <div><TextField value={dialogha_role} onInput={handleha_role} label="HA-Role" /></div>
          <div><TextField value={dialogdb_size} onInput={handledb_size} label="DB-Size" /></div>
          <div><TextField value={dialogdb_replication_type} onInput={handledb_replication_type} label="DB-Replication-Type" /></div>
          <div><TextField value={dialogdba_sme} onInput={handledba_sme} label="DBA-SME" required/></div>
          <div><TextField value={dialogsn_group} onInput={handlesn_group} label="SN-Group" required/></div>
          <div><TextField value={dialogcompliance} onInput={handlecompliance} label="Compliance" /></div>
          <div><TextField value={dialogcomments} onInput={handlecomments} label="Comments" /></div>
          <div><TextField value={dialogdb_dfo} onInput={handledb_dfo} label="DB-DFO" /></div>
          <div><TextField value={dialogapp_name} onInput={handleapp_name} label="App-Name" /></div>
          <div><TextField value={dialoghost_name} onInput={handlehost_name} label="Host-Name" required /></div>
          <div><pre>           </pre></div>
          <div className="h3color">
          
          <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
          <h4>there's nothing to enter in </h4>
               <h4>mandatory fields </h4></div>
          <div style={{ marginTop: '3em' }}>
            <Button onClick={handleAddnewRow}>Save</Button>
            <Button onClick={handleDialogClose2}>Cancel</Button>
          </div>
        </Paper>
      </MyDialog>      
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
   const [isDialogOpen1, setIsDialogOpen1] = useState(false);
   const [isDialogOpen2, setIsDialogOpen2] = useState(false);
   const [dialogId, setDialogId] = useState('');
   const [dialogrdbms,setDialogrdbms] = useState('');
   const [dialoginstancename,setDialoginstancename] = useState('');
   const [dialogport,setDialogport] = useState('');
   const [dialogdbname,setDialogdbname] = useState('');
   const [dialogstatus,setDialogstatus] = useState('');
   const [dialogdistribution,setDialogdistribution] = useState('');
   const [dialogdomain,setDialogdomain] = useState('');
   const [dialogenvironment,setDialogenvironment] = useState('');
   const [dialogversion,setDialogversion] = useState('');
   const [dialogharole,setDialogharole] = useState('');
   const [dialogdbsize,setDialogdbsize] = useState('');
   const [dialogdbreplicationtype,setDialogdbreplicationtype] = useState('');
   const [dialogdbasme,setDialogdbasme] = useState('');
   const [dialogsngroup,setDialogsngroup] = useState('');
   const [dialogcompliance,setDialogcompliance] = useState('');
   const [dialogcomments,setDialogcomments] = useState('');
   const [dialogopsmanager,setDialogopsmanager] = useState('');
   const [dialogdbdfo,setDialogdbdfo] = useState('');
   const [dialogappname,setDialogappname] = useState('');
   const [dialoghostname,setDialoghostname] = useState('');

   const handleDialogClose1 = event => {
    setIsDialogOpen1(false);
  }

  const handleDialogClose2 = event => {
    setIsDialogOpen2(false);
  }

   const handle_rdbms = event => {
     setDialogrdbms(event.target.value);
   }

   const handle_instance_name = event => {
    setDialoginstancename(event.target.value);
  }

  const handle_port = event => {
    setDialogport(event.target.value);
  }

  const handle_dbname = event => {
    setDialogdbname(event.target.value);
  }

  const handle_status = event => {
    setDialogstatus(event.target.value);
  }

  const handle_distribution = event => {
    setDialogdistribution(event.target.value);
  }

  const handle_domain = event => {
    setDialogdomain(event.target.value);
  }

  const handle_environment = event => {
    setDialogenvironment(event.target.value);
  }

  const handle_version = event => {
    setDialogversion(event.target.value);
  }

  const handle_ha_role = event => {
    setDialogharole(event.target.value);
  }

  const handle_dbsize = event => {
    setDialogdbsize(event.target.value);
  }

  const handle_db_replication_type = event => {
    setDialogdbreplicationtype(event.target.value);
  }

  const handle_dba_sme = event => {
    setDialogdbasme(event.target.value);
  }
  
  const handle_sn_group = event => {
    setDialogsngroup(event.target.value);
  }

  const handle_compliance = event => {
    setDialogcompliance(event.target.value);
  }

  const handle_comments = event => {
    setDialogcomments(event.target.value);
  }

  const handle_ops_manager = event => {
    setDialogopsmanager(event.target.value);
  }

  const handle_db_dfo = event => {
    setDialogdbdfo(event.target.value);
  }

  const handle_app_name = event => {
    setDialogappname(event.target.value);
  }

  const handle_host_name = event => {
    setDialoghostname(event.target.value);
  }

  const refreshPage=()=>{
    window.location.reload();
  }
  const handleUpdateRow = event => {
    if(!dialogrdbms||!dialoginstancename||!dialogenvironment||!dialogversion||!dialogsngroup||!dialoghostname)
    {
      alert("Enter mandatory details");
      return;
    }
    setDetails(
      {...details,[event.target.name]:event.target.value},
    );
    
    Axios.put(`http://localhost:8000/updateMongo`, { 
              rdbms: dialogrdbms,
              instance_name: dialoginstancename,
              port: dialogport,
              db_name: dialogdbname,
              status: dialogstatus,
              distribution: dialogdistribution,
              domain: dialogdomain,
              environment: dialogenvironment,
              version: dialogversion,
              ha_role: dialogharole,
              db_size: dialogdbsize,
              db_replication_type: dialogdbreplicationtype,
              dba_sme: dialogdbasme,
              sn_group: dialogsngroup,
              compliance: dialogcompliance,
              comments: dialogcomments,
              ops_manager: dialogopsmanager,
              db_dfo: dialogdbdfo,
              app_name: dialogappname,
              host_name: dialoghostname ,
              id: dialogId
            })
          refreshPage();
          alert("successfully Edited!");
  }

  const handleAddnewRow=event=>{
    if(!dialogrdbms||!dialoginstancename||!dialogenvironment||!dialogversion||!dialogsngroup||!dialoghostname)
    {
      alert("Enter mandatory details");
      return;
    }
    Axios.post('http://localhost:8000/createMongo',{
      rdbms: dialogrdbms,
      instance_name: dialoginstancename,
      port: dialogport,
      db_name: dialogdbname,
      status: dialogstatus,
      distribution: dialogdistribution,
      domain: dialogdomain,
      environment: dialogenvironment,
      version: dialogversion,
      ha_role: dialogharole,
      db_size: dialogdbsize,
      db_replication_type: dialogdbreplicationtype,
      dba_sme: dialogdbasme,
      sn_group: dialogsngroup,
      compliance: dialogcompliance,
      comments: dialogcomments,
      ops_manager: dialogopsmanager,
      db_dfo: dialogdbdfo,
      app_name: dialogappname,
      host_name: dialoghostname ,
     })
      setDetails(
        //getDetails(); 
        // Here you can add the new row to whatever index you want
        //[{ id: dialogId, app_name: dialogapp_name ,app_key:dialogapp_key}, ...details]
     {...details,[event.target.name]:event.target.value},
    
     );
     refreshPage();
     alert("successfully Added!");
     }

useEffect(() => {
  // Closes dialog after saving
  if (isDialogOpen1) {
    setIsDialogOpen1(false);
  }
  if (isDialogOpen2) {
    setIsDialogOpen2(false);
  }
}, [details]);
  const initialset = (rowData) => {
    if(!isDialogOpen1) {
      setDialogrdbms(rowData.rdbms);
      setDialogId(rowData.id);
      setDialoginstancename(rowData.instance_name);
      setDialogport(rowData.port);
      setDialogdbname(rowData.db_name);
      setDialogstatus(rowData.status);
      setDialogdistribution(rowData.distribution);
      setDialogdomain(rowData.domain);
      setDialogenvironment(rowData.environment);
      setDialogversion(rowData.version);
      setDialogharole(rowData.ha_role);
      setDialogdbsize(rowData.db_size);
      setDialogdbreplicationtype(rowData.db_replication_type);
      setDialogdbasme(rowData.dba_sme);
      setDialogsngroup(rowData.sn_group);
      setDialogcompliance(rowData.compliance);
      setDialogcomments(rowData.comments);
      setDialogopsmanager(rowData.ops_manager);
      setDialogdbdfo(rowData.db_dfo);
      setDialogappname(rowData.app_name);
      setDialoghostname(rowData.host_name);

    }
  }
  
  const initialset1 = () => {
    if(!isDialogOpen1) {
      setDialogrdbms("-");
      setDialogId("-");
      setDialoginstancename("-");
      setDialogport("-");
      setDialogdbname("-");
      setDialogstatus("-");
      setDialogdistribution("-");
      setDialogdomain("-");
      setDialogenvironment("-");
      setDialogversion("-");
      setDialogharole("-");
      setDialogdbsize("-");
      setDialogdbreplicationtype("-");
      setDialogdbasme("-");
      setDialogsngroup("-");
      setDialogcompliance("-");
      setDialogcomments("-");
      setDialogopsmanager("-");
      setDialogdbdfo("-");
      setDialogappname("-");
      setDialoghostname("-");

 

    }
  }
  const actions = [
    {
      icon: () => <FaIcons.FaEdit/>,
      tooltip: 'Edit Details',
      //isFreeAction: true,
      onClick: (event, rowData) => {
    
        initialset(rowData);
        
        setIsDialogOpen1(true);
       
      },
    },
    {
      icon: () => <AddIcon />,
      tooltip: 'Add',
      isFreeAction: true,
      onClick: (event, rowData) => {
        initialset1();
        setIsDialogOpen2(true);
      },
    }
  ];

    return (
        <div> 
            <MaterialTable title="MongoDB Inventory"
            data = {details}
          columns = {columns}
          actions={actions}
          options = {{
              filtering: true,
              pagesize:10,
              exportButton: true,
              exportAllData: true,
              columnsButton:true,
              grouping:true,
              maxBodyHeight: '500px',
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
                           pageSizeOptions:[10,20,40,60,100],
              actionsColumnIndex: 0, addRowPosition: "first"
          }}
          editable={{
           /* onRowAdd: (newRow) => new Promise((resolve, reject) => {
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
              
            }),*/

            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              const id = selectedRow.id;
              deleteDetail(id);
              setTimeout(() => {
                resolve()
              }, 1000)
            }),


           /* onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
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
            })*/
  
          }}
         
            />
<MyDialog title="Edit Details" isOpen={isDialogOpen1} onClose={handleDialogClose1}>
        <Paper style={{ padding: '2em' }}>
          <div><TextField value={dialogrdbms} onInput={handle_rdbms} label="rdbms" required /></div>
          <div><TextField value={dialoginstancename} onInput={handle_instance_name}  label="instance_name" required/></div>
          <div><TextField value={dialogport} onInput={handle_port} label="port" /></div>
          <div><TextField value={dialogdbname} onInput={handle_dbname} label="db_name" /></div>
          <div><TextField value={dialogstatus} onInput={handle_status} label="status" /></div>
          <div><TextField value={dialogdistribution} onInput={handle_distribution} label="distribution" /></div>
          <div><TextField value={dialogdomain} onInput={handle_domain} label="domain" /></div>
          <div><TextField value={dialogenvironment} onInput={handle_environment} label="environment" required/></div>
          <div><TextField value={dialogversion} onInput={handle_version} label="version" required/></div>
          <div><TextField value={dialogharole} onInput={handle_ha_role} label="ha_role" /></div>
          <div><TextField value={dialogdbsize} onInput={handle_dbsize} label="db_size" /></div>
          <div><TextField value={dialogdbreplicationtype} onInput={handle_db_replication_type} label="db_replication_type" /></div>
          <div><TextField value={dialogdbasme} onInput={handle_dba_sme} label="dba_sme" /></div>
          <div><TextField value={dialogsngroup} onInput={handle_sn_group} label="sn_group" required/></div>
          <div><TextField value={dialogcompliance} onInput={handle_compliance} label="scompliance" /></div>
          <div><TextField value={dialogcomments} onInput={handle_comments} label="comments" /></div>
          <div><TextField value={dialogopsmanager} onInput={handle_ops_manager} label="ops_manager" /></div>
          <div><TextField value={dialogdbdfo} onInput={handle_db_dfo} label="db_dfo" /></div>
          <div><TextField value={dialogappname} onInput={handle_app_name} label="app_name" /></div>
          <div><TextField value={dialoghostname} onInput={handle_host_name} label="host_name" required /></div>
          <div><pre>           </pre></div>
          
          <div className="h3color">
          
          <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
          <h4>there's nothing to enter in </h4>
          <h4>mandatory fields </h4>
          
       
       </div>
          <div style={{ marginTop: '3em' }}>
            <Button onClick={handleUpdateRow}>Save</Button>
            <Button onClick={handleDialogClose1}>Cancel</Button>
          </div>
        </Paper>
      </MyDialog>
      <MyDialog title="Add Details" isOpen={isDialogOpen2} onClose={handleDialogClose2}>
        <Paper style={{ padding: '2em' }}>
          <div><TextField value={dialogrdbms} onInput={handle_rdbms} label="rdbms"  required/></div>
          <div><TextField value={dialoginstancename} onInput={handle_instance_name}  label="instance_name"  required/></div>
          <div><TextField value={dialogport} onInput={handle_port} label="port" /></div>
          <div><TextField value={dialogdbname} onInput={handle_dbname} label="db_name" /></div>
          <div><TextField value={dialogstatus} onInput={handle_status} label="status" /></div>
          <div><TextField value={dialogdistribution} onInput={handle_distribution} label="distribution" /></div>
          <div><TextField value={dialogdomain} onInput={handle_domain} label="domain" /></div>
          <div><TextField value={dialogenvironment} onInput={handle_environment} label="environment" required /></div>
          <div><TextField value={dialogversion} onInput={handle_version} label="version" required /></div>
          <div><TextField value={dialogharole} onInput={handle_ha_role} label="ha_role" /></div>
          <div><TextField value={dialogdbsize} onInput={handle_dbsize} label="db_size" /></div>
          <div><TextField value={dialogdbreplicationtype} onInput={handle_db_replication_type} label="db_replication_type" /></div>
          <div><TextField value={dialogdbasme} onInput={handle_dba_sme} label="dba_sme" /></div>
          <div><TextField value={dialogsngroup} onInput={handle_sn_group} label="sn_group" required/></div>
          <div><TextField value={dialogcompliance} onInput={handle_compliance} label="scompliance" /></div>
          <div><TextField value={dialogcomments} onInput={handle_comments} label="comments" /></div>
          <div><TextField value={dialogopsmanager} onInput={handle_ops_manager} label="ops_manager" /></div>
          <div><TextField value={dialogdbdfo} onInput={handle_db_dfo} label="db_dfo" /></div>
          <div><TextField value={dialogappname} onInput={handle_app_name} label="app_name" /></div>
          <div><TextField value={dialoghostname} onInput={handle_host_name} label="host_name" required /></div>
          <div><pre>           </pre></div>
          <div className="h3color">
          
          <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
          <h4>there's nothing to enter in </h4>
          <h4>mandatory fields </h4></div>
          <div style={{ marginTop: '3em' }}>
            <Button onClick={handleAddnewRow}>Save</Button>
            <Button onClick={handleDialogClose2}>Cancel</Button>
          </div>
        </Paper>
      </MyDialog>

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
   const [isDialogOpen1, setIsDialogOpen1] = useState(false);
   const [isDialogOpen2, setIsDialogOpen2] = useState(false);
   const [dialogId, setDialogId] = useState('');
   const [dialoginstancename,setDialoginstancename] = useState('');
   const [dialogdbname,setDialogdbname] = useState('');
   const [dialogrdbms,setDialogrdbms] = useState('');
   const [dialogstatus,setDialogstatus] = useState('');
   const [dialogdomain,setDialogdomain] = useState('');
   const [dialogenvironment,setDialogenvironment] = useState('');
   const [dialogversion,setDialogversion] = useState('');
   const [dialogharole,setDialogharole] = useState('');
   const [dialogdbdfo,setDialogdbdfo] = useState('');
   const [dialogoraclehome,setDialogoraclehome] = useState('');
   const [dialogportnum,setDialogportnum] = useState('');
   const [dialogdbsize,setDialogdbsize] = useState('');
   const [dialogdbasme,setDialogdbasme] = useState('');
   const [dialogsngroup,setDialogsngroup] = useState('');
   const [dialogcompliance,setDialogcompliance] = useState('');
   const [dialogcomments,setDialogcomments] = useState('');
   const [dialogappname,setDialogappname] = useState('');
   const [dialoghostname,setDialoghostname] = useState('');

   const handleDialogClose1 = event => {
    setIsDialogOpen1(false);
  }

  const handleDialogClose2 = event => {
    setIsDialogOpen2(false);
  }
   const handle_rdbms = event => {
     setDialogrdbms(event.target.value);
   }

   const handle_instance_name = event => {
    setDialoginstancename(event.target.value);
  }

  const handle_port_num = event => {
    setDialogportnum(event.target.value);
  }

  const handle_dbname = event => {
    setDialogdbname(event.target.value);
  }

  const handle_status = event => {
    setDialogstatus(event.target.value);
  }

  const handle_domain = event => {
    setDialogdomain(event.target.value);
  }

  const handle_environment = event => {
    setDialogenvironment(event.target.value);
  }

  const handle_version = event => {
    setDialogversion(event.target.value);
  }

  const handle_ha_role = event => {
    setDialogharole(event.target.value);
  }

  const handle_oracle_home = event => {
    setDialogoraclehome(event.target.value);
  }

  const handle_dbsize = event => {
    setDialogdbsize(event.target.value);
  }

  const handle_dba_sme = event => {
    setDialogdbasme(event.target.value);
  }
  
  const handle_sn_group = event => {
    setDialogsngroup(event.target.value);
  }

  const handle_compliance = event => {
    setDialogcompliance(event.target.value);
  }

  const handle_comments = event => {
    setDialogcomments(event.target.value);
  }

  const handle_db_dfo = event => {
    setDialogdbdfo(event.target.value);
  }

  const handle_app_name = event => {
    setDialogappname(event.target.value);
  }

  const handle_host_name = event => {
    setDialoghostname(event.target.value);
  }

  const refreshPage=()=>{
    window.location.reload();
  }
  const handleUpdateRow = event => {
    
    if(!dialoginstancename||!dialogdbname||!dialogstatus||!dialogdomain||!dialogenvironment||!dialogversion||!dialogdbdfo)
    {
      alert("Enter mandatory details");
      return;
    }
    Axios.put(`http://localhost:8000/updateOracle`, { 
              id: dialogId,
              rdbms: dialogrdbms,
              instance_name: dialoginstancename,
              port_num: dialogportnum,
              oracle_home:dialogoraclehome,
              db_name: dialogdbname,
              status: dialogstatus,
              domain: dialogdomain,
              environment: dialogenvironment,
              version: dialogversion,
              ha_role: dialogharole,
              db_size: dialogdbsize,
              dba_sme: dialogdbasme,
              sn_group: dialogsngroup,
              compliance: dialogcompliance,
              comments: dialogcomments,
              db_dfo: dialogdbdfo,
              app_name: dialogappname,
              host_name: dialoghostname ,
              
            })
            setDetails(
              {...details,[event.target.name]:event.target.value},
            );
          refreshPage();
          alert("successfully Edited!");

  }
  const handleAddnewRow=event=>{
    
    if(!dialoginstancename||!dialogdbname||!dialogstatus||!dialogdomain||!dialogenvironment||!dialogversion||!dialogdbdfo)
    {
      alert("Enter mandatory details");
      return;
    }
    Axios.post('http://localhost:8000/createOracle',{
      rdbms: dialogrdbms,
              instance_name: dialoginstancename,
              port_num: dialogportnum,
              oracle_home:dialogoraclehome,
              db_name: dialogdbname,
              status: dialogstatus,
              domain: dialogdomain,
              environment: dialogenvironment,
              version: dialogversion,
              ha_role: dialogharole,
              db_size: dialogdbsize,
              dba_sme: dialogdbasme,
              sn_group: dialogsngroup,
              compliance: dialogcompliance,
              comments: dialogcomments,
              db_dfo: dialogdbdfo,
              app_name: dialogappname,
              host_name: dialoghostname ,
              
            })
            setDetails(
              //getDetails(); 
              // Here you can add the new row to whatever index you want
              //[{ id: dialogId, app_name: dialogapp_name ,app_key:dialogapp_key}, ...details]
           {...details,[event.target.name]:event.target.value},
          
           );
           refreshPage();
           alert("successfully Added!");
  }
  useEffect(() => {
    // Closes dialog after saving
    if (isDialogOpen1) {
      setIsDialogOpen1(false);
    }
    if (isDialogOpen2) {
      setIsDialogOpen2(false);
    }
  }, [details]);

  const initialset = (rowData) => {
    if(!isDialogOpen1) {
      setDialogId(rowData.id);
      setDialogrdbms(rowData.rdbms);
      setDialogoraclehome(rowData.oracle_home);
      setDialoginstancename(rowData.instance_name);
      setDialogportnum(rowData.port_num);
      setDialogdbname(rowData.db_name);
      setDialogstatus(rowData.status);
      setDialogdomain(rowData.domain);
      setDialogenvironment(rowData.environment);
      setDialogversion(rowData.version);
      setDialogharole(rowData.ha_role);
      setDialogdbsize(rowData.db_size);
      setDialogdbasme(rowData.dba_sme);
      setDialogsngroup(rowData.sn_group);
      setDialogcompliance(rowData.compliance);
      setDialogcomments(rowData.comments);
      setDialogdbdfo(rowData.db_dfo);
      setDialogappname(rowData.app_name);
      setDialoghostname(rowData.host_name);

    }
  }
  const initialset1 = () => {
    if(!isDialogOpen1) {
      setDialogId("-");
      setDialogrdbms("-");
      setDialogoraclehome("-");
      setDialoginstancename("-");
      setDialogportnum("-");
      setDialogdbname("-");
      setDialogstatus("-");
      setDialogdomain("-");
      setDialogenvironment("-");
      setDialogversion("-");
      setDialogharole("-");
      setDialogdbsize("-");
      setDialogdbasme("-");
      setDialogsngroup("-");
      setDialogcompliance("-");
      setDialogcomments("-");
      setDialogdbdfo("-");
      setDialogappname("-");
      setDialoghostname("-");

    }
  } 

  const actions = [
    {
      icon: () => <FaIcons.FaEdit/>,
      tooltip: 'Edit Details',
      //isFreeAction: true,
      onClick: (event, rowData) => {
    
        initialset(rowData);
        
        setIsDialogOpen1(true);
       
      },
    },
    {
      icon: () => <AddIcon />,
      tooltip: 'Add',
      isFreeAction: true,
      onClick: (event, rowData) => {
        initialset1();
        setIsDialogOpen2(true);
      },
    }
  ];
    return (
        <div> 
            <MaterialTable title="Oracle Inventory"
            data = {details}
          columns = {columns}
          actions={actions}
          options = {{
              filtering: true,
              pagesize:10,
              exportButton: true,
              exportAllData: true,
              columnsButton:true,
              grouping:true,
              maxBodyHeight: '500px',
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
                           pageSizeOptions:[10,20,40,60,100],
              actionsColumnIndex: 0, addRowPosition: "first"
          }}
          editable={{
          /*  onRowAdd: (newRow) => new Promise((resolve, reject) => {
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
            }),*/

            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              const id = selectedRow.id;
              deleteDetail(id);
              setTimeout(() => {
                resolve()
              }, 1000)
            }),


           /* onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
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
            })*/
  
          }}
          
            />
            <MyDialog title="Edit Details" isOpen={isDialogOpen1} onClose={handleDialogClose1}>
        <Paper style={{ padding: '2em' }}>
          
          <div><TextField value={dialoginstancename} onInput={handle_instance_name}  label="instance_name" required/></div>
          <div><TextField value={dialogdbname} onInput={handle_dbname} label="db_name" required/></div>
          <div><TextField value={dialogrdbms} onInput={handle_rdbms} label="rdbms" required/></div>
          <div><TextField value={dialogstatus} onInput={handle_status} label="status" required/></div>
          <div><TextField value={dialogdomain} onInput={handle_domain} label="domain" required/></div>
          <div><TextField value={dialogenvironment} onInput={handle_environment} label="environment" required/></div>
          <div><TextField value={dialogversion} onInput={handle_version} label="version" required /></div>
          <div><TextField value={dialogharole} onInput={handle_ha_role} label="ha_role" /></div>
          <div><TextField value={dialogdbdfo} onInput={handle_db_dfo} label="db_dfo" required/></div>
          <div><TextField value={dialogoraclehome} onInput={handle_oracle_home} label="oracle_home" /></div>
          <div><TextField value={dialogportnum} onInput={handle_port_num} label="port_num" /></div>
          <div><TextField value={dialogdbsize} onInput={handle_dbsize} label="db_size" /></div>
          <div><TextField value={dialogdbasme} onInput={handle_dba_sme} label="dba_sme" /></div>
          <div><TextField value={dialogsngroup} onInput={handle_sn_group} label="sn_group" /></div>
          <div><TextField value={dialogcompliance} onInput={handle_compliance} label="scompliance" /></div>
          <div><TextField value={dialogcomments} onInput={handle_comments} label="comments" /></div>
          <div><TextField value={dialogappname} onInput={handle_app_name} label="app_name" /></div>
          <div><TextField value={dialoghostname} onInput={handle_host_name} label="host_name" /></div>
          <div><pre>           </pre></div>
          
          <div className="h3color">
          
          <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
          <h4>there's nothing to enter in </h4>
          <h4>mandatory fields </h4>
          
       
       </div>
          <div style={{ marginTop: '3em' }}>
            <Button onClick={handleUpdateRow}>Save</Button>
            <Button onClick={handleDialogClose1}>Cancel</Button>
          </div>
        </Paper>
      </MyDialog>
      <MyDialog title="Add Details" isOpen={isDialogOpen2} onClose={handleDialogClose2}>
        <Paper style={{ padding: '2em' }}>
          
          <div><TextField value={dialoginstancename} onInput={handle_instance_name}  label="instance_name" required /></div>
          <div><TextField value={dialogdbname} onInput={handle_dbname} label="db_name" required /></div>
          <div><TextField value={dialogrdbms} onInput={handle_rdbms} label="rdbms" required /></div>
          <div><TextField value={dialogstatus} onInput={handle_status} label="status" required/></div>
          <div><TextField value={dialogdomain} onInput={handle_domain} label="domain" required/></div>
          <div><TextField value={dialogenvironment} onInput={handle_environment} label="environment" required /></div>
          <div><TextField value={dialogversion} onInput={handle_version} label="version" required/></div>
          <div><TextField value={dialogharole} onInput={handle_ha_role} label="ha_role" /></div>
          <div><TextField value={dialogdbdfo} onInput={handle_db_dfo} label="db_dfo" required /></div>
          <div><TextField value={dialogoraclehome} onInput={handle_oracle_home} label="oracle_home" /></div>
          <div><TextField value={dialogportnum} onInput={handle_port_num} label="port_num" /></div>
          <div><TextField value={dialogdbsize} onInput={handle_dbsize} label="db_size" /></div>
          <div><TextField value={dialogdbasme} onInput={handle_dba_sme} label="dba_sme" /></div>
          <div><TextField value={dialogsngroup} onInput={handle_sn_group} label="sn_group" /></div>
          <div><TextField value={dialogcompliance} onInput={handle_compliance} label="scompliance" /></div>
          <div><TextField value={dialogcomments} onInput={handle_comments} label="comments" /></div>
          <div><TextField value={dialogappname} onInput={handle_app_name} label="app_name" /></div>
          <div><TextField value={dialoghostname} onInput={handle_host_name} label="host_name" /></div>
          <div><pre>           </pre></div>
          <div className="h3color">
          
          <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
          <h4>there's nothing to enter in </h4>
               <h4>mandatory fields </h4></div>
          <div style={{ marginTop: '3em' }}>
            <Button onClick={handleAddnewRow}>Save</Button>
            <Button onClick={handleDialogClose2}>Cancel</Button>
          </div>
        </Paper>
      </MyDialog>
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
    const [isDialogOpen1, setIsDialogOpen1] = useState(false);
   const [isDialogOpen2, setIsDialogOpen2] = useState(false);
    const [dialogId, setDialogId] = useState('');
    const [dialoginstancename,setDialoginstancename] = useState('');
    const [dialogdbname,setDialogdbname] = useState('');
    const [dialogrdbms,setDialogrdbms] = useState('');
    const [dialogstatus,setDialogstatus] = useState('');
    const [dialogdomain,setDialogdomain] = useState('');
    const [dialogenvironment,setDialogenvironment] = useState('');
    const [dialogversion,setDialogversion] = useState('');
    const [dialogharole,setDialogharole] = useState('');
    const [dialogdbdfo,setDialogdbdfo] = useState('');
    const [dialogport,setDialogport] = useState('');
    const [dialogdbsize,setDialogdbsize] = useState('');
    const [dialogdbreplicationtype,setDialogdbreplicationtype] = useState('');
    const [dialogdbasme,setDialogdbasme] = useState('');
    const [dialogsngroup,setDialogsngroup] = useState('');
    const [dialogcompliance,setDialogcompliance] = useState('');
    const [dialogcomments,setDialogcomments] = useState('');
    const [dialogappname,setDialogappname] = useState('');
    const [dialoghostname,setDialoghostname] = useState('');
    const [dialogdistribution,setDialogdistribution] = useState('');

    const handleDialogClose1 = event => {
      setIsDialogOpen1(false);
    }
  
    const handleDialogClose2 = event => {
      setIsDialogOpen2(false);
    }
    const handle_rdbms = event => {
      setDialogrdbms(event.target.value);
    }

    const handle_db_replication_type = event => {
     setDialogdbreplicationtype(event.target.value);
   }

    const handle_instance_name = event => {
     setDialoginstancename(event.target.value);
   }

   const handle_port = event => {
     setDialogport(event.target.value);
   }

   const handle_distribution = event => {
     setDialogdistribution(event.target.value);
   }

   const handle_dbname = event => {
     setDialogdbname(event.target.value);
   }

   const handle_status = event => {
     setDialogstatus(event.target.value);
   }

   const handle_domain = event => {
     setDialogdomain(event.target.value);
   }

   const handle_environment = event => {
     setDialogenvironment(event.target.value);
   }

   const handle_version = event => {
     setDialogversion(event.target.value);
   }

   const handle_ha_role = event => {
     setDialogharole(event.target.value);
   }

   const handle_dbsize = event => {
     setDialogdbsize(event.target.value);
   }

   const handle_dba_sme = event => {
     setDialogdbasme(event.target.value);
   }
   
   const handle_sn_group = event => {
     setDialogsngroup(event.target.value);
   }

   const handle_compliance = event => {
     setDialogcompliance(event.target.value);
   }

   const handle_comments = event => {
     setDialogcomments(event.target.value);
   }

   const handle_db_dfo = event => {
     setDialogdbdfo(event.target.value);
   }

   const handle_app_name = event => {
     setDialogappname(event.target.value);
   }

   const handle_host_name = event => {
     setDialoghostname(event.target.value);
   }

   const refreshPage=()=>{
    window.location.reload();
  }
  const handleUpdateRow = event => {
    if(!dialogrdbms||!dialoginstancename||!dialogport||!dialogdbname||!dialogversion||!dialogharole||!dialogdbsize||!dialogcompliance||!dialoghostname||!dialogdistribution)
    {
      alert("Enter mandatory details");
      return;
    }
     setDetails(
       {...details,[event.target.name]:event.target.value},
     );
     
     Axios.put(`http://localhost:8000/updatePostgres`, { 
               id: dialogId,
               rdbms: dialogrdbms,
               instance_name: dialoginstancename,
               port: dialogport,
               distribution: dialogdistribution,
               db_name: dialogdbname,
               status: dialogstatus,
               domain: dialogdomain,
               environment: dialogenvironment,
               db_replication_type: dialogdbreplicationtype,
               version: dialogversion,
               ha_role: dialogharole,
               db_size: dialogdbsize,
               dba_sme: dialogdbasme,
               sn_group: dialogsngroup,
               compliance: dialogcompliance,
               comments: dialogcomments,
               db_dfo: dialogdbdfo,
               app_name: dialogappname,
               host_name: dialoghostname ,
               
             })
           refreshPage();

   }
   const handleAddnewRow=event=>{
      if(!dialogrdbms||!dialoginstancename||!dialogport||!dialogdbname||!dialogversion||!dialogharole||!dialogdbsize||!dialogcompliance||!dialoghostname||!dialogdistribution)
      {
        alert("Enter mandatory details");
        return;
      }
    Axios.post('http://localhost:8000/createPostgres',{
      rdbms: dialogrdbms,
      instance_name: dialoginstancename,
      port: dialogport,
      distribution: dialogdistribution,
      db_name: dialogdbname,
      status: dialogstatus,
      domain: dialogdomain,
      environment: dialogenvironment,
      db_replication_type: dialogdbreplicationtype,
      version: dialogversion,
      ha_role: dialogharole,
      db_size: dialogdbsize,
      dba_sme: dialogdbasme,
      sn_group: dialogsngroup,
      compliance: dialogcompliance,
      comments: dialogcomments,
      db_dfo: dialogdbdfo,
      app_name: dialogappname,
      host_name: dialoghostname ,
   })
   setDetails(
    //getDetails(); 
    // Here you can add the new row to whatever index you want
    //[{ id: dialogId, app_name: dialogapp_name ,app_key:dialogapp_key}, ...details]
 {...details,[event.target.name]:event.target.value},

 );
 refreshPage();
 alert("successfully Added!");
   }
useEffect(() => {
// Closes dialog after saving
if (isDialogOpen1) {
  setIsDialogOpen1(false);
}
if (isDialogOpen2) {
  setIsDialogOpen2(false);
}
}, [details]);

   const initialset = (rowData) => {
     if(!isDialogOpen1) {
       setDialogId(rowData.id);
       setDialogrdbms(rowData.rdbms);
       setDialogdistribution(rowData.distribution);
       setDialoginstancename(rowData.instance_name);
       setDialogport(rowData.port);
       setDialogdbname(rowData.db_name);
       setDialogstatus(rowData.status);
       setDialogdomain(rowData.domain);
       setDialogenvironment(rowData.environment);
       setDialogversion(rowData.version);
       setDialogharole(rowData.ha_role);
       setDialogdbsize(rowData.db_size);
       setDialogdbreplicationtype(rowData.db_replication_type);
       setDialogdbasme(rowData.dba_sme);
       setDialogsngroup(rowData.sn_group);
       setDialogcompliance(rowData.compliance);
       setDialogcomments(rowData.comments);
       setDialogdbdfo(rowData.db_dfo);
       setDialogappname(rowData.app_name);
       setDialoghostname(rowData.host_name);

     }
   }
   const initialset1 = () => {
    if(!isDialogOpen1) {
      setDialogId("-");
      setDialogrdbms("-");
      setDialogdistribution("-");
      setDialoginstancename("-");
      setDialogport("-");
      setDialogdbname("-");
      setDialogstatus("-");
      setDialogdomain("-");
      setDialogenvironment("-");
      setDialogversion("-");
      setDialogharole("-");
      setDialogdbsize("-");
      setDialogdbreplicationtype("-");
      setDialogdbasme("-");
      setDialogsngroup("-");
      setDialogcompliance("-");
      setDialogcomments("-");
      setDialogdbdfo("-");
      setDialogappname("-");
      setDialoghostname("-");



    }
  }   

   const actions = [
    {
      icon: () => <FaIcons.FaEdit/>,
      tooltip: 'Edit Details',
      //isFreeAction: true,
      onClick: (event, rowData) => {
    
        initialset(rowData);
        
        setIsDialogOpen1(true);
       
      },
    },
    {
      icon: () => <AddIcon />,
      tooltip: 'Add',
      isFreeAction: true,
      onClick: (event, rowData) => {
        initialset1();
        setIsDialogOpen2(true);
      },
    }
  ];



    return (
        <div> 
            <MaterialTable title="DB_Inv_Postgresql"
            data = {details}
            columns = {columns}
            actions={actions}
            options = {{
              grouping:true,
              filtering: true,
              pagesize:10,
              exportAllData: true,
              columnsButton:true,
              maxBodyHeight: '500px',
              pageSizeOptions:[10,20,40,60,100],
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
              exportButton: true,
              
              actionsColumnIndex: 0, addRowPosition: "first"
          }}
          editable={{
           /* onRowAdd: (newRow) => new Promise((resolve, reject) => {
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
              
            }),*/

            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              const id = selectedRow.id;
              deleteDetail(id);
              setTimeout(() => {
                resolve()
              }, 1000)
            }),


          /*  onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
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
            })*/
  
          }}
        
            />

<MyDialog title="Edit Details" isOpen={isDialogOpen1} onClose={handleDialogClose1}>
        <Paper style={{ padding: '2em' }}>
        <div><TextField value={dialogrdbms} onInput={handle_rdbms} label="rdbms" required/></div>
          <div><TextField value={dialoginstancename} onInput={handle_instance_name}  label="instance_name" required/></div>
          <div><TextField value={dialogport} onInput={handle_port} label="port" required/></div>
          <div><TextField value={dialogdbname} onInput={handle_dbname} label="db_name" required/></div>
          <div><TextField value={dialogstatus} onInput={handle_status} label="status" /></div>
          <div><TextField value={dialogdomain} onInput={handle_domain} label="domain" /></div>
          <div><TextField value={dialogenvironment} onInput={handle_environment} label="environment" /></div>
          <div><TextField value={dialogversion} onInput={handle_version} label="version" required/></div>
          <div><TextField value={dialogharole} onInput={handle_ha_role} label="ha_role" required/></div>
          <div><TextField value={dialogdbsize} onInput={handle_dbsize} label="db_size" required/></div>
          <div><TextField value={dialogdbreplicationtype} onInput={handle_db_replication_type} label="db_replication_type" /></div>
          <div><TextField value={dialogdbasme} onInput={handle_dba_sme} label="dba_sme" /></div>
          <div><TextField value={dialogsngroup} onInput={handle_sn_group} label="sn_group" /></div>
          <div><TextField value={dialogcompliance} onInput={handle_compliance} label="scompliance" required/></div>
          <div><TextField value={dialogcomments} onInput={handle_comments} label="comments" /></div>
          <div><TextField value={dialogdbdfo} onInput={handle_db_dfo} label="db_dfo" /></div>
          <div><TextField value={dialogappname} onInput={handle_app_name} label="app_name" /></div>
          <div><TextField value={dialoghostname} onInput={handle_host_name} label="host_name" required/></div>
          <div><TextField value={dialogdistribution} onInput={handle_distribution} label="distribution" required/></div>
          <div><pre>           </pre></div>
          
          <div className="h3color">
          
          <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
          <h4>there's nothing to enter in </h4>
          <h4>mandatory fields </h4>
          
       
       </div>
          <div style={{ marginTop: '3em' }}>
            <Button onClick={handleUpdateRow}>Save</Button>
            <Button onClick={handleDialogClose1}>Cancel</Button>
          </div>
        </Paper>
      </MyDialog>
      <MyDialog title="Add Details" isOpen={isDialogOpen2} onClose={handleDialogClose2}>
        <Paper style={{ padding: '2em' }}>
        <div><TextField value={dialogrdbms} onInput={handle_rdbms} label="rdbms" required/></div>
          <div><TextField value={dialoginstancename} onInput={handle_instance_name}  label="instance_name" required/></div>
          <div><TextField value={dialogport} onInput={handle_port} label="port" required/></div>
          <div><TextField value={dialogdbname} onInput={handle_dbname} label="db_name" required/></div>
          <div><TextField value={dialogstatus} onInput={handle_status} label="status" /></div>
          <div><TextField value={dialogdomain} onInput={handle_domain} label="domain" /></div>
          <div><TextField value={dialogenvironment} onInput={handle_environment} label="environment" /></div>
          <div><TextField value={dialogversion} onInput={handle_version} label="version" required/></div>
          <div><TextField value={dialogharole} onInput={handle_ha_role} label="ha_role" required/></div>
          <div><TextField value={dialogdbsize} onInput={handle_dbsize} label="db_size" required/></div>
          <div><TextField value={dialogdbreplicationtype} onInput={handle_db_replication_type} label="db_replication_type" /></div>
          <div><TextField value={dialogdbasme} onInput={handle_dba_sme} label="dba_sme" /></div>
          <div><TextField value={dialogsngroup} onInput={handle_sn_group} label="sn_group" /></div>
          <div><TextField value={dialogcompliance} onInput={handle_compliance} label="scompliance" required/></div>
          <div><TextField value={dialogcomments} onInput={handle_comments} label="comments" /></div>
          <div><TextField value={dialogdbdfo} onInput={handle_db_dfo} label="db_dfo" /></div>
          <div><TextField value={dialogappname} onInput={handle_app_name} label="app_name" /></div>
          <div><TextField value={dialoghostname} onInput={handle_host_name} label="host_name" required/></div>
          <div><TextField value={dialogdistribution} onInput={handle_distribution} label="distribution" required /></div>
          <div><pre>           </pre></div>
          
          <div className="h3color">
          
          <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
          <h4>there's nothing to enter in </h4>
               <h4>mandatory fields </h4></div>
          <div style={{ marginTop: '3em' }}>
            <Button onClick={handleAddnewRow}>Save</Button>
            <Button onClick={handleDialogClose2}>Cancel</Button>
          </div>
        </Paper>
      </MyDialog>

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
   const [isDialogOpen1, setIsDialogOpen1] = useState(false);
   const [isDialogOpen2, setIsDialogOpen2] = useState(false);
   const[dialogoldapp_name,setDialogoldapp_name]=useState('');
   const [dialogapp_name, setDialogapp_name] = useState('');
  const [dialogapp_key, setDialogapp_key] = useState('');
  const [dialogcurrent_state, setDialogcurrent_state] = useState('');
  const [dialogreporting_name, setDialogreporting_name] = useState('');
  const [dialogbrief_func,setDialogbrief_func]=useState('');
  const [dialogapm_owner,setDialogapm_owner]=useState('');
  const [dialogapp_type,setDialogapp_type]=useState('');
  const [dialogapp_tech,setDialogapp_tech]=useState('');
  const [dialogdb_tech,setDialogdb_tech]=useState('');
  const [dialogno_users,setDialogno_users]=useState('');
  const [dialogavailability,setDialogavailability]=useState('');
  const [dialogoper_imapct,setDialogoper_impact]=useState('');
  const [dialogrevenue_impact,setDialogrevenue_impact]=useState('');
  const [dialogstores_or_custimpact,setDialogstores_or_custimpact]=useState('');
  const handleDialogClose1 = event => {
    setIsDialogOpen1(false);
  }

  const handleDialogClose2 = event => {
    setIsDialogOpen2(false);
  }


  const handleapp_name = event => {
    setDialogapp_name(event.target.value);
  }
  const handleapp_key= event => {
    setDialogapp_key(event.target.value);
  }
  const handlecurrent_state= event => {
    setDialogcurrent_state(event.target.value);
  }
  const handlereporting_name= event => {
    setDialogreporting_name(event.target.value);
  }
  const handlerebrief_func= event => {
    setDialogbrief_func(event.target.value);
  }
  const handleapm_owner= event => {
    setDialogapm_owner(event.target.value);
  }
  const handleapp_type= event => {
    setDialogapp_type(event.target.value);
  }
  const handleapp_tech= event => {
    setDialogapp_tech(event.target.value);
  }
  const handledb_tech= event => {
    setDialogdb_tech(event.target.value);
  }
  const handleno_users= event => {
    setDialogno_users(event.target.value);
  }
  const handleavailability= event => {
    setDialogavailability(event.target.value);
  }
  const handleoper_impact= event => {
    setDialogoper_impact(event.target.value);
  }
  const handlerevenue_impact= event => {
    setDialogrevenue_impact(event.target.value);
  }
  const handlestores_or_custimpact= event => {
    setDialogstores_or_custimpact(event.target.value);
  }
  const refreshPage=()=>{
    window.location.reload();
  }
  const handleUpdateRow = event => {
    if (!dialogapp_name||!dialogapp_key||!dialogcurrent_state||!dialogreporting_name||!dialogapm_owner||!dialogapp_type)
     {
      alert("Enter mandatory fields");
      return;}
    // if (!dialogId || !dialogapp_name||!dialogcurrent_state||!dialogreporting_name) return;
    setDetails(
      // {...details,[ event.app_name]: dialogapp_name ,[event.app_key]:dialogapp_key}
       {...details,[event.target.name]:event.target.value},
      
       );
     Axios.put('http://localhost:8000/updateApp',{
                 oldapp_name:dialogoldapp_name,
                 newapp_name:dialogapp_name,
                 app_key: dialogapp_key,
                 current_state: dialogcurrent_state,
                 reporting_name:dialogreporting_name,
                 brief_func: dialogbrief_func,
                 apm_owner:dialogapm_owner,
                 app_type:dialogapp_type,
                 app_tech:dialogapp_tech,
                 db_tech: dialogdb_tech,
                 no_users:dialogno_users,
                 availability:dialogavailability,
                 oper_impact: dialogoper_imapct,
                 revenue_impact: dialogrevenue_impact,
                 stores_or_custimpact: dialogstores_or_custimpact
             })
            
             refreshPage();
             alert("successfully Edited!");
         
 
          
   }


   const handleAddnewRow=event=>{
    if (!dialogapp_name||!dialogapp_key||!dialogcurrent_state||!dialogreporting_name||!dialogapm_owner||!dialogapp_type) 
    {
      alert("Enter mandatory fields");
      return;}
    Axios.post('http://localhost:8000/createApp',{
      app_name:dialogapp_name,
      app_key: dialogapp_key,
      current_state: dialogcurrent_state,//newRow.current_state,
      reporting_name:dialogreporting_name,// newRow.reporting_name,
      brief_func: dialogbrief_func,//newRow.brief_func,
      apm_owner:dialogapm_owner,//newRow.apm_owner,
      app_type:dialogapp_type,// newRow.app_type,
      app_tech:dialogapp_tech,// newRow.app_tech,
      db_tech: dialogdb_tech,//newRow.db_tech,
      no_users:dialogno_users,// newRow.no_users,
      availability:dialogavailability,// newRow.availability,
      oper_impact: dialogoper_imapct,//newRow.oper_impact,
      revenue_impact: dialogrevenue_impact,//newRow.revenue_impact,
      stores_or_custimpact: dialogstores_or_custimpact,
            }) 
            setDetails(
              //getDetails(); 
              // Here you can add the new row to whatever index you want
              //[{ id: dialogId, app_name: dialogapp_name ,app_key:dialogapp_key}, ...details]
           {...details,[event.target.name]:event.target.value},
          
           );
           refreshPage();
           alert("successfully Added!");
  }
  useEffect(() => {
    // Closes dialog after saving
    if (isDialogOpen1) {
      setIsDialogOpen1(false);
    }
    if (isDialogOpen2) {
      setIsDialogOpen2(false);
    }
  }, [details]);

  const initialset=(rowData)=>{
    setDialogoldapp_name(rowData.app_name);
    if (!isDialogOpen1) {
      setDialogapp_name(rowData.app_name);
      setDialogapp_key(rowData.app_key);
      setDialogcurrent_state(rowData.current_state);
      setDialogreporting_name(rowData.reporting_name);
      setDialogbrief_func(rowData.brief_func);
      setDialogapm_owner(rowData.apm_owner);
      setDialogapp_type(rowData.app_type);
      setDialogapp_tech(rowData.app_tech);
      setDialogdb_tech(rowData.db_tech);
      setDialogno_users(rowData.no_users);
      setDialogavailability(rowData.availability);
      setDialogoper_impact(rowData.oper_impact);
      setDialogrevenue_impact(rowData.revenue_impact);
      setDialogstores_or_custimpact(rowData.stores_or_custimpact);
  
    }
  }

  const initialset1=()=>{
    setDialogoldapp_name("-");
    if (!isDialogOpen1) {
      setDialogapp_name("-");
      setDialogapp_key("-");
      setDialogcurrent_state("-");
      setDialogreporting_name("-");
      setDialogbrief_func("-");
      setDialogapm_owner("-");
      setDialogapp_type("-");
      setDialogapp_tech("-");
      setDialogdb_tech("-");
      setDialogno_users("-");
      setDialogavailability("-");
      setDialogoper_impact("-");
      setDialogrevenue_impact("-");
      setDialogstores_or_custimpact("-");
  
    }
  }

  const actions = [
    {
      icon: () => <FaIcons.FaEdit/>,
      tooltip: 'Edit Details',
      //isFreeAction: true,
      onClick: (event, rowData) => {
    
        initialset(rowData);
        
        setIsDialogOpen1(true);
       
      },
    },
    {
      icon: () => <AddIcon />,
      tooltip: 'Add',
      isFreeAction: true,
      onClick: (event, rowData) => {
        initialset1();
        setIsDialogOpen2(true);
      },
    }
  ];

    return (
        <div> 
            <MaterialTable title="Application Inventory"
            data = {details}
            columns = {columns}
            actions={actions}
            options = {{
              filtering: true,
              pagesize:10,
              pageSizeOptions:[10,20,40,60,100],
              headerStyle: {
                backgroundColor: '#01579b',
                 color: '#FFF'
                           },
                         
                exportAllData: true,
              exportButton: true,
              columnsButton:true,
              maxBodyHeight: '500px',
              addRowPosition: "first",
              grouping:true
          }}
          editable={{
           /* onRowAdd: (newRow) => new Promise((resolve, reject) => {
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
            }),*/

            onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
              const app_name = selectedRow.app_name;
              deleteDetail(app_name);
              setTimeout(() => {
                resolve()
              }, 1000)
            }),


           /* onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
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
                old_app_name:oldRow.app_name,
                new_app_name: updatedRow.app_name
                })
              setTimeout(() => {
                setDetails(updatedRows)
                getDetails() ///---extra
                resolve()
              }, 1000)
            })*/
  
          }}
         
            />
<MyDialog title="Edit Details" isOpen={isDialogOpen1} onClose={handleDialogClose1}>
            <Paper style={{ padding: '2em' }}>
              <div><TextField value={dialogapp_name} onInput={handleapp_name} label="App-Name" required  /></div>
              <div><TextField value={dialogapp_key} onInput={handleapp_key}  label="App-key" required/></div>
              <div><TextField value={dialogcurrent_state} onInput={handlecurrent_state} label="Current-state" required/></div>
              <div><TextField value={dialogreporting_name} onInput={handlereporting_name} label="Reporting-name" required /></div>
              <div><TextField value={dialogbrief_func} inputProps={{maxLength: 100}} onInput={handlerebrief_func} label="Brief-Function" /></div>
              <div><TextField value={dialogapm_owner} onInput={handleapm_owner} label="Apm-Owner" required /></div>
              <div><TextField value={dialogapp_type} onInput={handleapp_type} label="App-Type" required /></div>
              <div><TextField value={dialogapp_tech} onInput={handleapp_tech} label="App-Tech" /></div>
              <div><TextField value={dialogdb_tech} onInput={handledb_tech} label="DB-Tech" /></div>
              <div><TextField value={dialogno_users} onInput={handleno_users} label="No-Users" /></div>
              <div><TextField value={dialogavailability} onInput={handleavailability} label="Availability" /></div>
              <div><TextField value={dialogoper_imapct} onInput={handleoper_impact} label="Oper-Impact" /></div>
              <div><TextField value={dialogrevenue_impact} onInput={handlerevenue_impact} label="Revenue-Impact" /></div>
              <div><TextField value={dialogstores_or_custimpact} onInput={handlestores_or_custimpact} label="Stores-or-Custimpact" /></div>
              <div><pre>           </pre></div>
          
          <div className="h3color">
          
          <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
          <h4>there's nothing to enter in </h4>
          <h4>mandatory fields </h4>
          
       
       </div>
              <div style={{ marginTop: '3em' }}>
                <Button onClick={handleUpdateRow}>Save</Button>
                <Button onClick={handleDialogClose1}>Cancel</Button>
              </div>
            </Paper>
          </MyDialog>
          <MyDialog title="Add Details" isOpen={isDialogOpen2} onClose={handleDialogClose2}>
            <Paper style={{ padding: '2em' }}>
              <div><TextField value={dialogapp_name} onInput={handleapp_name} label="App-Name" required/></div>
              <div><TextField value={dialogapp_key} onInput={handleapp_key}  label="App-key" required /></div>
              <div><TextField value={dialogcurrent_state} onInput={handlecurrent_state} label="Currnt-state" required  /></div>
              <div><TextField value={dialogreporting_name} onInput={handlereporting_name} label="Reporting-name" required /></div>
              <div><TextField value={dialogbrief_func} onInput={handlerebrief_func} label="Brief-Func" /></div>
              <div><TextField value={dialogapm_owner} onInput={handleapm_owner} label="Apm-Owner" required  /></div>
              <div><TextField value={dialogapp_type} onInput={handleapp_type} label="App-Type" required  /></div>
              <div><TextField value={dialogapp_tech} onInput={handleapp_tech} label="App-Tech" /></div>
              <div><TextField value={dialogdb_tech} onInput={handledb_tech} label="DB-Tech" /></div>
              <div><TextField value={dialogno_users} onInput={handleno_users} label="No-Users" /></div>
              <div><TextField value={dialogavailability} onInput={handleavailability} label="Availability" /></div>
              <div><TextField value={dialogoper_imapct} onInput={handleoper_impact} label="Oper-Impact" /></div>
              <div><TextField value={dialogrevenue_impact} onInput={handlerevenue_impact} label="Revenue-Impact" /></div>
              <div><TextField value={dialogstores_or_custimpact} onInput={handlestores_or_custimpact} label="Stores-or-Custimpact" /></div>
             <div><pre>           </pre></div>
          
               <div className="h3color">
               
               <h4><AiIcons.AiFillWarning/> please put '-' if </h4>
               <h4>there's nothing to enter in </h4>
               <h4>mandatory fields </h4>
               
            
            </div>
              <div style={{ marginTop: '3em' }}>
                <Button onClick={handleAddnewRow}>Save</Button>
                <Button onClick={handleDialogClose2}>Cancel</Button>
              </div>
            </Paper>
          </MyDialog>          
        </div>
    )
}

