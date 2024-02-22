"use client";

import { ChevronDown, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  category,
  propertyCategoryTypeItems,
} from "@/constants/propertyTypeItems";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function CategoryDialog() {
  const router = useRouter();
  const [category, setCategory] = useState<string | null>();
  const [subcategories, setSubcategory] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const triggerDialogStyle =
    "flex w-9 h-9 p-2 rounded-md items-center justify-center hover:bg-primary hover:bg-primary/10 hover:text-primary";
  const gridStyle =
    "grid-col grid-cols-3 grid-flow-row overflow-scroll h-[300px] w-full";
  const gridElementStyle =
    "border h-fit rounded-md p-2 text-sm font-normal hover:border-black ";

  useEffect(() => {
    setSelected(null);
    setCategory(propertyCategoryTypeItems.sort()[0].category);
    const array = propertyCategoryTypeItems
      .sort()[0]
      .subcategories.map((item) => item.title);
    setSubcategory(array);
  }, []);

  // FUNCTIONS
  function handleChangeInSubcategory() {
    const cat = propertyCategoryTypeItems.find(
      (item) => item.category === category
    );
    const subcats = cat?.subcategories.map((item) => item.title);
    console.log("category: " + category);
    console.log("subcats: " + subcats);
    setSubcategory(subcats ?? []);
  }

  function handleDropdownMenuTapped(item: any) {
    setCategory(item.category);
    handleChangeInSubcategory();
    setSelected(null);
  }

  return (
    <Dialog>
      <DialogTrigger onClick={() => setSelected(null)}>
        <Plus className={triggerDialogStyle} />
      </DialogTrigger>
      <DialogContent className="space-y-4 max-w-[640px]">
        <DialogHeader>
          <DialogTitle>Nuova Proprietà</DialogTitle>
          <DialogDescription>
            Per aggiungere una nuova proprietà, seleziona la categoria e il tipo
            e clicca su prosegui
          </DialogDescription>
        </DialogHeader>
        <div className="row justify-between items-center">
          <p className="text-sm font-normal">Categoria</p>
          <DropdownMenu>
            <DropdownMenuTrigger className="row w-fit h-fit space-x-4 items-center border border-black rounded-md p-2">
              <p className="text-sm font-medium">{category}</p>
              <ChevronDown size={16} color="gray" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {propertyCategoryTypeItems.sort().map((item, i) => (
                <DropdownMenuItem
                  key={i}
                  onClick={() => handleDropdownMenuTapped(item)}
                  className={
                    category === item.category
                      ? "text-primary bg-primary/15"
                      : ""
                  }
                >
                  {item.category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="col space-y-2">
          <Input placeholder="Digita la sottocategoria più idonea..." />
          {/* <div className='flex px-2 py-1 border rounded-md text-sm font-normal text-slate-500'>{'Digita la sottocategoria più idonea...'}</div> */}
          <div
            className={
              gridStyle +
              (propertyCategoryTypeItems.sort()[0].subcategories.length > 1
                ? null
                : "bg-primary/15 rounded-md")
            }
          >
            {subcategories?.map((item) => (
              <p
                className={
                  gridElementStyle +
                  (selected == item
                    ? " bg-primary/15 text-primary border-primary hover:border-primary"
                    : "")
                }
                onClick={() => setSelected(item)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={selected == null}
            type="submit"
            className="w-full"
            onClick={() => router.push("/properties/new")}
          >
            Prosegui
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
