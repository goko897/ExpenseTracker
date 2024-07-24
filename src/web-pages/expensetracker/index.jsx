import { useState } from "react";
import { signOut } from "firebase/auth";
import { useAddTransaction } from "../../hooks/useAddTrans";
import { useGetTransactions } from "../../hooks/useGetTrans";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";
import './dashboard.css';
import myImage from '../auth/logo.png';

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotals } = useGetTransactions();
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const { balance, income, expenses } = transactionTotals;

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });

    setDescription("");
    setTransactionAmount("");
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <nav><div class="logo">
      <ul>
  <li><img src={myImage} padding-left={60} width={65} height={65} /></li>
  <li><center>{name}'s Expense Tracker</center></li>
  <li className="right">
    <button  className="button-54" onClick={signUserOut}>Sign Out</button>
  </li>
</ul>

        </div>
        </nav>
        <div className="row">
        <form className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              value={transactionAmount}
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="expense"> Expense</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income"> Income</label>
            <button type="submit" className="button-54"> Add Transaction</button>
            </form>
        <div className="container">
          <div className="column">

          
            <br/>
            <div className="balance"> 
                <h3> Your Balance</h3> {balance >= 0 ? <p> ${balance}</p> : <p> -${balance * -1}</p>}
                
            </div>
            <div className="balance">
            <h3> Income</h3>  
            <p>${income}</p>
            </div>

            <div className="balance">
            <h4> Expenses</h4>  
            <p>${expenses}</p>
            </div>
          
            
            
            </div>
        </div>

        <div className="column">
        

       </div>
        <div className="transactions">
            <h3> Transaction History</h3>
            <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                const { description, transactionAmount, transactionType } = transaction;
                return (
                  <tr>  {/* Assuming transaction has an id property */}
                    <td>{description}</td>
                    <td>{transactionAmount}</td>
                    <td style={{ color: transactionType === "expense" ? "red" : "green" }}>
                      {transactionType}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            </table>
        </div>
        </div>
    </>
    
  )
};