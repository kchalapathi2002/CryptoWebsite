import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import EachCoin from './eachCoin';
import './CryptoData.css';
import LastFinalizedBlock from './LastFinalizedBlock';
import _ from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';

const CryptoData = () => {
  const location = useLocation();
  const { name } = location.state;
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const [Block, setBlock] = useState('');
  const prevblock = useRef('');

  const [Cryptodata, setCryptodata] = useState([]);
  const prevdata = useRef([]);
  const [time, setTime] = useState('');
  const prevtime = useRef('');
  const [status, setStatus] = useState('');
  const prevstatus = useRef('');

  const [field, setfield] = useState('');
  const [Value, setValue] = useState(0);
  const [search, setSearch] = useState('');


  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const block = await axios.get('http://localhost:5000/finalized');
        if (!_.isEqual(block.data, prevblock.current)) {
          //console.log(block.data);
          setBlock(block.data);
          prevblock.current = block.data;
        }

        const response = await axios.get('http://localhost:5000', {
          params: {
            sortdata: field,
            sortvalue: Value,
            filter: search
          }
        });

        if (!_.isEqual(response.data.fetched, prevstatus.current)) {
          setStatus(response.data.fetched);
          prevstatus.current = response.data.fetched;
        }

        if (response.data.fetched === 'false') {
          if (!_.isEqual(response.data.time, prevtime.current)) {
            setTime(response.data.time);
            prevdata.current = response.data.time;
          }
        }

        if (!_.isEqual(response.data.data, prevdata.current)) {
          setCryptodata(response.data.data);
          prevdata.current = response.data.data;
        }
        setError(null);
      } catch (err) {
        setError('Error fetching crypto data');
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 5000);
    return () => clearInterval(interval);
  }, [field, Value, search]);


  const applySort = (currentField) => {
    if (field === currentField) {
      if (Value === 0) {
        setValue(-1);
      }
      else if (Value === -1) {
        setValue(1);
      } else { setValue(0); }
    }
    else {
      setfield(currentField);
      setValue(-1);
    }
  }

  const applyArrow = (currentField) => {
    if (field === currentField) {
      return Value === 1 ? '▲' : Value === -1 ? '▼' : '';
    }
    return '';
  }

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="main">
      {!error ? (!status ? (
        <p className='mainpara' >Loading...</p>
      ) : (
        <div className="cryptodata">
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
          <h2 className='welcome'>Welcome {name}</h2>

          <div className={status === 'true' ? 'green' : 'red'}>{status === 'true' ? (
            <h2>Live Data</h2>
          ) : (<h2>Last Updated at: {time}</h2>)}
          </div>

          <div className='lastfinalized'>
            <LastFinalizedBlock value={Block} />
          </div>

          <input
            type='text'
            placeholder='Search by coin Symbol or Name.....'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='search'
          />

          <div className='coin-row-all'>
            <div className="coin-row-cd">
              <p>Name</p>
              <p>Symbol</p>
              <p onClick={() => applySort('price')} style={{ cursor: 'pointer' }}>{applyArrow('price')}Price($)</p>
              <p onClick={() => applySort('percentChange1h')} style={{ cursor: 'pointer' }}>{applyArrow('percentChange1h')}1H change</p>
              <p onClick={() => applySort('percentChange24h')} style={{ cursor: 'pointer' }}>{applyArrow('percentChange24h')}24H change</p>
              <p onClick={() => applySort('marketcap')} style={{ cursor: 'pointer' }}>{applyArrow('marketcap')}Market Cap($)</p>
            </div>



            <div className="crypto-grid">
              {Cryptodata.map((coin) => (<EachCoin at={coin} />))}
            </div>
          </div>

        </div>
      )
      ) : (<p className='mainpara'>{error}</p>)
      }
    </div>
  );
};

export default CryptoData;
