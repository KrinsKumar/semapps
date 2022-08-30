import React, { useMemo, useState } from 'react';
import ReactMde from 'react-mde';
import Markdown from 'markdown-to-jsx';
import { useInput, InputHelperText, Labeled, required } from 'react-admin';
import { FormControl, FormHelperText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  validationError: {
    '& .MuiFormLabel-root': {
      color: '#f44336'
    },
    '& .mde-text': {
      outline: '-webkit-focus-ring-color auto 1px',
      outlineOffset: 0,
      outlineColor: '#f44336',
      outlineStyle: 'auto',
      outlineWidth: 1
    }
  }
}));

const MarkdownInput = props => {
  const classes = useStyles();
  const { validate } = props;
  const isRequired = useMemo(
    () => !!validate && !![].concat(validate).find(v => v.toString() === required().toString()),
    [validate]
  );
  const [tab, setTab] = useState('write');
  const {
    input: { value, onChange, onBlur },
    meta: { error, touched }
  } = useInput(props);

  return (
    <FormControl fullWidth className={`ra-input-mde ${!!error ? classes.validationError : ''}`}>
      <Labeled {...props} isRequired={isRequired}>
        <ReactMde
          value={value}
          onChange={value => onChange(value)}
          onTabChange={tab => setTab(tab)}
          generateMarkdownPreview={async markdown => <Markdown>{markdown}</Markdown>}
          selectedTab={tab}
          childProps={{
            textArea: { onBlur: () => onBlur() }
          }}
          {...props}
        />
      </Labeled>
      <FormHelperText error={!!error} margin="dense" variant="outlined">
        <InputHelperText error={error} helperText={props.helperText} touched={error || touched} />
      </FormHelperText>
    </FormControl>
  );
};

export default MarkdownInput;
