import React from 'react';
import { Section, Select } from './Style';


const Filter = ({inputBusca, onChangeBusca, ordenar, onChangeOrdenar, minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange}) => {


    return (
        <Section>

            <label>Filter Price Min</label>
            <input value={minPrice} onChange={handleMinPriceChange} type="number" />
            <br />
            <label>Filter Price Max</label>
            <input value={maxPrice} onChange={handleMaxPriceChange} type="number" />
            <br />
            <label>Search by name</label>
            <input placeholder='Buscar por nome' value={inputBusca} onChange={onChangeBusca} type="text" />
            <br />
            <div>
                <Select value={ordenar} onChange={onChangeOrdenar}>
                    <option value="Up">Growing</option>
                    <option value="Down">Descending</option>
                </Select>
            </div>
        </Section>
    );
};

export default Filter;