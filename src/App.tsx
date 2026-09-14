import {useState} from 'react';
import {QueryClient,QueryClientProvider,useQuery} from '@tanstack/react-query';
import {Alert,Badge,Button,Card,Input,Spinner,Table,Modal} from './components';
import {fetchCoins} from './api';
import './styles.css';

const queryClient=new QueryClient({defaultOptions:{queries:{staleTime:60_000,retry:2,refetchOnWindowFocus:false}}});

function Dashboard(){
 const[q,setQ]=useState(''); const[open,setOpen]=useState(false);
 const{data=[],isPending,isFetching,error,refetch}=useQuery({queryKey:['market','usd'],queryFn:fetchCoins});
 const rows=data.filter(x=>x.name.toLowerCase().includes(q.toLowerCase())).map(x=>({name:x.name,price:x.current_price}));
 return <main><header><div><Badge>Accessible UI Kit</Badge><h1>Market Components</h1><p>Reusable React components with live server state.</p></div><Button onClick={()=>setOpen(true)} aria-label="Open component details">View details</Button></header><Card title="Live market"><div className="toolbar"><Input aria-label="Search assets" placeholder="Search assets" value={q} onChange={e=>setQ(e.target.value)}/><Button onClick={()=>refetch()} disabled={isFetching}>{isFetching?'Refreshing…':'Refresh'}</Button></div>{isPending?<div className="loading"><Spinner/> Loading market data…</div>:error?<Alert>Unable to load market data. <button onClick={()=>refetch()}>Try again</button></Alert>:<><p aria-live="polite">{isFetching?'Updating rates…':`${rows.length} assets shown`}</p><Table rows={rows}/></>}</Card><Modal open={open} title="Component library" onClose={()=>setOpen(false)}><p>Eight reusable components use semantic HTML, keyboard access and accessible labels. React Query manages asynchronous server state, caching, retries and background refresh.</p></Modal></main>
}

export default function App(){return <QueryClientProvider client={queryClient}><Dashboard/></QueryClientProvider>}
