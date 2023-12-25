"use client";
import React from "react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import Image from "next/image";

export default function CustomFilter({ options, title }: CustomFilterProps) {
  const [selected, setSelected] = useState(options);

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="block truncate">
            <span className="block truncate">{title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
}
