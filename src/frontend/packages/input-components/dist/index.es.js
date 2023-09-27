import {jsx as $kvH6Q$jsx, jsxs as $kvH6Q$jsxs} from "react/jsx-runtime";
import $kvH6Q$react, {useCallback as $kvH6Q$useCallback, useEffect as $kvH6Q$useEffect} from "react";
import {ImageInput as $kvH6Q$ImageInput, AutocompleteArrayInput as $kvH6Q$AutocompleteArrayInput, useRecordContext as $kvH6Q$useRecordContext, AutocompleteInput as $kvH6Q$AutocompleteInput, TextInput as $kvH6Q$TextInput, ReferenceArrayInput as $kvH6Q$ReferenceArrayInput, ReferenceInput as $kvH6Q$ReferenceInput} from "react-admin";
import {useDataServers as $kvH6Q$useDataServers} from "@semapps/semantic-data-provider";
import {useController as $kvH6Q$useController} from "react-hook-form";




// Since we overwrite FileInput default parse, we must transform the file
// See https://github.com/marmelab/react-admin/blob/2d6a1982981b0f1882e52dd1a974a60eef333e59/packages/ra-ui-materialui/src/input/FileInput.tsx#L57
const $00df5ecaefd5b71e$var$transformFile = (file)=>{
    const preview = URL.createObjectURL(file);
    return {
        rawFile: file,
        src: preview,
        title: file.name
    };
};
const $00df5ecaefd5b71e$var$format = (v)=>{
    if (typeof v === "string") return {
        src: v
    };
    if (Array.isArray(v)) return v.map((e)=>typeof e === "string" ? {
            src: e
        } : e);
    return v;
};
const $00df5ecaefd5b71e$var$parse = (v)=>{
    if (v instanceof File) return $00df5ecaefd5b71e$var$transformFile(v);
    if (v && v.src && !v.rawFile) return v.src;
    if (Array.isArray(v)) return v.map((e)=>$00df5ecaefd5b71e$var$parse(e));
    return v;
};
const $00df5ecaefd5b71e$var$ImageInput = (props)=>/*#__PURE__*/ (0, $kvH6Q$jsx)((0, $kvH6Q$ImageInput), {
        ...props,
        format: $00df5ecaefd5b71e$var$format,
        parse: $00df5ecaefd5b71e$var$parse
    });
var $00df5ecaefd5b71e$export$2e2bcd8739ae039 = $00df5ecaefd5b71e$var$ImageInput;









const $c87f07c114e8d06d$var$OptionRenderer = ({ optionText: optionText, dataServers: dataServers })=>{
    const record = (0, $kvH6Q$useRecordContext)();
    const server = dataServers && Object.values(dataServers).find((server)=>record.id.startsWith(server.baseUrl));
    return /*#__PURE__*/ (0, $kvH6Q$jsxs)("span", {
        children: [
            record[optionText],
            server && /*#__PURE__*/ (0, $kvH6Q$jsxs)("em", {
                className: "serverName",
                style: {
                    color: "grey"
                },
                children: [
                    "\xa0(",
                    server.name,
                    ")"
                ]
            })
        ]
    });
};
var $c87f07c114e8d06d$export$2e2bcd8739ae039 = $c87f07c114e8d06d$var$OptionRenderer;


const $6339f423cc6c3ee3$var$MultiServerAutocompleteArrayInput = ({ optionText: optionText, ...rest })=>{
    const dataServers = (0, $kvH6Q$useDataServers)();
    const matchSuggestion = (0, $kvH6Q$useCallback)((filterValue, choice)=>choice[optionText].toLowerCase().match(filterValue.toLowerCase()), [
        optionText
    ]);
    return /*#__PURE__*/ (0, $kvH6Q$jsx)((0, $kvH6Q$AutocompleteArrayInput), {
        matchSuggestion: matchSuggestion,
        optionText: /*#__PURE__*/ (0, $kvH6Q$jsx)((0, $c87f07c114e8d06d$export$2e2bcd8739ae039), {
            optionText: optionText,
            dataServers: dataServers
        }),
        inputText: (choice)=>choice[optionText],
        ...rest
    });
};
var $6339f423cc6c3ee3$export$2e2bcd8739ae039 = $6339f423cc6c3ee3$var$MultiServerAutocompleteArrayInput;






