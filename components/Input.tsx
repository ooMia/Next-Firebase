import React, {HTMLInputTypeAttribute} from 'react';

interface props {
    type: HTMLInputTypeAttribute
    name: string
}


const Input = (props: props) => {
    return (
        <div>
            <label className="block text-sm font-bold text-slate-400 tracking-tighter mb-2">{props.name}</label>
            <input required type={props.type} name={props.name}
                   className={`peer rounded-lg min-w-full peer p-3 border invalid:border-pink-400 focus:border-pink-400 valid:border-black`                   }
                   placeholder={props.name}/>
            <p className="peer-valid:invisible peer-invalid:visible m-2 text-xs mb-4 tracking-tighter"
               style={{color: "rgb(254,86,107)"}}>
                field required {props.name}
            </p>
        </div>
    );
};

export default Input;