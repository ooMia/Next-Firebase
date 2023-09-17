import React from 'react';
import Button2 from "@/components/Button2";
import Wanted from "@/public/wanted.svg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <div className={`flex-grow justify-between sticky flex flex-row top-0 left-0 w-full bg-white opacity-90`}>
            <div className={`flex flex-row`}>
                <Link href={"/"}>
                    <Image src={Wanted} alt={"wanted logo"} className={"mx-12 my-3"}/>
                </Link>

                <div className={`group w-fit`}>
                    <Button2 key={"채용"} href={"/wdlist"}>채용</Button2>
                    <Button2 key={"커리어"} href={"/themes/kakaovc"}>커리어</Button2>
                    <Button2 key={"소셜"} href={"/themes/kakaovc"}>소셜</Button2>
                    <Button2 key={"이력서"} href={"/themes/kakaovc"}>이력서</Button2>
                    <Button2 key={"프리랜서"} href={"/themes/kakaovc"}>프리랜서</Button2>
                    <Button2 key={"더보기"} href={"/wd/register"}>더보기</Button2>
                </div>
            </div>
            <Button2 key={"로그인"} href={"/login"}>로그인</Button2>
        </div>
    );
};

export default Banner;