import React from 'react';
import { MySqlTable, MsSqlTable, MongoTable, OracleTable, PostgresTable,AppTable} from './Table';
export const Inventory = () => {
    return (
      <div className='inventory'>
        <h1>Inventory</h1>
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
        <MySqlTable/>
      </div>
    );
  };
  export const MsSQL = () => {
    return (
      <div >
        <MsSqlTable />
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