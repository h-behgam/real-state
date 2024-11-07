export default function ItemList({ data }: { data?: string[] }) {
  return (
    <>
      {data?.length ? (
        <ul>
          {data?.map((item) => (
            <li className="block" key={item}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </>
  );
}
