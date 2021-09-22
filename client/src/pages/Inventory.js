import React from 'react';
//import { MySqlTable, MsSqlTable, MongoTable, OracleTable, PostgresTable,AppTable} from './Table';
import { MysqlTable,MSsqlTable,MongoTable,OracleTable,PostgresTable,AppTable} from './Table';
export const Inventory = () => {
    return (
      <div className='inventory'>
      
      </div>
    );
  };
  
  export const Application = () => {
    return (
      <div>
        <AppTable />
      </div>
    );
  };

  export const MYSQL = () => {
    return (
      <div>
        <MysqlTable/>
      </div>
    );
  };
  export const MSsql = () => {
    return (
      <div >
        <MSsqlTable />
      </div>
    );
  };
  
  export const MongoDB = () => {
    return (
      <div >
        <MongoTable />
      </div>
    );
    };
  
  export const Oracle = () => {
    return (
      <div >
        <OracleTable/>
      </div>
    );
  };
  export const Postgresql = () => {
    return (
      <div >
        <PostgresTable/>
      </div>
    );
};
