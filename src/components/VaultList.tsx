import React from "react";
import {Datagrid, List, NumberField, TextField} from "react-admin";

const VaultList: React.FC = () => {
    return (<List queryOptions={{refetchInterval: 1000}}>
        <Datagrid>
            <TextField source="tokenName"/>
            <NumberField source="vaultIdx"/>
            <TextField source="owner"/>
            <NumberField source="collateral" options={{style: 'decimal'}}/>
            <NumberField source="debt" options={{ style: 'currency', currency: 'USD' }}/>
            <NumberField source="cdr" options={{style: 'percent'}}/>
        </Datagrid>
    </List>)
}

export default VaultList