import Link from "next/link";

export default function TutorialLink({ title, active, onClick, index, fileName }) {

  function setCurrentTutorialIndex(newIndex){
    onClick(index);
  }
  return (
      <Link href = {`/tutorials/${fileName}`}>
        <div className={`mx-0 my-1 cursor-pointer font-poppins hover:bg-dc-light-gray/30 lg:border-l-8 ${active ? "border-dc-blue" : "border-dc-light-gray"} px-2 py-1`}
             onClick={() => {
               setCurrentTutorialIndex(index);
             }}
        >
          {/* <div
              className={`flex-shrink-0 w-2 bg-${
                  active ? "light-blue" : "light-gray"
              }`}
          ></div> */}
          <p className={`text-dc-${active ? "blue font-bold" : "gray"}`}>{title}</p>
        </div>
      </Link>
  );
}
