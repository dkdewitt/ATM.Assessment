'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AccountDashboard() {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Adjust the account id as needed (here we assume account 1 exists)
  useEffect(() => {
    setLoading(true);
    axios.get('https://localhost:7122/api/accounts/1')
        .then(response => {
          setAccount(response.data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
  }, []);

  return (
      <div className="border border-gray-300 p-4 mb-4 rounded">
        <h2 className="text-lg font-bold mb-2">Account Dashboard</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {account ? (
            <div>
              <p><strong>Account ID:</strong> {account.accountId}</p>
              <p><strong>Type:</strong> {account.accountType}</p>
              <p><strong>Balance:</strong> {account.balance}</p>
            </div>
        ) : (
            !loading && <p>No account data.</p>
        )}
      </div>
  );
}

function DepositForm() {
  const [accountId, setAccountId] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { accountId: parseInt(accountId), amount: parseFloat(amount) };
      const response = await axios.post('https://localhost:7122/api/accounts/deposit', data);
      setMessage(`Deposit successful. New Balance: ${response.data.balance}`);
    } catch (error) {
      setMessage(`Deposit failed: ${error.response?.data || error.message}`);
    }
  };

  return (
      <div className="border border-gray-300 p-4 mb-4 rounded">
        <h2 className="text-lg font-bold mb-2">Deposit</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="mr-2">Account ID:</label>
            <input
                type="number"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                required
                className="p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="mr-2">Amount:</label>
            <input
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="p-1 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Deposit
          </button>
        </form>
        {message && <p className="mt-2">{message}</p>}
      </div>
  );
}

function WithdrawForm() {
  const [accountId, setAccountId] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { accountId: parseInt(accountId), amount: parseFloat(amount) };
      const response = await axios.post('https://localhost:7122/api/accounts/withdraw', data);
      setMessage(`Withdrawal successful. New Balance: ${response.data.balance}`);
    } catch (error) {
      setMessage(`Withdrawal failed: ${error.response?.data || error.message}`);
    }
  };

  return (
      <div className="border border-gray-300 p-4 mb-4 rounded">
        <h2 className="text-lg font-bold mb-2">Withdraw</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="mr-2">Account ID:</label>
            <input
                type="number"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                required
                className="p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="mr-2">Amount:</label>
            <input
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="p-1 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Withdraw
          </button>
        </form>
        {message && <p className="mt-2">{message}</p>}
      </div>
  );
}

function TransferForm() {
  const [sourceId, setSourceId] = useState('');
  const [destinationId, setDestinationId] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        sourceAccountId: parseInt(sourceId),
        destinationAccountId: parseInt(destinationId),
        amount: parseFloat(amount)
      };
      const response = await axios.post('https://localhost:7122/api/accounts/transfer', data);
      setMessage(
          `Transfer successful.
Source New Balance: ${response.data.source.balance}
Destination New Balance: ${response.data.destination.balance}`
      );
    } catch (error) {
      setMessage(`Transfer failed: ${error.response?.data || error.message}`);
    }
  };

  return (
      <div className="border border-gray-300 p-4 mb-4 rounded">
        <h2 className="text-lg font-bold mb-2">Transfer</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="mr-2">Source Account ID:</label>
            <input
                type="number"
                value={sourceId}
                onChange={(e) => setSourceId(e.target.value)}
                required
                className="p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="mr-2">Destination Account ID:</label>
            <input
                type="number"
                value={destinationId}
                onChange={(e) => setDestinationId(e.target.value)}
                required
                className="p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="mr-2">Amount:</label>
            <input
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="p-1 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Transfer
          </button>
        </form>
        {message && <p className="mt-2 whitespace-pre-line">{message}</p>}
      </div>
  );
}

function App() {
  return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">ATM Frontend</h1>
        <AccountDashboard />
        <DepositForm />
        <WithdrawForm />
        <TransferForm />
      </div>
  );
}

export default App;
