export default function Card({ gratitude, onDelete }) {
    let onClick = (e) => {
      e.preventDefault();
      onDelete(gratitude);
    };
  
    return (
      <div className="w-full h-auto bg-pink-200 flex flex-row justify-between  items-center shadow-lg p-4 rounded-md flex-wrap text-black">
        <h1 className="pr-20 ">{gratitude}</h1>
        <button
          onClick={onClick}
          className="text-sm bg-white h-16 w-16 rounded-md hover:bg-red-400"
        >
          Delete
        </button>
      </div>
    );
  }
  