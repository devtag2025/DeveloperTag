"use client"

import { useState, useEffect, useRef } from "react"

export default function SmoothFollower() {
    const mousePosition = useRef({ x: 0, y: 0 })
    const dotPosition = useRef({ x: 0, y: 0 })
    const borderDotPosition = useRef({ x: 0, y: 0 })
    const animationRef = useRef<number | undefined>(undefined)

    const [renderPos, setRenderPos] = useState({ dot: { x: 0, y: 0 }, border: { x: 0, y: 0 } })
    const [isHovering, setIsHovering] = useState(false)

    const DOT_SMOOTHNESS = 0.2
    const BORDER_DOT_SMOOTHNESS = 0.1

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY }
        }

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).matches("a, button, img, input, textarea, select")) {
                setIsHovering(true)
            }
        }

        const handleMouseOut = (e: MouseEvent) => {
            if ((e.target as HTMLElement).matches("a, button, img, input, textarea, select")) {
                setIsHovering(false)
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseover", handleMouseOver)
        document.addEventListener("mouseout", handleMouseOut)

        const animate = () => {
            const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor

            dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS)
            dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS)

            borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS)
            borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS)

            setRenderPos({
                dot: { x: dotPosition.current.x, y: dotPosition.current.y },
                border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseover", handleMouseOver)
            document.removeEventListener("mouseout", handleMouseOut)
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [])

    if (typeof window === "undefined") return null

    return (
        <div className="pointer-events-none fixed inset-0 z-50" >
            <div
                className="absolute rounded-full dark:bg-white bg-black"
                style={{
                    width: "8px",
                    height: "8px",
                    transform: "translate(-50%, -50%)",
                    left: `${renderPos.dot.x}px`,
                    top: `${renderPos.dot.y}px`,
                }
                }
            />

            <div
                className="absolute rounded-full border dark:border-white border-black"
                style={{
                    width: isHovering ? "44px" : "28px",
                    height: isHovering ? "44px" : "28px",
                    transform: "translate(-50%, -50%)",
                    left: `${renderPos.border.x}px`,
                    top: `${renderPos.border.y}px`,
                    transition: "width 0.3s, height 0.3s",
                }}
            />
        </div>
    )
}