'use client'

import Image from "next/image";
import Wanted from "@/public/wanted.svg"
import Apple from "@/public/apple.svg"
import Google from "@/public/google.svg"
import Kakao from "@/public/kakao.svg"
import Form from "@/components/Form";
import {createRecord, getRecordsByKeyValue, printQuerySnapshot} from "@/utils/db_crud";

const Page = () => {

    interface Schema {
        email: string | undefined;
    }

    const onSubmitCallback = async (e: any) => {
        e.preventDefault()

        const userInput = e.target[0].value
        const obj: Schema = {
            email: userInput
        }

        const querySnapshot
            = await getRecordsByKeyValue(e, 'users', "email", userInput)

        if (querySnapshot.empty) {
            await createRecord(e, 'users', obj)
        } else {
            printQuerySnapshot(querySnapshot)
        }

    }

    return (
        <div className={"max-h-full rounded flex flex-col justify-center items-center border-2 bg-white p-4 w-96 m-3"}>
            <Image src={Wanted} alt={"wanted logo"} className={"pt-14 mb-8"}/>
            <h1 className={"font-bold text-xl text-center mb-6 tracking-tighter"}>
                하나의 계정으로<br/>더욱 편리하게
            </h1>
            <h2 className={"text-xs text-center mb-12 tracking-tighter"} style={{color: "rgb(168,162,168)"}}>
                원티드가 제공하는 서비스를<br/>하나의 계정으로 모두 이용할 수 있습니다.
            </h2>
            <Form onSubmitCallback={onSubmitCallback}/>
            <h2 className={"text-xs text-gray-600 text-center p-4"}>
                또는
            </h2>
            <div className={"flex flex-row justify-center items-center "}>
                <div className={"flex flex-col justify-center items-center m-3"}>
                    <Image src={Apple} alt={"apple logo"}/>
                    <h2 className={"text-xs text-gray-600 text-center mb-8 m-2"}>
                        Apple
                    </h2>
                </div>
                <div className={"flex flex-col justify-center items-center m-3"}>
                    <Image src={Google} alt={"google logo"}/>
                    <h2 className={"text-xs text-gray-600 text-center mb-8 m-2"}>
                        Google
                    </h2>
                </div>
                <div className={"flex flex-col justify-center items-center m-3"}>
                    <Image src={Kakao} alt={"kakao logo"}/>
                    <h2 className={"text-xs text-gray-600 text-center mb-8 m-2"}>
                        Kakao
                    </h2>
                </div>
            </div>
            <h2 className={"text-xs text-gray-800 text-center"}>
                계정을 잊으셨나요? &gt;
            </h2>
            <hr className="min-w-full my-3 bg-gray-50 border md:my-10 "/>
            <div className={"flex flex-row justify-center items-center "}>
                <h2 className={"text-xs text-gray-600 text-center p-1"}>이용약관</h2>
                <h2 className={"text-xs text-gray-600 text-center p-1"}>개인정보처리방침</h2>
            </div>
            <h2 className={"text-xs text-gray-600 text-center p-2"}>© Wantedlab, Inc.</h2>
            <select className={"text-sm text-gray-600 text-center w-"}>
                <option>한국어</option>
                <option>English</option>
                <option>日本語</option>
            </select>
        </div>);
};

export default Page;