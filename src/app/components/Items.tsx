"use client"

type ItemProps = {
  id: string
  title: string
  complete: boolean
  toggleItem: (id: string, complete: boolean) => void
}

export function TodoItem({ id, title, complete, toggleItem }: ItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => toggleItem(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  )
}