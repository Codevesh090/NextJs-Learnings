export default async function Docs({
  params
}:{params:Promise<{slug:string[]}>}) {

    const {slug} = await params;

  if(slug?.length===2){
    return (
    <div>
      <h1 className="text-5xl text-amber-100">This is {slug[0]} and {slug[1]} </h1>
    </div>
    )
    }else if(slug?.length===1){
    return (
    <div>
      <h1 className="text-5xl text-amber-100">This is {slug[0]} </h1>
    </div>
    )
    }

  return (
    <div>
      <h1 className="text-5xl text-amber-100">This is docs page </h1>
    </div>
  );
}

//double suare brackets