const $b0f28d60b9360e4c$var$MultiServerAutocompleteInput = ({ optionText: optionText, ...rest })=>{
    const dataServers = (0, $kvH6Q$useDataServers)();
    // We cannot use OptionRenderer like MultiServerAutocompleteArrayInput because there is a bug with AutocompleteInput
    const optionTextWithServerName = (0, $kvH6Q$useCallback)((record)=>{
        if (record && dataServers) {
            const server = Object.values(dataServers).find((server)=>record.id.startsWith(server.baseUrl));
            return record[optionText] + (server ? ` (${server.name})` : "");
        }
    }, [
        optionText,
        dataServers
    ]);
    return /*#__PURE__*/ (0, $kvH6Q$jsx)((0, $kvH6Q$AutocompleteInput), {
        optionText: optionTextWithServerName,
        ...rest
    });
};
var $b0f28d60b9360e4c$export$2e2bcd8739ae039 = $b0f28d60b9360e4c$var$MultiServerAutocompleteInput;





const $5caa484b443e2e14$var$MultiLinesInput = (props)=>/*#__PURE__*/ (0, $kvH6Q$jsx)((0, $kvH6Q$TextInput), {
        multiline: true,
        minRows: 2,
        format: (value)=>value ? Array.isArray(value) ? value.join("\n") : value : "",
        parse: (value)=>value.split(/\r?\n/),
        ...props
    });
var $5caa484b443e2e14$export$2e2bcd8739ae039 = $5caa484b443e2e14$var$MultiLinesInput;






const $0a220aa421897b42$var$ReferenceArrayInput = (props)=>{
    const { field: { value: value, onChange: onChange } } = (0, $kvH6Q$useController)({
        name: props.source
    });
    (0, $kvH6Q$useEffect)(()=>{
        if (value && !Array.isArray(value)) onChange([
            value
        ]);
    }, [
        value,
        onChange
    ]);
    // Wait for change to be effective before rendering component
    // Otherwise it will be wrongly initialized and it won't work
    if (value && !Array.isArray(value)) return null;
    return /*#__PURE__*/ (0, $kvH6Q$jsx)((0, $kvH6Q$ReferenceArrayInput), {
        ...props
    });
};
var $0a220aa421897b42$export$2e2bcd8739ae039 = $0a220aa421897b42$var$ReferenceArrayInput;





const $4dc5aebf6fd9ab50$var$format = (value)=>{
    // If there is no value, return immediately
    if (!value) return value;
    // If the value is an object with an @id field, return the uri
    return typeof value === "object" ? value.id || value["@id"] : value;
};
const $4dc5aebf6fd9ab50$var$ReferenceInput = ({ children: children, ...rest })=>{
    const child = (0, $kvH6Q$react).Children.only(children);
    return /*#__PURE__*/ (0, $kvH6Q$jsx)((0, $kvH6Q$ReferenceInput), {
        ...rest,
        children: /*#__PURE__*/ (0, $kvH6Q$react).cloneElement(child, {
            format: $4dc5aebf6fd9ab50$var$format
        })
    });
};
var $4dc5aebf6fd9ab50$export$2e2bcd8739ae039 = $4dc5aebf6fd9ab50$var$ReferenceInput;




export {$00df5ecaefd5b71e$export$2e2bcd8739ae039 as ImageInput, $6339f423cc6c3ee3$export$2e2bcd8739ae039 as MultiServerAutocompleteArrayInput, $b0f28d60b9360e4c$export$2e2bcd8739ae039 as MultiServerAutocompleteInput, $5caa484b443e2e14$export$2e2bcd8739ae039 as MultiLinesInput, $0a220aa421897b42$export$2e2bcd8739ae039 as ReferenceArrayInput, $4dc5aebf6fd9ab50$export$2e2bcd8739ae039 as ReferenceInput};
//# sourceMappingURL=index.es.js.map
