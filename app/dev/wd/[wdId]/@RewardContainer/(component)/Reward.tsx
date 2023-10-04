export default function Reward() {
  return (
    <div className={`p-3 relative border border-gray-400`}>
      <div className={`rounded-full border top-2 right-2 absolute px-2`}>공유</div>
      <div className={`grid grid-cols-2 grid-flow-row gap-3 `}>
        <h3 className={`text-[15px] col-span-2`}>합격보상금</h3>
        <div>
          <h3 className={`text-sm text-gray-400`}>추천인</h3>
          <h3 className={`text-sm text-black`}>500,000원</h3>
        </div>
        <div>
          <h3 className={`text-sm text-gray-400`}>지원자</h3>
          <h3 className={`text-sm text-black`}>500,000원</h3>
        </div>
        <button
          className={`py-3 text-blue-600 font-bold px-3 col-span-2 rounded-3xl border border-blue-600`}
        >
          북마크하기
        </button>
        <button
          className={`py-3 text-white font-bold px-3 col-span-2 rounded-3xl border bg-blue-600`}
        >
          지원하기
        </button>
        <div className={`flex gap-2`}>
          <button className={`flex items-center gap-1 border rounded px-1 text-gray-300 text-xl`}>
            ♥ <p className={`inline text-black text-sm`}>1</p>
          </button>
          <div className={`rounded-full`}>profile</div>
        </div>
      </div>
    </div>
  )
}
