import {useEffect,useState} from 'react'
import {evento} from '../../config/evento'
export function tiempoRestante(ahora=Date.now()){const total=Math.max(0,Math.floor((new Date(evento.fecha).getTime()-ahora)/1000));return {total,valores:[Math.floor(total/86400),Math.floor(total/3600)%24,Math.floor(total/60)%60,total%60]}}
export default function CuentaRegresiva(){const [tiempo,setTiempo]=useState(()=>tiempoRestante());useEffect(()=>{const id=setInterval(()=>setTiempo(tiempoRestante()),1000);return()=>clearInterval(id)},[]);return <section className="cuentaregresiva section"><p className="eyebrow">CADA VEZ FALTA MENOS</p>{tiempo.total>0?<div className="contador" aria-label="Tiempo hasta la boda">{tiempo.valores.map((n,i)=><div key={i}><span>{String(n).padStart(2,'0')}</span><small>{['DÍAS','HORAS','MINUTOS','SEGUNDOS'][i]}</small></div>)}</div>:<h2>¡Llegó el gran día!</h2>}</section>}

import './cuentaregresiva.css'
