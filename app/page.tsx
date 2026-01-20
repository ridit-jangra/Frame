"use client";

import { AlertDialog } from "@/ui/alert-dialog";
import { Button } from "@/ui/button";
import { Checkbox } from "@/ui/checkbox";
import { CheckboxGroup } from "@/ui/checkbox-group";
import { ContextMenu } from "@/ui/context-menu";
import { Group } from "@/ui/group";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { ScrollArea } from "@/ui/scroll-area";
import { Select } from "@/ui/select";
import { FilterIcon, SearchIcon } from "lucide-react";

export default function Home() {
  return (
    <ScrollArea className="h-screen bg-background">
      <div className="flex w-full flex-col items-baseline px-[25%] justify-center gap-12">
        <div>
          <p className="font-mono text-2xl mb-2">Buttons</p>
          <div className="grid grid-cols-3 gap-3 ">
            <Button variant={"default"}>Default Button</Button>
            <Button variant={"ghost"}>Ghost Button</Button>
            <Button variant={"outline"}>Outline Button</Button>
            <Button variant={"danger"}>Danger Button</Button>
            <Button variant={"warning"}>Warning Button</Button>
          </div>
        </div>
        <div>
          <p className="font-mono text-2xl mb-2">Input & Label</p>
          <div className="grid grid-cols-3 gap-3 ">
            <Group>
              <Label>Normal Input</Label>
              <Input placeholder="Input..." className="w-full" />
            </Group>
            <Group>
              <Label>Icon Input</Label>
              <Input
                placeholder="Input..."
                className="w-full"
                Icons={[{ icon: SearchIcon }]}
              />
            </Group>
            <Group>
              <Label>Multi Icons Input</Label>
              <Input
                placeholder="Input..."
                className="w-full"
                Icons={[{ icon: SearchIcon }, { icon: FilterIcon }]}
              />
            </Group>
          </div>
        </div>
        <div>
          <p className="font-mono text-2xl mb-2">Select</p>
          <div className="grid grid-cols-3 gap-3 ">
            <Group>
              <Label>Normal Select</Label>
              <Select
                items={[
                  { label: "Apple", value: "apple" },
                  { label: "Banana", value: "banana" },
                ]}
              />
            </Group>
          </div>
        </div>
        <div>
          <p className="font-mono text-2xl mb-2">Checkbox</p>
          <div className="grid grid-cols-3 gap-3 ">
            <Group>
              <Label>Normal Checkbox</Label>
              <Checkbox
                onCheckedChange={(e) => console.log("changed value", e)}
              />
            </Group>
            <Group>
              <Label>Checkbox Group</Label>
              <CheckboxGroup
                items={[
                  { label: "Apple" },
                  { label: "Banana" },
                  { label: "Orange" },
                ]}
              />
            </Group>
          </div>
        </div>
        <div>
          <p className="font-mono text-2xl mb-2">ScrollArea</p>
          <div className="grid grid-cols-3 gap-3 ">
            <Group>
              <Label>Normal ScrollArea</Label>
              <ScrollArea className="h-48">
                <p>
                  Vernacular architecture is building done outside any academic
                  tradition, and without professional guidance. It is not a
                  particular architectural movement or style, but rather a broad
                  category, encompassing a wide range and variety of building
                  types, with differing methods of construction, from around the
                  world, both historical and extant and classical and modern.
                  Vernacular architecture constitutes 95% of the world's built
                  environment, as estimated in 1995 by Amos Rapoport, as
                  measured against the small percentage of new buildings every
                  year designed by architects and built by engineers.
                </p>
                <p>
                  This type of architecture usually serves immediate, local
                  needs, is constrained by the materials available in its
                  particular region and reflects local traditions and cultural
                  practices. The study of vernacular architecture does not
                  examine formally schooled architects, but instead that of the
                  design skills and tradition of local builders, who were rarely
                  given any attribution for the work. More recently, vernacular
                  architecture has been examined by designers and the building
                  industry in an effort to be more energy conscious with
                  contemporary design and construction—part of a broader
                  interest in sustainable design.
                </p>
              </ScrollArea>
            </Group>
          </div>
        </div>
        <div>
          <p className="font-mono text-2xl mb-2">Alert Dialog</p>
          <div className="grid grid-cols-3 gap-3 ">
            <Group>
              <Label>Normal Alert Dialog</Label>
              <AlertDialog
                trigger={<Button variant={"danger"}>Click it!!</Button>}
              />
            </Group>
          </div>
        </div>
        <div>
          <p className="font-mono text-2xl mb-2">ContextMenu</p>
          <div className="grid grid-cols-3 gap-3 ">
            <Group>
              <Label>Normal Context Menu</Label>
              <ContextMenu
                items={[
                  { title: "Item 1", type: "item" },
                  { title: "Item 2", type: "item" },
                  { title: "Sep", type: "separator" },
                  { title: "Item 3", type: "item" },
                  { title: "Item 4", type: "item" },
                ]}
              />
            </Group>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
