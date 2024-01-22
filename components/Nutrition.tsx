import React from "react"

export default function Nutrition({
  text,
  value,
}: {
  text: string
  value: string
}) {
  return (
    <div>
      <div>{text}</div>
      <div>{value}</div>
    </div>
  )
}
