import Link from 'next/link';

export default function TutorialLink({
  title,
  active,
  onClick,
  index,
  fileName,
}) {
  function setCurrentTutorialIndex(newIndex) {
    onClick(index);
  }
  return (
    <Link href={`/tutorials/${fileName}`}>
      <div className={`mx-0 py-1 lg:my-1 border-b-[1px] lg:border-0 cursor-pointer font-poppins hover:bg-dc-light-gray/30 lg:border-l-8 ${active ? 'border-dc-blue' : 'border-dc-light-gray'} px-2 py-1`}
        onClick={() => {
          setCurrentTutorialIndex(index);
        }}
      >
        <p className={`text-dc-${active ? 'blue font-bold' : 'gray'}`}>{title}</p>
      </div>
    </Link>
  );
}
