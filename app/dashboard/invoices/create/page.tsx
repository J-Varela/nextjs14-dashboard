import { Metadata } from 'next';
import { fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
  const customers = await fetchCustomers();

  return <div></div>;
}
