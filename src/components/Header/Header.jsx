import './Header.css'
import React, { useState, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useTheme } from '../../hooks/use-theme';
import { strategies, currency } from '../../constants/constants';
import {getStrategies} from '../api/api'
import {adaptData} from '../../utils/adapt'

const Header = ({getStrategy, fullData}) => {
    const {theme, setTheme} = useTheme();

    const [checked, setChecked] = useState(false);
    const [strategiesValue, setStrategiesValue] = useState(strategies[0].name);
    const [currencyValue, setCurrencyValue] = useState(currency[0].name);

    const [stData, setStData] = useState({});
    const [currentStData, setCurrentStData] = useState([]);

    const handleStrategyChange = (e) => {
        
        getStrategies(e.currentTarget.value).then(
            data => {
                setStData(adaptData(data));
            });
        setStrategiesValue(e.currentTarget.value);
    }

    const handleCurrencyChange = (e) => {
        setCurrencyValue(e.currentTarget.value);
    }

    const toggleTheme = (e) => {
        setChecked(e.currentTarget.checked);
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    useEffect(()=>{
        setStData(fullData)
    }, [fullData])

    useEffect(()=>{
        if (currencyValue === currency[0].name) {
            setCurrentStData(stData.data_usd)
        } else {
            setCurrentStData(stData.data_btc)
        }

        getStrategy(currentStData);
    }, [getStrategy, currentStData, stData, currencyValue])

    useEffect(() => {
        theme === 'light' ? setChecked(true) : setChecked(false);
    }, [theme])

          

    return (
        <div className='header'>
            <div className='strategies'>
                <div>
                    <span className='text'>Стратегия №</span>
                    <ButtonGroup className="app__button">
                        {strategies.map((radio, idx) => (
                        <ToggleButton
                        
                            key={idx}
                            id={`strategies-${idx}`}
                            type="radio"
                            variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}
                            name="strategies"
                            value={radio.value}
                            checked={strategiesValue === radio.value}
                            onChange={handleStrategyChange}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <div>
                    <ToggleButton
                        className="app__button"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked}
                        value="1"
                        onChange={toggleTheme}
                    >
                        {theme}
                    </ToggleButton>
                </div>
                
            </div>
            <div className='currency'>
                <span className='text'>Валюта</span>
                <ButtonGroup>
                    {currency.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`currency-${idx}`}
                        type="radio"
                        variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}
                        name="currency"
                        value={radio.value}
                        checked={currencyValue === radio.value}
                        onChange={handleCurrencyChange}
                    >
                        {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
                <span className='comment'>{stData.title || 'Подождите ...'}</span>
            </div>
        </div>
    )
}

export default Header;