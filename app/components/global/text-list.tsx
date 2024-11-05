"use client";

import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";

interface textListProps {
  title: string;
  className: string;
  TextLists: string[];
  setTextLists: Dispatch<SetStateAction<string[]>>;
}
export default function TextList(props: textListProps) {
  // add new input field
  const addHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    props.setTextLists([...props.TextLists, ""]);
  };

  // remove selected input field
  const deleteHandler = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault();
    const list = [...props.TextLists];
    list.splice(index, 1);
    props.setTextLists(list);
    console.log(index);
  };

  //change value
  const changeHandler = (e: React.MouseEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value }: { value: string } = e.target as HTMLInputElement;
    const list = [...props.TextLists];
    list[index] = value as unknown as string;
    props.setTextLists(list);
  };

  return (
    <div>
      <p className="mb-1">{props.title}</p>
      {props.TextLists?.map((item, index) => {
        return (
          <div key={index} className="mb-4 flex gap-x-3">
            <input
              type="text"
              value={item}
              className={props.className}
              onChange={(e) => {
                changeHandler(e, index);
              }}
            />
            <button
              onClick={(e) => deleteHandler(e, index)}
              className="p-2 bg-red-500 flex items-center rounded-md text-white font-light gap-x-2"
            >
              حذف
              <AiOutlineDelete />
            </button>
          </div>
        );
      })}
      <button
        onClick={addHandler}
        className="p-2 bg-blue-800 flex items-center rounded-md text-white font-light gap-x-2"
      >
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}
