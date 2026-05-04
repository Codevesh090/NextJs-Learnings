import {Card} from '@/components/card'
import Link from 'next/link'

export default function Notifications() {
  return <Card>
    <div>Archived Notifications</div>
    <div>
      <Link href="/complex-dashboard" className='text-blue-600'>Default</Link>
    </div>
    </Card>;
}