export default function byeLayout({children}:{children:React.ReactNode}){
  return(
    <div>
      <h1 className="text-5xl text-blue-700">Hello from the byeLayout</h1>
      {children}
    </div>
  )
}