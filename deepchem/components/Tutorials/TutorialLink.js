import Link from "next/link";

export default function TutorialLink({ title, active, onClick, index, fileName }) {

  function setCurrentTutorialIndex(newIndex){
    onClick(index);
  }
  return (
      <Link href = {`/tutorials/${fileName}`}>
        <div className="flex flex-row gap-2 m-2 cursor-pointer hover:bg-dc-light-gray/30"
             onClick={() => {
               setCurrentTutorialIndex(index);
             }}
        >
          <div
              className={`flex-shrink-0 w-2 bg-${
                  active ? "light-blue" : "light-gray"
              }`}
          ></div>
          <p className={`text-dc-${active ? "blue font-bold" : "gray"}`}>{title}</p>
        </div>
      </Link>
  );
}
