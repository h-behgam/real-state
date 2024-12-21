import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 p-7 flex text-white justify-around flex-col md:flex-row gap-5">
      <div className=''>
        <h3>سامانه خرید و اجاره ملک</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
        </p>
      </div>
      <div className="mx-auto md:-mx-0">
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
}
