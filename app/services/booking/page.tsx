import { BookingFlow } from '@/components/el-taller-del-cabell/BookingFlow';

export default function BookingPage({
  searchParams
}: {
  searchParams: { service?: string };
}) {
  return <BookingFlow initialService={searchParams.service} />;
}
