import React from 'react';

type ButtonProps=React.ButtonHTMLAttributes<HTMLButtonElement>&{variant?:'primary'|'secondary'};
export const Button=React.memo(({variant='primary',children,className='',...p}:ButtonProps)=><button className={`btn ${variant} ${className}`} {...p}>{children}</button>);
export const Card=React.memo(({title,children}:{title:string;children:React.ReactNode})=><section className="card"><h2>{title}</h2>{children}</section>);
export const Input=React.memo((p:React.InputHTMLAttributes<HTMLInputElement>)=><input className="input" {...p}/>);
export const Badge=React.memo(({children}:{children:React.ReactNode})=><span className="badge">{children}</span>);
export const Alert=React.memo(({children}:{children:React.ReactNode})=><div role="status" className="alert">{children}</div>);
export const Spinner=React.memo(()=> <span className="spinner" role="status" aria-label="Loading"/>);
export const Modal=React.memo(({open,title,onClose,children}:{open:boolean;title:string;onClose:()=>void;children:React.ReactNode})=>open?<div className="overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div className="modal"><h2 id="modal-title">{title}</h2>{children}<Button variant="secondary" onClick={onClose}>Close</Button></div></div>:null);
export const Table=React.memo(({rows}:{rows:{name:string;price:number}[]})=><table><caption className="sr-only">Live market data</caption><thead><tr><th scope="col">Asset</th><th scope="col">Price</th></tr></thead><tbody>{rows.map(r=><tr key={r.name}><th scope="row">{r.name}</th><td>${r.price.toLocaleString()}</td></tr>)}</tbody></table>);
