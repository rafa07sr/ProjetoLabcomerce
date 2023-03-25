import React from 'react';
import { Section, Select } from './Style';



const Filter = ({ inputBusca, onChangeBusca, ordenar, onChangeOrdenar, minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange, handleTypeClick }) => {


    return (
        <Section>

            <h2>Categorias</h2>
            <button onClick={() => handleTypeClick('toy')}>Toy</button>
            <button onClick={() => handleTypeClick('clothes')}>clotches</button>
            <label><h2>Filter Price Min</h2></label>
            <input value={minPrice} onChange={handleMinPriceChange} type="number" />
            <br />
            <label><h2>Filter Price Max</h2></label>
            <input value={maxPrice} onChange={handleMaxPriceChange} type="number" />
            <br />
            <label><h2>Search by name</h2></label>
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