import React, { Dispatch, SetStateAction } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface datePeckerProps {
  createdAt: Date;
  setCreatedAt: Dispatch<SetStateAction<Date>>;
}
export default function PersianDatepicker(props: datePeckerProps) {
  const { createdAt, setCreatedAt } = props;

  const changeDateHandler = (e: string) => {
    const date = new Date(e);
    setCreatedAt(date);
  };

  return (
    <div>
      <h3 className="mb-1">تاریخ سایت</h3>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={createdAt}
        onChange={changeDateHandler}
        inputClass="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-100 sm:text-sm sm:leading-6"
      />
    </div>
  );
}
