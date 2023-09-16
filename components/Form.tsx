'use client'

import {useState} from "react";
import Button from "@/components/Button";



const Form = ({onSubmitCallback}:any) => {
    const [buttonDisabled, setButtonDisabled]  = useState(true)

    return (
        <form className="min-w-full" onSubmit={onSubmitCallback}>
            <label className="block text-sm font-bold text-slate-400 tracking-tighter mb-2">이메일</label>
            <input onChange={(e)=>{
                setButtonDisabled(!e.target.checkValidity())
            }} type="email" name="email"
                   className="rounded-lg min-w-full peer p-3 border invalid:border-pink-400 focus:border-pink-400 valid:border-black "
                   placeholder="이메일을 입력해주세요."/>
            <p className="peer-valid:invisible peer-invalid:visible m-2 text-xs mb-4 tracking-tighter"
               style={{color: "rgb(254,86,107)"}}>
                올바른 이메일을 입력해주세요.
            </p>
            <Button type={"submit"} disabled={buttonDisabled} content={"이메일로 계속하기"} callback={undefined}/>
        </form>
    );
};

export default Form;