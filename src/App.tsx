import React, {useEffect} from 'react';
import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  useEffect( () =>  {
    const messaging = firebase.messaging();
    messaging.requestPermission().then(async () => {
      const token = await messaging.getToken();
      prompt("Token", token);
    })
    
  } , [])
  return (
    
    <>
    <GlobalProvider>
    <Header />
    <div className="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction/>
    </div>
    </GlobalProvider>
    
</>
      
   
    

    
  );
}

export default App;
