import { prisma } from "@/db";
import Link from "next/link";
import { Itemm } from "./components/Items";

function getItems() {
  return prisma.todo.findMany();
}

async function toggleItem(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: { id }, data: { complete } })
}

export default async function Home() {
  const todos = await getItems();
  
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outlite-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <Item key={todo.id} {...todo} toggleItem={toggleItem} />
        ))}
      </ul>
    </>
  );
}
