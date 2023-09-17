interface props {
    key: any
    company: string
    title: string
    description: string
}

const Event = (props:props) => {

    const d = props.description
    const description = d.split('\\n')

    return (
        <div key={props.key} className={`p-10`}>
            <h1 className={`text-3xl font-bold`}>{props.title}</h1>
            <span className={`p-10 font-semibold text-gray-400`}>
                {description.map((e,i)=>(
                    <p className={`m-1`} key={i}>{e}</p>
                ))}
            </span>
        </div>
    );
};

export default Event;