'use client'

import Button from "@/components/Button";
import Input from "@/components/input";
import {createRecord, getRecordsByKeyValue, printQuerySnapshot} from "@/utils/db_crud";

const Page = () => {
    const wdInfo = [
        {type: "text", name: "company"},
        {type: "text", name: "title"},
        {type: "text", name: "description"},
        {type: "file", name: "thumbnail"},
    ]

    const onSubmitCallback = async (e: any) => {
        e.preventDefault()
        // console.log(e.target)
        const company = e.target[0].value
        const querySnapshot
            = await getRecordsByKeyValue(e, 'wdList', "company", company)


        if (querySnapshot.empty) {
            // CREATE
            const obj: any = {}

            for (let i = 0; i < e.target.length - 1; ++i) {
                const key = wdInfo[i].name
                const value = e.target[i].value
                obj[key] = value
            }
            // console.log(`${Object.keys(obj)}`)
            await createRecord(e, 'wdList', obj)
        } else {
            // UPDATE

        }

        // CHECK
        const q
            = await getRecordsByKeyValue(e, 'wdList', "company", company)
        await printQuerySnapshot(q)
    }

    return (<form className={`w-fit  bg-gray-100 flex flex-col justify-center items-center p-8`}
                  onSubmit={onSubmitCallback}>
        <div className={` bg-gray-100 flex flex-wrap justify-between items-center gap-3`}>
            {wdInfo.map((e, i) => <Input key={i} type={e.type} name={e.name}/>)}
        </div>

        <Button type={"submit"} content={"wd 저장"} callback={undefined}/>
    </form>);
};

export default Page;