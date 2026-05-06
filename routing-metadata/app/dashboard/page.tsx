import {Metadata} from 'next'

export const metadata:Metadata = {
  title:{
    absolute:"Dashboard"
  }, 
  description: "Dash desc"
  // description and keywords are NOT defined here
}

export default function Page() {
  return (
    <div>Page</div>
  );
}