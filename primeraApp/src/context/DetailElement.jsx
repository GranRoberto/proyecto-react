function DetailElement({ title, value }) {
  return (
    <>
      <p className="flex justify-between w-8/12">
        <span className="font-bold">{title}</span>
        <span>{value}</span>
      </p>
      <hr className="w-10/12 border-[#505050]" />
    </>
  );
}

export default DetailElement;
