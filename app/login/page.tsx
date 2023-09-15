import Image from "next/image";
import Wanted from "@/public/wanted.svg"


const Page = () => {
    return (
            <div className={"flex border-2"}>
                <Image src={Wanted} alt={"wanted logo"}/>

            </div>
    );
};

export default Page;