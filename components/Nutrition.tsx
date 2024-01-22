import React from "react"

export default function Nutrition({
  text,
  value,
}: {
  text: string
  value: string
}) {
  return (
    <div className="flex w-full gap-6 border-b border-neutral-light-grey pb-3 pt-3 first:pt-0 last:border-0 last:pb-0">
      <div className="w-1/2">{text}</div>
      <div className="w-1/2 font-bold text-primary-nutmeg">{value}</div>
    </div>
  )
}
