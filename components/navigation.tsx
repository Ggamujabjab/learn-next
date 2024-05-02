"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styled from "../styled/navigation.module.css";

export default function Navigation(){
    const path = usePathname();
    const [count, setCount] = useState(0);
    return (
        <nav className={styled.nav}>
            <ul>
                <li><Link href="/">Home</Link> {path === "/" ? "◈◈◈" : ""}</li>
                <li><Link href="/introduction">Introduction</Link> {path === "/introduction" ? "◈◈◈" : ""}</li>
                <li><Link href="/introduction/greeting">Greeting</Link> {path === "/introduction/greeting" ? "◈◈◈" : ""}</li>
                <li><Link href="/introduction/history">History</Link> {path === "/introduction/history" ? "◈◈◈" : ""}</li>
            </ul>
        </nav>
    )
}