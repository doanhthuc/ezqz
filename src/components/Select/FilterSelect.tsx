import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React from 'react'

export interface SelectOption<K, V> {
    label: K
    value: V,
}

interface FilterSelectProps<K, V> {
    label: string,
    options: SelectOption<K, V>[],
    value: V,
    onChange: (value: V) => void
}

const FilterSelect = <K extends string | number, V extends string | number>({ label, options, value, onChange }: FilterSelectProps<K, V>) => {
    const handleChange = (event: SelectChangeEvent<V>) => {
        onChange(event.target.value as V);
    }
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>{label}</InputLabel>
            <Select value={value} onChange={handleChange} label={label}>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default FilterSelect