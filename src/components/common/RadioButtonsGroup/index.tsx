import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import React from 'react'

const RadioButtonsGroup = ({ formLabel, selectedValue, options, handleChange, ariaLabel, name }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{formLabel}</FormLabel>
    <RadioGroup aria-label={ariaLabel} name={name} value={selectedValue} onChange={handleChange}>
      {options.map((option: string) => (
        <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
      ))}
    </RadioGroup>
  </FormControl>
)
export default RadioButtonsGroup
